---
id: "en-php-guide-class-evloop"
language: "php"
lang: "en"
category: "guide"
name: "class.evloop"
title: "The EvLoop class"
module: "ev"
source_url: "https://www.php.net/manual/en/class.evloop.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The EvLoop class

EvLoop

   Introduction  Represents an event loop that is always distinct from the *default loop*. Unlike the *default loop*, it cannot handle `EvChild` watchers.    Having threads we have to create a loop per thread, and use the *default loop* in the parent thread.    The *default event loop* is initialized automatically by *Ev*. It is accessible via methods of the `Ev` class, or via `EvLoop::defaultLoop()` method.      Class Synopsis    `EvLoop`     `final` `EvLoop`      `public` `data`   `public` `backend`   `public` `is_default_loop`   `public` `iteration`   `public` `pending`   `public` `io_interval`   `public` `timeout_interval`   `public` `depth`          Properties 
- **`data`** — Custom data attached to loop
- **`backend`** — *Readonly*. The backend flags indicating the event backend in use.
- **`is_default_loop`** — *Readonly*. `true` if it is the default event loop.
- **`iteration`** — The current iteration count of the loop. See `Ev::iteration()`
- **`pending`** — The number of pending watchers. `0` indicates that there are no watchers pending.
- **`io_interval`** — Higher `io_interval` allows *libev* to spend more time collecting `EvIo` events, so more events can be handled per iteration, at the cost of increasing latency. Timeouts (both `EvPeriodic` and `EvTimer`) will not be affected. Setting this to a non-zero value will introduce an additional `sleep()` call into most loop iterations. The sleep time ensures that *libev* will not poll for `EvIo` events more often than once per this interval, on average. Many programs can usually benefit by setting the `io_interval` to a value near `0.1`, which is often enough for interactive servers(not for games). It usually doesn't make much sense to set it to a lower value than `0.01`, as this approaches the timing granularity of most systems. — See also [FUNCTIONS CONTROLLING EVENT LOOPS](http://pod.tst.eu/http://cvs.schmorp.de/libev/ev.pod#FUNCTIONS_CONTROLLING_EVENT_LOOPS).
- **`timeout_interval`** — Higher `timeout_interval` allows *libev* to spend more time collecting timeouts, at the expense of increased latency/jitter/inexactness(the watcher callback will be called later). `EvIo` watchers will not be affected. Setting this to a non-null value will not introduce any overhead in *libev*. See also [FUNCTIONS CONTROLLING EVENT LOOPS](http://pod.tst.eu/http://cvs.schmorp.de/libev/ev.pod#FUNCTIONS_CONTROLLING_EVENT_LOOPS).
- **`depth`** — The recursion depth. See `Ev::depth()`.
