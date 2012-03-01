/*
 * Copyright (C) 2012 Vanderbilt University, All rights reserved.
 *
 * Author: Miklos Maroti
 */

define(["lib/sha1"], function () {
	"use strict";

	// ----------------- debugging -----------------

	var ASSERT = function (cond) {
		if( !cond ) {
			var error = new Error("ASSERT failed");
			var message = "ASSERT failed at " + error.stack;

			if( console ) {
				console.log(message);
			}

			throw error;
		}
	};

	// ----------------- storage -----------------

	// TODO: JSON.stringify does not guarantee any ordering, we need to do this manually
	
	var createCoreStorage = function () {
		var that = {
			hash: "dirty",
			attributes: {},
			children: {}
		};
		
		Object.defineProperty(that, "hash", {
			writable: true,
			enumerable: false
		});
		
		return that;
	};

	var encodeCoreStorage = function (storage) {
		ASSERT(storage.hash === "dirty");
		
		var s = JSON.stringify(storage);
		var hash = SHA1(s);
		
		return '{"hash":"' + hash + '",' + s.substr(1);
	};
	
	var decodeCoreStorage = function (json)	{
		var that = JSON.parse(json);
		
		Object.defineProperty(that, "hash", {
			writable: true,
			enumerable: false
		});
		
		// verify data
		ASSERT(that.hash === SHA1(JSON.stringify(that)));
		
		return that;
	};
	
	// ----------------- object -----------------

	var coreObject = Object.create(Object.prototype);

	var initCoreObject = function (parent, relid) {
		ASSERT(coreObject.isPrototypeOf(this));
		ASSERT((parent === null && relid === "")
				|| (coreObject.isPrototypeOf(parent) && relid !== ""));

		this.relid = relid;
		this.parent = parent;
		this.children = {};
		this.attributes = {};
		this.subtypes = [];

		if( parent ) {
			parent.children[relid] = this;
		}

		if( Object.getPrototypeOf(this).subtypes ) {
			Object.getPrototypeOf(this).subtypes.push(this);
		}
	};

	var createCoreObject = function (parent, relid, type) {
		ASSERT(type === coreObject || coreObject.isPrototypeOf(type));

		var that = Object.create(type);
		initCoreObject.call(that, parent, relid);

		return that;
	};

	coreObject.getType = function () {
		var p = Object.getPrototypeOf(this);

		return p;
	};

	coreObject.getParent = function () {
		return this.parent;
	};

	coreObject.getPath = function () {
		if( this.parent === null ) {
			return "/";
		}
		else if( this.parent.parent === null ) {
			return "/" + this.relid;
		}
		else {
			return this.parent.getPath() + "/" + this.relid;
		}
	};

	coreObject.getName = function () {
		if( this.attributes.name ) {
			return this.attributes.name;
		}

		return "[object at " + this.getPath() + "]";
	};

	coreObject.setName = function (name) {
		this.attributes.name = name;
	};

	coreObject.toString = function () {
		return this.getName();
	};

	coreObject.getChildren = function (callback) {
		callback(this, this.children);
	};

	// ----------------- territory -----------------

	var coreTerritory = Object.create(Object.prototype);

	var initCoreTerritory = function (project) {
		ASSERT(coreTerritory.isPrototypeOf(this));
		ASSERT(coreProject.isPrototypeOf(project));

		this.project = project;
		this.objects = [];
	};

	var createCoreTerritory = function () {
		var that = Object.create(coreTerritory);
		initCoreTerritory.call(that);
		return that;
	};

	// ----------------- project -----------------

	var coreProject = Object.create(Object.prototype);

	var initCoreProject = function () {
		ASSERT(coreProject.isPrototypeOf(this));

		this.root = createCoreObject(null, "", coreObject);
		var metameta = createCoreObject(this.root, "metameta", coreObject);
		createCoreObject(metameta, "object", coreObject);
	};

	var createCoreProject = function () {
		var that = Object.create(coreProject);
		initCoreProject.call(that);
		return that;
	};

	coreProject.getRoot = function () {
		return this.root;
	};

	coreProject.createTerritory = function () {
		return createCoreTerritory(this);
	};

	/**
	 * Looks up an GME object by path. The path must be absolute, that is it
	 * must start with "/". The callback function is called when the GME object
	 * is loaded into memory, and the GME object is passed as an argument to the
	 * callback function. The GME object stays in memory as long as it has
	 * registered events.
	 */
	coreProject.getObject = function (path, callback) {
		ASSERT(path.charAt(0) === "/");

		var a = path.split("/");
		var o = this.root;

		for( var i = 0; i < a.length; ++i ) {
			if( a[i].length > 0 ) {
				o = o.children[a[i]];
				if( !o ) {
					callback(null);
					return;
				}
			}
		}

		callback(o);
	};

	// ----------------- public interface -----------------

	return {
		createProject: function () {
			return createCoreProject();
		},
		createStorage: function () {
			return createCoreStorage();
		},
		encodeStorage: function (storage) {
			return encodeCoreStorage(storage);
		},
		decodeStorage: function (json) {
			return decodeCoreStorage(json);
		}
		
	};
});
