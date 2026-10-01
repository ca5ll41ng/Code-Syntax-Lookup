---
id: "en-php-guide-class-evcheck"
language: "php"
lang: "en"
category: "guide"
name: "class.evcheck"
title: "The EvCheck class"
module: "ev"
source_url: "https://www.php.net/manual/en/class.evcheck.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The EvCheck class

EvCheck

   Introduction  `EvPrepare` and `EvCheck` watchers are usually used in pairs. `EvPrepare` watchers get invoked before the process blocks, `EvCheck` afterwards.    It is not allowed to call `EvLoop::run()` or similar methods or functions that enter the current event loop from either `EvPrepare` or `EvCheck` watchers. Other loops than the current one are fine, however. The rationale behind this is that one don't need to check for recursion in those watchers, i.e. the sequence will always be: `EvPrepare` -> blocking -> `EvCheck`, so having a watcher of each kind they will always be called in pairs bracketing the blocking call.    The main purpose is to integrate other event mechanisms into *libev* and their use is somewhat advanced. They could be used, for example, to track variable changes, implement custom watchers, integrate net-snmp or a coroutine library and lots more. They are also occasionally useful to cache some data and want to flush it before blocking.    It is recommended to give `EvCheck` watchers highest( `Ev::MAXPRI`) priority, to ensure that they are being run before any other watchers after the poll (this doesn’t matter for `EvPrepare` watchers).    Also, `EvCheck` watchers should not activate/feed events. While *libev* fully supports this, they might get executed before other `EvCheck` watchers did their job.      Class Synopsis    `EvCheck`     `EvCheck`   `extends` `EvWatcher`
