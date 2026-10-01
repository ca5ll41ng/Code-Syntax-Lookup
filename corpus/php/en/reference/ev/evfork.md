---
id: "en-php-guide-class-evfork"
language: "php"
lang: "en"
category: "guide"
name: "class.evfork"
title: "The EvFork class"
module: "ev"
source_url: "https://www.php.net/manual/en/class.evfork.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The EvFork class

EvFork

   Introduction  Fork watchers are called when a `fork()` was detected (usually because whoever signalled *libev* about it by calling `EvLoop::fork()` ). The invocation is done before the event loop blocks next and before `EvCheck` watchers are being called, and only in the child after the fork. Note, that if whoever calling `EvLoop::fork()` calls it in the wrong process, the fork handlers will be invoked, too.      Class Synopsis    `EvFork`     `EvFork`   `extends` `EvWatcher`
