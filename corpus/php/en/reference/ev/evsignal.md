---
id: "en-php-guide-class-evsignal"
language: "php"
lang: "en"
category: "guide"
name: "class.evsignal"
title: "The EvSignal class"
module: "ev"
source_url: "https://www.php.net/manual/en/class.evsignal.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The EvSignal class

EvSignal

   Introduction  `EvSignal` watchers will trigger an event when the process receives a specific signal one or more times. Even though signals are very asynchronous, *libev* will try its best to deliver signals synchronously, i.e. as part of the normal event processing, like any other event.    There is no limit for the number of watchers for the same signal, but only within the same loop, i.e. one can watch for `SIGINT` in the default loop and for `SIGIO` in another loop, but it is not allowed to watch for `SIGINT` in both the default loop and another loop at the same time. At the moment, `SIGCHLD` is permanently tied to the default loop.    If possible and supported, *libev* will install its handlers with `SA_RESTART` (or equivalent) behaviour enabled, so system calls should not be unduly interrupted. In case of a problem with system calls getting interrupted by signals, all the signals can be blocked in an `EvCheck` watcher and unblocked in a `EvPrepare` watcher.      Class Synopsis    `EvSignal`     `EvSignal`   `extends` `EvWatcher`      `public` `signum`              Properties 
- **`signum`** — Signal number. See the constants exported by *pcntl* extension. See also `signal(7)` man page.
