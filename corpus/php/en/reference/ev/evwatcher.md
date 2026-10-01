---
id: "en-php-guide-class-evwatcher"
language: "php"
lang: "en"
category: "guide"
name: "class.evwatcher"
title: "The EvWatcher class"
module: "ev"
source_url: "https://www.php.net/manual/en/class.evwatcher.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The EvWatcher class

EvWatcher

   Introduction  `EvWatcher` is a base class for all watchers( `EvCheck`, `EvChild` etc.). Since `EvWatcher` 's constructor is `abstract`, one can't(and don't need to) create EvWatcher objects directly.      Class Synopsis    `EvWatcher`     `abstract` `EvWatcher`      `public` `is_active`   `public` `data`   `public` `is_pending`   `public` `priority`          Properties 
- **`is_active`** — *Readonly*. `true` if the watcher is active. `false` otherwise.
- **`data`** — User custom data associated with the watcher
- **`is_pending`** — *Readonly* .`true` if the watcher is pending, i.e. it has outstanding events, but its callback has not yet been invoked. `false` otherwise. As long, as a watcher is pending(but not active), one must *not* change its priority.
- **`priority`** — `int` between `Ev::MINPRI` and `Ev::MAXPRI`. Pending watchers with higher priority will be invoked before watchers with lower priority, but priority will not keep watchers from being executed(except for `EvIdle` watchers). `EvIdle` watchers provide functionality to suppress invocation when higher priority events are pending.
