---
id: "en-php-guide-class-evperiodic"
language: "php"
lang: "en"
category: "guide"
name: "class.evperiodic"
title: "The EvPeriodic class"
module: "ev"
source_url: "https://www.php.net/manual/en/class.evperiodic.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The EvPeriodic class

EvPeriodic

   Introduction  Periodic watchers are also timers of a kind, but they are very versatile.    Unlike `EvTimer`, `EvPeriodic` watchers are not based on real time(or relative time, the physical time that passes) but on wall clock time(absolute time, calendar or clock). The difference is that wall clock time can run faster or slower than real time, and time jumps are not uncommon(e.g. when adjusting it).    `EvPeriodic` watcher can be configured to trigger after some specific point in time. For example, if an `EvPeriodic` watcher is configured to trigger *"in 10 seconds"* (e.g. `EvLoop::now()` + `10.0`, i.e. an absolute time, not a delay), and the system clock is reset to *January of the previous year*, then it will take a year or more to trigger the event (unlike an `EvTimer`, which would still trigger roughly `10` seconds after starting it as it uses a relative timeout).    As with timers, the callback is guaranteed to be invoked only when the point in time where it is supposed to trigger has passed. If multiple timers become ready during the same loop iteration then the ones with earlier time-out values are invoked before ones with later time-out values (but this is no longer true when a callback calls `EvLoop::run()` recursively).      Class Synopsis    `EvPeriodic`     `EvPeriodic`   `extends` `EvWatcher`      `public` `offset`   `public` `interval`              Properties 
- **`offset`** — When repeating, this contains the offset value, otherwise this is the absolute point in time(the offset value passed to `EvPeriodic::set()`, although *libev* might modify this value for better numerical stability).
- **`interval`** — The current interval value. Can be modified any time, but changes only take effect when the periodic timer fires or `EvPeriodic::again()` is being called.
