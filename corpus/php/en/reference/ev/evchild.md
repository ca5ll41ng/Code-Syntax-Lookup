---
id: "en-php-guide-class-evchild"
language: "php"
lang: "en"
category: "guide"
name: "class.evchild"
title: "The EvChild class"
module: "ev"
source_url: "https://www.php.net/manual/en/class.evchild.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The EvChild class

EvChild

   Introduction  `EvChild` watchers trigger when the process receives a `SIGCHLD` in response to some child status changes (most typically when a child dies or exits). It is permissible to install an `EvChild` watcher after the child has been forked(which implies it might have already exited), as long as the event loop isn't entered(or is continued from a watcher), i.e. forking and then immediately registering a watcher for the child is fine, but forking and registering a watcher a few event loop iterations later or in the next callback invocation is not.    It is allowed to register `EvChild` watchers in the *default loop* only.      Class Synopsis    `EvChild`     `EvChild`   `extends` `EvWatcher`      `public` `pid`   `public` `rpid`   `public` `rstatus`              Properties 
- **`pid`** — *Readonly*. The process ID this watcher watches out for, or `0`, meaning any process ID.
- **`rpid`** — *Readonly* .The process ID that detected a status change.
- **`rstatus`** — *Readonly*. The process exit status caused by `rpid`.
