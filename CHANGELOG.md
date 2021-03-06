# Change Log

## [v2.20.3](https://github.com/webgme/webgme-engine/tree/v2.20.3) (2018-07-30)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.20.2...v2.20.3)

**Implemented enhancements:**

- Make sure gmeConfig is loaded correctly in classes.build [\#110](https://github.com/webgme/webgme-engine/pull/110) ([pmeijer](https://github.com/pmeijer))
- Add generation of minified build classes [\#109](https://github.com/webgme/webgme-engine/pull/109) ([pmeijer](https://github.com/pmeijer))

**Closed issues:**

- Creating metamodel from plugin loses metamodel tabs on refresh [\#112](https://github.com/webgme/webgme-engine/issues/112)

## [v2.20.2](https://github.com/webgme/webgme-engine/tree/v2.20.2) (2018-07-02)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.20.1...v2.20.2)

**Implemented enhancements:**

- Get library root id for GMENode [\#108](https://github.com/webgme/webgme-engine/pull/108) ([kecso](https://github.com/kecso))
- Log error when component-settings fails to load [\#107](https://github.com/webgme/webgme-engine/pull/107) ([pmeijer](https://github.com/pmeijer))

**Fixed bugs:**

- FIX Remove recently added branch events. [\#106](https://github.com/webgme/webgme-engine/pull/106) ([pmeijer](https://github.com/pmeijer))

## [v2.20.1](https://github.com/webgme/webgme-engine/tree/v2.20.1) (2018-06-25)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.20.0...v2.20.1)

**Fixed bugs:**

- Point to published npm package for requirejs-text [\#105](https://github.com/webgme/webgme-engine/pull/105) ([pmeijer](https://github.com/pmeijer))

## [v2.20.0](https://github.com/webgme/webgme-engine/tree/v2.20.0) (2018-06-22)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.19.9...v2.20.0)

**Implemented enhancements:**

- Package update [\#103](https://github.com/webgme/webgme-engine/pull/103) ([kecso](https://github.com/kecso))
- Update README.md and add documentation to client API. [\#102](https://github.com/webgme/webgme-engine/pull/102) ([pmeijer](https://github.com/pmeijer))
- Allow webgme server to be mounted at non-root path [\#101](https://github.com/webgme/webgme-engine/pull/101) ([kecso](https://github.com/kecso))
- Update major version of mocha and karma [\#100](https://github.com/webgme/webgme-engine/pull/100) ([pmeijer](https://github.com/pmeijer))

**Merged pull requests:**

- Add option for plugin\_bin to connect to storage via server [\#104](https://github.com/webgme/webgme-engine/pull/104) ([pmeijer](https://github.com/pmeijer))

## [v2.19.9](https://github.com/webgme/webgme-engine/tree/v2.19.9) (2018-06-04)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.19.8...v2.19.9)

**Implemented enhancements:**

- Add methods for getting common base and getting common parent for two or more nodes [\#82](https://github.com/webgme/webgme-engine/issues/82)
- Node module updates [\#92](https://github.com/webgme/webgme-engine/pull/92) ([pmeijer](https://github.com/pmeijer))
- Changing meta rule removal propagation [\#97](https://github.com/webgme/webgme-engine/pull/97) ([kecso](https://github.com/kecso))
- Fixes \#82 by adding core.getCommonBase and getCommonParent and equivalents on client API [\#96](https://github.com/webgme/webgme-engine/pull/96) ([pmeijer](https://github.com/pmeijer))
- Add addresses field and more details for webSockets in /api/status endpoint [\#95](https://github.com/webgme/webgme-engine/pull/95) ([pmeijer](https://github.com/pmeijer))
- Add module for handling crosscuts using the core \(e.g. from a plugin\) [\#94](https://github.com/webgme/webgme-engine/pull/94) ([pmeijer](https://github.com/pmeijer))

**Fixed bugs:**

- Better handling of expired tokens in websocket [\#98](https://github.com/webgme/webgme-engine/pull/98) ([pmeijer](https://github.com/pmeijer))

## [v2.19.8](https://github.com/webgme/webgme-engine/tree/v2.19.8) (2018-05-07)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.19.7...v2.19.8)

**Implemented enhancements:**

- Minor fixes for release 2.19.8 [\#90](https://github.com/webgme/webgme-engine/pull/90) ([kecso](https://github.com/kecso))
- Infer user at token verification instead at user api path [\#89](https://github.com/webgme/webgme-engine/pull/89) ([pmeijer](https://github.com/pmeijer))

**Fixed bugs:**

- Unable to import model if model's meta is a library and vice versa [\#86](https://github.com/webgme/webgme-engine/issues/86)
- Minor fixes for release 2.19.8 [\#90](https://github.com/webgme/webgme-engine/pull/90) ([kecso](https://github.com/kecso))
- Fixes discrepancies in admin account and projects created at start up  [\#87](https://github.com/webgme/webgme-engine/pull/87) ([pmeijer](https://github.com/pmeijer))

## [v2.19.7](https://github.com/webgme/webgme-engine/tree/v2.19.7) (2018-04-10)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.19.6...v2.19.7)

**Implemented enhancements:**

- Allow inferred users to have displayName [\#81](https://github.com/webgme/webgme-engine/issues/81)
- Exception in mixin core when checking valid attribute of undefined attribute [\#65](https://github.com/webgme/webgme-engine/issues/65)
- Remove restriction on zip file size of complex blob artifact [\#84](https://github.com/webgme/webgme-engine/pull/84) ([pmeijer](https://github.com/pmeijer))
- Closes \#81 Allow inferred users to have displayName [\#83](https://github.com/webgme/webgme-engine/pull/83) ([kecso](https://github.com/kecso))
- Closes \#78 Add support to specify seeds to be created at server start up [\#80](https://github.com/webgme/webgme-engine/pull/80) ([kecso](https://github.com/kecso))
- Initiate graceful server shutdown on SIGTERM [\#69](https://github.com/webgme/webgme-engine/pull/69) ([pmeijer](https://github.com/pmeijer))
- Add method getUserId on Project, Plugin and Client APIs [\#67](https://github.com/webgme/webgme-engine/pull/67) ([pmeijer](https://github.com/pmeijer))
- Closes \#65 Exception in mixin core when checking valid attribute of undefined attribute. [\#66](https://github.com/webgme/webgme-engine/pull/66) ([kecso](https://github.com/kecso))

**Fixed bugs:**

- Exported project contains extra .webgmex [\#74](https://github.com/webgme/webgme-engine/issues/74)
- Containment inheritance loop detection during node creation is missing [\#73](https://github.com/webgme/webgme-engine/issues/73)
- "namespace" is not auto set when executing a plugin [\#71](https://github.com/webgme/webgme-engine/issues/71)
- Fixes \#73 Containment inheritance loop detection during node creation is missing [\#76](https://github.com/webgme/webgme-engine/pull/76) ([kecso](https://github.com/kecso))
- Fixes \#74 do not add extra webgmex at project export [\#75](https://github.com/webgme/webgme-engine/pull/75) ([pmeijer](https://github.com/pmeijer))
- Use the activeObject for the nodeId on the client. Fixes \#71 [\#72](https://github.com/webgme/webgme-engine/pull/72) ([brollb](https://github.com/brollb))

**Closed issues:**

- Add support to specify seeds to be created at server start up [\#78](https://github.com/webgme/webgme-engine/issues/78)
- Add support for public organizations and admin to be created at start up [\#77](https://github.com/webgme/webgme-engine/issues/77)

**Merged pull requests:**

- Fixes \#77 adds support for default admin account and public organization [\#79](https://github.com/webgme/webgme-engine/pull/79) ([pmeijer](https://github.com/pmeijer))

## [v2.19.6](https://github.com/webgme/webgme-engine/tree/v2.19.6) (2018-03-12)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.19.5...v2.19.6)

**Implemented enhancements:**

- Adding a seed as a library [\#63](https://github.com/webgme/webgme-engine/issues/63)
- Add API for generating webgmexm \(export of subset\(s\) of project\) [\#57](https://github.com/webgme/webgme-engine/issues/57)
- Add REST endpoint for statistics about connected users etc. [\#54](https://github.com/webgme/webgme-engine/issues/54)
-  Cannot call setFinishTime of undefined [\#52](https://github.com/webgme/webgme-engine/issues/52)
- Core should check for valid attribute, pointer, aspects and set names. [\#49](https://github.com/webgme/webgme-engine/issues/49)
- renameAttributeMeta does not exist on client API [\#48](https://github.com/webgme/webgme-engine/issues/48)
- Fixes \#63 Expose usage of seed in addLibrary/updateLibrary/updateProjectFromFile from client [\#64](https://github.com/webgme/webgme-engine/pull/64) ([pmeijer](https://github.com/pmeijer))
- Fixes \#57 expose serialization functions [\#62](https://github.com/webgme/webgme-engine/pull/62) ([pmeijer](https://github.com/pmeijer))
- Enable plugins to be required without requirejs and passed to manager as "class" [\#59](https://github.com/webgme/webgme-engine/pull/59) ([pmeijer](https://github.com/pmeijer))
- Fixes \#48 renameAttributeMeta does not exist on client API [\#56](https://github.com/webgme/webgme-engine/pull/56) ([kecso](https://github.com/kecso))
- Fixes \#54 add rest status end points [\#55](https://github.com/webgme/webgme-engine/pull/55) ([pmeijer](https://github.com/pmeijer))
- Use the plugin.result as default result value. Fixes \#52 [\#53](https://github.com/webgme/webgme-engine/pull/53) ([brollb](https://github.com/brollb))
- Support creation of test projects from "json" objects [\#50](https://github.com/webgme/webgme-engine/pull/50) ([pmeijer](https://github.com/pmeijer))

**Fixed bugs:**

- Cascading moves cause crash during merge [\#60](https://github.com/webgme/webgme-engine/issues/60)
- Core.isValidAttributeValueOf should return false if attribute is readonly and value holder not a metanode [\#51](https://github.com/webgme/webgme-engine/issues/51)
- Fixes \#60 Cascading moves cause crash during merge [\#61](https://github.com/webgme/webgme-engine/pull/61) ([kecso](https://github.com/kecso))
- Fix tests checking for invalid regular expressions which changed around node v8.10.0 [\#58](https://github.com/webgme/webgme-engine/pull/58) ([pmeijer](https://github.com/pmeijer))
- Fixes \\#48 renameAttributeMeta does not exist on client API [\#56](https://github.com/webgme/webgme-engine/pull/56) ([kecso](https://github.com/kecso))

## [v2.19.5](https://github.com/webgme/webgme-engine/tree/v2.19.5) (2018-02-09)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.19.4...v2.19.5)

**Implemented enhancements:**

- Client API should have a method to close project [\#43](https://github.com/webgme/webgme-engine/issues/43)
- Depend on marked explicitly to avoid unsecure version [\#46](https://github.com/webgme/webgme-engine/pull/46) ([pmeijer](https://github.com/pmeijer))
- Closes \#42 Closes \#43 Various improvements to client API and SWM [\#45](https://github.com/webgme/webgme-engine/pull/45) ([pmeijer](https://github.com/pmeijer))

**Fixed bugs:**

- Setting new position to 0 will assign 100 in client api [\#42](https://github.com/webgme/webgme-engine/issues/42)

**Merged pull requests:**

- Allow multiple watchers of documents sharing the same socket connection [\#47](https://github.com/webgme/webgme-engine/pull/47) ([pmeijer](https://github.com/pmeijer))

## [v2.19.4](https://github.com/webgme/webgme-engine/tree/v2.19.4) (2018-01-29)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.19.3...v2.19.4)

**Implemented enhancements:**

- Worker manager should have a configurable maximum number of queued jobs [\#41](https://github.com/webgme/webgme-engine/issues/41)
- Fixes \#41 introduce maxQueuedWorkerRequests parameter and fix plugin results at failures [\#44](https://github.com/webgme/webgme-engine/pull/44) ([pmeijer](https://github.com/pmeijer))

**Fixed bugs:**

- Disconnected worker requests need to be notified properly [\#38](https://github.com/webgme/webgme-engine/issues/38)
- Fixes \\#41 introduce maxQueuedWorkerRequests parameter and fix plugin results at failures [\#44](https://github.com/webgme/webgme-engine/pull/44) ([pmeijer](https://github.com/pmeijer))
- Fixes \#38 Server workers act on changes in the connection state [\#39](https://github.com/webgme/webgme-engine/pull/39) ([pmeijer](https://github.com/pmeijer))

## [v2.19.3](https://github.com/webgme/webgme-engine/tree/v2.19.3) (2018-01-11)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.19.2...v2.19.3)

**Implemented enhancements:**

- Bump year to 2018. [\#36](https://github.com/webgme/webgme-engine/pull/36) ([kecso](https://github.com/kecso))
- Update to ejs 2.5.7 and use it as a node\_module [\#35](https://github.com/webgme/webgme-engine/pull/35) ([pmeijer](https://github.com/pmeijer))
- Websocket error reporting and promises in storage [\#34](https://github.com/webgme/webgme-engine/pull/34) ([pmeijer](https://github.com/pmeijer))

**Fixed bugs:**

- Prohibit core and storage to bombard server with loadPaths requests [\#37](https://github.com/webgme/webgme-engine/pull/37) ([pmeijer](https://github.com/pmeijer))

## [v2.19.2](https://github.com/webgme/webgme-engine/tree/v2.19.2) (2017-12-18)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.19.1...v2.19.2)

**Fixed bugs:**

- Fix Plugin MetaGME Paradigm Importer does not properly import connections [\#33](https://github.com/webgme/webgme-engine/pull/33) ([kecso](https://github.com/kecso))

## [v2.19.1](https://github.com/webgme/webgme-engine/tree/v2.19.1) (2017-12-13)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.19.0...v2.19.1)

## [v2.19.0](https://github.com/webgme/webgme-engine/tree/v2.19.0) (2017-12-13)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.18.5...v2.19.0)

**Implemented enhancements:**

- addLibrary from seed [\#29](https://github.com/webgme/webgme-engine/issues/29)
- Add postinstall builder for generating common/libs  [\#2](https://github.com/webgme/webgme-engine/issues/2)
- Fixes \#29 addLibrary and updateLibrary from seed possible [\#31](https://github.com/webgme/webgme-engine/pull/31) ([pmeijer](https://github.com/pmeijer))
- Fixes \#2 browserify common-libs in postinstall script and bump versions [\#26](https://github.com/webgme/webgme-engine/pull/26) ([pmeijer](https://github.com/pmeijer))
- Use eslint for style rules [\#25](https://github.com/webgme/webgme-engine/pull/25) ([pmeijer](https://github.com/pmeijer))
- Track opened transactions and allow multiple invocations to join a single transaction [\#24](https://github.com/webgme/webgme-engine/pull/24) ([pmeijer](https://github.com/pmeijer))

**Fixed bugs:**

- CoreQ should not swallow errors from addLibrary and setGuid [\#30](https://github.com/webgme/webgme-engine/pull/30) ([pmeijer](https://github.com/pmeijer))

**Merged pull requests:**

- Add support for editing attributes using Operation Transformations [\#28](https://github.com/webgme/webgme-engine/pull/28) ([pmeijer](https://github.com/pmeijer))

## [v2.18.5](https://github.com/webgme/webgme-engine/tree/v2.18.5) (2017-11-14)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.18.4...v2.18.5)

**Implemented enhancements:**

- Referenced objects returned from the core should be copied at return [\#17](https://github.com/webgme/webgme-engine/issues/17)
- Better source code documentation for callbacks in plugin-base  [\#23](https://github.com/webgme/webgme-engine/pull/23) ([pmeijer](https://github.com/pmeijer))
- Better error handling at faulty metadata.json for plugins [\#22](https://github.com/webgme/webgme-engine/pull/22) ([pmeijer](https://github.com/pmeijer))
- Fix colliding debugger ports in workers for nodejs \> 8  [\#21](https://github.com/webgme/webgme-engine/pull/21) ([pmeijer](https://github.com/pmeijer))
- Bump node-module versions [\#20](https://github.com/webgme/webgme-engine/pull/20) ([pmeijer](https://github.com/pmeijer))
- Fixes \#17 Copies all returned objects from core [\#19](https://github.com/webgme/webgme-engine/pull/19) ([pmeijer](https://github.com/pmeijer))
- Use Node 8 and 6 for CI tests and make appropriate changes [\#18](https://github.com/webgme/webgme-engine/pull/18) ([pmeijer](https://github.com/pmeijer))

## [v2.18.4](https://github.com/webgme/webgme-engine/tree/v2.18.4) (2017-10-13)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.18.3...v2.18.4)

**Fixed bugs:**

- Relaunching users in client throws exception [\#14](https://github.com/webgme/webgme-engine/issues/14)
- Merging branches with children created in a container and container removed resolves with no conflict [\#13](https://github.com/webgme/webgme-engine/issues/13)
- Merging two branches with new nodes only keeps one [\#12](https://github.com/webgme/webgme-engine/issues/12)
- Merge fixes [\#16](https://github.com/webgme/webgme-engine/pull/16) ([kecso](https://github.com/kecso))
- Fixes \#14 make sure UI is not null before accessing relaunch [\#15](https://github.com/webgme/webgme-engine/pull/15) ([pmeijer](https://github.com/pmeijer))

## [v2.18.3](https://github.com/webgme/webgme-engine/tree/v2.18.3) (2017-09-25)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.18.2...v2.18.3)

**Fixed bugs:**

- Typo in build classes regarding Q [\#9](https://github.com/webgme/webgme-engine/pull/9) ([pmeijer](https://github.com/pmeijer))

## [v2.18.2](https://github.com/webgme/webgme-engine/tree/v2.18.2) (2017-09-19)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.18.1...v2.18.2)

**Implemented enhancements:**

- Add missing client meta methods [\#8](https://github.com/webgme/webgme-engine/pull/8) ([pmeijer](https://github.com/pmeijer))
- Make plugin.isMetaTypeOf more robust and better core documentation [\#7](https://github.com/webgme/webgme-engine/pull/7) ([pmeijer](https://github.com/pmeijer))
- Remove obsolete client side paths in globals. [\#6](https://github.com/webgme/webgme-engine/pull/6) ([pmeijer](https://github.com/pmeijer))

**Fixed bugs:**

- Meta-rules and constraint checking throws exception in client [\#5](https://github.com/webgme/webgme-engine/pull/5) ([pmeijer](https://github.com/pmeijer))

## [v2.18.1](https://github.com/webgme/webgme-engine/tree/v2.18.1) (2017-09-13)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.18.0...v2.18.1)

**Implemented enhancements:**

- Expose server modules at require\('webgme-engine'\) [\#4](https://github.com/webgme/webgme-engine/pull/4) ([pmeijer](https://github.com/pmeijer))

**Fixed bugs:**

- Fix randomly failing test regarding copying multiple nodes [\#3](https://github.com/webgme/webgme-engine/pull/3) ([pmeijer](https://github.com/pmeijer))

## [v2.18.0](https://github.com/webgme/webgme-engine/tree/v2.18.0) (2017-09-11)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.17.0...v2.18.0)

**Implemented enhancements:**

- First npm release of webgme-engine [\#1](https://github.com/webgme/webgme-engine/issues/1)

## [v2.17.0](https://github.com/webgme/webgme-engine/tree/v2.17.0) (2017-08-28)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.16.0...v2.17.0)

## [v2.16.0](https://github.com/webgme/webgme-engine/tree/v2.16.0) (2017-07-31)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.15.1...v2.16.0)

## [v2.15.1](https://github.com/webgme/webgme-engine/tree/v2.15.1) (2017-07-06)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.15.0...v2.15.1)

## [v2.15.0](https://github.com/webgme/webgme-engine/tree/v2.15.0) (2017-07-03)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.14.1...v2.15.0)

## [v2.14.1](https://github.com/webgme/webgme-engine/tree/v2.14.1) (2017-06-13)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.14.0...v2.14.1)

## [v2.14.0](https://github.com/webgme/webgme-engine/tree/v2.14.0) (2017-06-05)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.13.1...v2.14.0)

## [v2.13.1](https://github.com/webgme/webgme-engine/tree/v2.13.1) (2017-05-15)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.13.0...v2.13.1)

## [v2.13.0](https://github.com/webgme/webgme-engine/tree/v2.13.0) (2017-05-08)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.12.1...v2.13.0)

## [v2.12.1](https://github.com/webgme/webgme-engine/tree/v2.12.1) (2017-04-11)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.12.0...v2.12.1)

## [v2.12.0](https://github.com/webgme/webgme-engine/tree/v2.12.0) (2017-04-10)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.11.1...v2.12.0)

## [v2.11.1](https://github.com/webgme/webgme-engine/tree/v2.11.1) (2017-03-21)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.11.0...v2.11.1)

## [v2.11.0](https://github.com/webgme/webgme-engine/tree/v2.11.0) (2017-03-13)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.10.0...v2.11.0)

## [v2.10.0](https://github.com/webgme/webgme-engine/tree/v2.10.0) (2017-02-13)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.9.0...v2.10.0)

## [v2.9.0](https://github.com/webgme/webgme-engine/tree/v2.9.0) (2017-01-16)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.8.0...v2.9.0)

## [v2.8.0](https://github.com/webgme/webgme-engine/tree/v2.8.0) (2016-12-20)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.7.1...v2.8.0)

## [v2.7.1](https://github.com/webgme/webgme-engine/tree/v2.7.1) (2016-11-28)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.7.0...v2.7.1)

## [v2.7.0](https://github.com/webgme/webgme-engine/tree/v2.7.0) (2016-11-22)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.6.3...v2.7.0)

## [v2.6.3](https://github.com/webgme/webgme-engine/tree/v2.6.3) (2016-11-16)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.6.2...v2.6.3)

## [v2.6.2](https://github.com/webgme/webgme-engine/tree/v2.6.2) (2016-11-15)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.6.1...v2.6.2)

## [v2.6.1](https://github.com/webgme/webgme-engine/tree/v2.6.1) (2016-10-31)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.6.0...v2.6.1)

## [v2.6.0](https://github.com/webgme/webgme-engine/tree/v2.6.0) (2016-10-24)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.5.1...v2.6.0)

## [v2.5.1](https://github.com/webgme/webgme-engine/tree/v2.5.1) (2016-09-30)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.5.0...v2.5.1)

## [v2.5.0](https://github.com/webgme/webgme-engine/tree/v2.5.0) (2016-09-27)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.4.1...v2.5.0)

## [v2.4.1](https://github.com/webgme/webgme-engine/tree/v2.4.1) (2016-09-01)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.4.0...v2.4.1)

## [v2.4.0](https://github.com/webgme/webgme-engine/tree/v2.4.0) (2016-08-29)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.3.1...v2.4.0)

## [v2.3.1](https://github.com/webgme/webgme-engine/tree/v2.3.1) (2016-08-10)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.3.0...v2.3.1)

## [v2.3.0](https://github.com/webgme/webgme-engine/tree/v2.3.0) (2016-08-01)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.2.1...v2.3.0)

## [v2.2.1](https://github.com/webgme/webgme-engine/tree/v2.2.1) (2016-07-18)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.2.0...v2.2.1)

## [v2.2.0](https://github.com/webgme/webgme-engine/tree/v2.2.0) (2016-07-04)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.1.0...v2.2.0)

## [v2.1.0](https://github.com/webgme/webgme-engine/tree/v2.1.0) (2016-06-06)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.0.1...v2.1.0)

## [v2.0.1](https://github.com/webgme/webgme-engine/tree/v2.0.1) (2016-05-23)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v2.0.0...v2.0.1)

## [v2.0.0](https://github.com/webgme/webgme-engine/tree/v2.0.0) (2016-05-06)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v1.7.2...v2.0.0)

## [v1.7.2](https://github.com/webgme/webgme-engine/tree/v1.7.2) (2016-04-26)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v1.7.1...v1.7.2)

## [v1.7.1](https://github.com/webgme/webgme-engine/tree/v1.7.1) (2016-04-18)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v1.7.0...v1.7.1)

## [v1.7.0](https://github.com/webgme/webgme-engine/tree/v1.7.0) (2016-04-11)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v1.6.0...v1.7.0)

## [v1.6.0](https://github.com/webgme/webgme-engine/tree/v1.6.0) (2016-03-14)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v1.5.1...v1.6.0)

## [v1.5.1](https://github.com/webgme/webgme-engine/tree/v1.5.1) (2016-02-20)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v1.5.0...v1.5.1)

## [v1.5.0](https://github.com/webgme/webgme-engine/tree/v1.5.0) (2016-02-15)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v1.4.1...v1.5.0)

## [v1.4.1](https://github.com/webgme/webgme-engine/tree/v1.4.1) (2016-01-20)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v1.4.0...v1.4.1)

## [v1.4.0](https://github.com/webgme/webgme-engine/tree/v1.4.0) (2016-01-18)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v1.3.2...v1.4.0)

## [v1.3.2](https://github.com/webgme/webgme-engine/tree/v1.3.2) (2016-01-08)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v1.3.1...v1.3.2)

## [v1.3.1](https://github.com/webgme/webgme-engine/tree/v1.3.1) (2015-12-23)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v1.3.0...v1.3.1)

## [v1.3.0](https://github.com/webgme/webgme-engine/tree/v1.3.0) (2015-12-21)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v1.2.1...v1.3.0)

## [v1.2.1](https://github.com/webgme/webgme-engine/tree/v1.2.1) (2015-11-30)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v1.2.0...v1.2.1)

## [v1.2.0](https://github.com/webgme/webgme-engine/tree/v1.2.0) (2015-11-23)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v1.1.0...v1.2.0)

## [v1.1.0](https://github.com/webgme/webgme-engine/tree/v1.1.0) (2015-10-26)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v1.0.2...v1.1.0)

## [v1.0.2](https://github.com/webgme/webgme-engine/tree/v1.0.2) (2015-10-08)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v1.0.1...v1.0.2)

## [v1.0.1](https://github.com/webgme/webgme-engine/tree/v1.0.1) (2015-10-04)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v1.0.0...v1.0.1)

## [v1.0.0](https://github.com/webgme/webgme-engine/tree/v1.0.0) (2015-09-29)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v0.14.1...v1.0.0)

## [v0.14.1](https://github.com/webgme/webgme-engine/tree/v0.14.1) (2015-09-07)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v0.14.0...v0.14.1)

## [v0.14.0](https://github.com/webgme/webgme-engine/tree/v0.14.0) (2015-08-31)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v0.13.2...v0.14.0)

## [v0.13.2](https://github.com/webgme/webgme-engine/tree/v0.13.2) (2015-08-12)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v0.13.1...v0.13.2)

## [v0.13.1](https://github.com/webgme/webgme-engine/tree/v0.13.1) (2015-08-10)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v0.13.0...v0.13.1)

## [v0.13.0](https://github.com/webgme/webgme-engine/tree/v0.13.0) (2015-08-03)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v0.12.1...v0.13.0)

## [v0.12.1](https://github.com/webgme/webgme-engine/tree/v0.12.1) (2015-07-20)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v0.12.0...v0.12.1)

## [v0.12.0](https://github.com/webgme/webgme-engine/tree/v0.12.0) (2015-07-06)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v0.11.1...v0.12.0)

## [v0.11.1](https://github.com/webgme/webgme-engine/tree/v0.11.1) (2015-06-15)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v0.11.0...v0.11.1)

## [v0.11.0](https://github.com/webgme/webgme-engine/tree/v0.11.0) (2015-06-09)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v0.10.2...v0.11.0)

## [v0.10.2](https://github.com/webgme/webgme-engine/tree/v0.10.2) (2015-05-12)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v0.10.1...v0.10.2)

## [v0.10.1](https://github.com/webgme/webgme-engine/tree/v0.10.1) (2015-05-11)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v0.10.0...v0.10.1)

## [v0.10.0](https://github.com/webgme/webgme-engine/tree/v0.10.0) (2015-05-11)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v0.9.2...v0.10.0)

## [v0.9.2](https://github.com/webgme/webgme-engine/tree/v0.9.2) (2015-04-15)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v0.9.1...v0.9.2)

## [v0.9.1](https://github.com/webgme/webgme-engine/tree/v0.9.1) (2015-04-13)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v0.9.0...v0.9.1)

## [v0.9.0](https://github.com/webgme/webgme-engine/tree/v0.9.0) (2015-04-13)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v0.8.2...v0.9.0)

## [v0.8.2](https://github.com/webgme/webgme-engine/tree/v0.8.2) (2015-03-19)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v0.8.1...v0.8.2)

## [v0.8.1](https://github.com/webgme/webgme-engine/tree/v0.8.1) (2015-03-16)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v0.8.0...v0.8.1)

## [v0.8.0](https://github.com/webgme/webgme-engine/tree/v0.8.0) (2015-03-16)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v0.7.2...v0.8.0)

## [v0.7.2](https://github.com/webgme/webgme-engine/tree/v0.7.2) (2015-03-06)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v0.7.1...v0.7.2)

## [v0.7.1](https://github.com/webgme/webgme-engine/tree/v0.7.1) (2015-02-25)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v0.7.0...v0.7.1)

## [v0.7.0](https://github.com/webgme/webgme-engine/tree/v0.7.0) (2015-02-16)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/v0.6.6...v0.7.0)

## [v0.6.6](https://github.com/webgme/webgme-engine/tree/v0.6.6) (2015-02-09)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/webgme_0.6.5...v0.6.6)

## [webgme_0.6.5](https://github.com/webgme/webgme-engine/tree/webgme_0.6.5) (2014-06-30)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/webgme_0.6.3...webgme_0.6.5)

## [webgme_0.6.3](https://github.com/webgme/webgme-engine/tree/webgme_0.6.3) (2014-06-26)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/webgme_0.5.12...webgme_0.6.3)

## [webgme_0.5.12](https://github.com/webgme/webgme-engine/tree/webgme_0.5.12) (2014-05-29)
[Full Changelog](https://github.com/webgme/webgme-engine/compare/webgme_0.4.4...webgme_0.5.12)

## [webgme_0.4.4](https://github.com/webgme/webgme-engine/tree/webgme_0.4.4) (2014-02-05)


\* *This Change Log was automatically generated by [github_changelog_generator](https://github.com/skywinder/Github-Changelog-Generator)*