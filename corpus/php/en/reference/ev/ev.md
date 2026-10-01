---
id: "en-php-guide-class-ev"
language: "php"
lang: "en"
category: "guide"
name: "class.ev"
title: "The Ev class"
module: "ev"
source_url: "https://www.php.net/manual/en/class.ev.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Ev class

Ev

  Introduction  Ev is a static class providing access to the default loop and to some common operations.     Class Synopsis   `Ev`    `final` `Ev`     `const` `int` `Ev::FLAG_AUTO` 0   `const` `int` `Ev::FLAG_NOENV` 16777216   `const` `int` `Ev::FLAG_FORKCHECK` 33554432   `const` `int` `Ev::FLAG_NOINOTIFY` 1048576   `const` `int` `Ev::FLAG_SIGNALFD` 2097152   `const` `int` `Ev::FLAG_NOSIGMASK` 4194304   `const` `int` `Ev::RUN_NOWAIT` 1   `const` `int` `Ev::RUN_ONCE` 2   `const` `int` `Ev::BREAK_CANCEL` 0   `const` `int` `Ev::BREAK_ONE` 1   `const` `int` `Ev::BREAK_ALL` 2   `const` `int` `Ev::MINPRI` -2   `const` `int` `Ev::MAXPRI` 2   `const` `int` `Ev::READ` 1   `const` `int` `Ev::WRITE` 2   `const` `int` `Ev::TIMER` 256   `const` `int` `Ev::PERIODIC` 512   `const` `int` `Ev::SIGNAL` 1024   `const` `int` `Ev::CHILD` 2048   `const` `int` `Ev::STAT` 4096   `const` `int` `Ev::IDLE` 8192   `const` `int` `Ev::PREPARE` 16384   `const` `int` `Ev::CHECK` 32768   `const` `int` `Ev::EMBED` 65536   `const` `int` `Ev::CUSTOM` 16777216   `const` `int` `Ev::ERROR` 2147483648   `const` `int` `Ev::BACKEND_SELECT` 1   `const` `int` `Ev::BACKEND_POLL` 2   `const` `int` `Ev::BACKEND_EPOLL` 4   `const` `int` `Ev::BACKEND_KQUEUE` 8   `const` `int` `Ev::BACKEND_DEVPOLL` 16   `const` `int` `Ev::BACKEND_PORT` 32   `const` `int` `Ev::BACKEND_ALL` 63   `const` `int` `Ev::BACKEND_MASK` 65535       Predefined Constants  Flags passed to create a loop: 
- **`Ev::FLAG_AUTO`** — The default flags value
- **`Ev::FLAG_NOENV`** — If this flag used(or the program runs setuid or setgid), `libev` won't look at the environment variable `LIBEV_FLAGS`. Otherwise(by default), `LIBEV_FLAGS` will override the flags completely if it is found. Useful for performance tests and searching for bugs.
- **`Ev::FLAG_FORKCHECK`** — Makes libev check for a fork in each iteration, instead of calling `EvLoop::fork()` manually. This works by calling `getpid()` on every iteration of the loop, and thus this might slow down the event loop with lots of loop iterations, but usually is not noticeable. This flag setting cannot be overridden or specified in the `LIBEV_FLAGS` environment variable.
- **`Ev::FLAG_NOINOTIFY`** — When this flag is specified, `libev` won't attempt to use the `inotify` API for its [ev_stat]() watchers. The flag can be useful to conserve inotify file descriptors, as otherwise each loop using `ev_stat` watchers consumes one `inotify` handle.
- **`Ev::FLAG_SIGNALFD`** — When this flag is specified, `libev` will attempt to use the `signalfd` API for its [ev_signal]() (and [ev_child]()) watchers. This API delivers signals synchronously, which makes it both faster and might make it possible to get the queued signal data. It can also simplify signal handling with threads, as long as signals are properly blocked in threads. `Signalfd` will not be used by default.
- **`Ev::FLAG_NOSIGMASK`** — When this flag is specified, `libev` will avoid to modify the signal mask. Specifically, this means having to make sure signals are unblocked before receiving them. — This behaviour is useful for custom signal handling, or handling signals only in specific threads.

    Flags passed to `Ev::run()`, or `EvLoop::run()` 
- **`Ev::RUN_NOWAIT`** — Means that event loop will look for new events, will handle those events and any already outstanding ones, but will not wait and block the process in case there are no events and will return after one iteration of the loop. This is sometimes useful to poll and handle new events while doing lengthy calculations, to keep the program responsive.
- **`Ev::RUN_ONCE`** — Means that event loop will look for new events (waiting if necessary) and will handle those and any already outstanding ones. It will block the process until at least one new event arrives (which could be an event internal to libev itself, so there is no guarantee that a user-registered callback will be called), and will return after one iteration of the loop.

    Flags passed to `Ev::stop()`, or `EvLoop::stop()` 
- **`Ev::BREAK_CANCEL`** — Cancel the break operation.
- **`Ev::BREAK_ONE`** — Makes the innermost `Ev::run()` (or `EvLoop::run()`) call return.
- **`Ev::BREAK_ALL`** — Makes all nested `Ev::run()` (or `EvLoop::run()`) calls return.

    Watcher priorities: 
- **`Ev::MINPRI`** — Minimum allowed watcher priority.
- **`Ev::MAXPRI`** — Maximum allowed watcher priority.

    Bit masks of (received) events: 
- **`Ev::READ`** — The file descriptor in the `EvIo` watcher has become readable.
- **`Ev::WRITE`** — The file descriptor in the `EvIo` watcher has become writable.
- **`Ev::TIMER`** — `EvTimer` watcher has been timed out.
- **`Ev::PERIODIC`** — `EvPeriodic` watcher has been timed out.
- **`Ev::SIGNAL`** — A signal specified in `EvSignal::__construct()` has been received.
- **`Ev::CHILD`** — The `$pid` specified in `EvChild::__construct()` has received a status change.
- **`Ev::STAT`** — The path specified in `EvStat` watcher changed its attributes.
- **`Ev::IDLE`** — `EvIdle` watcher works when there is nothing to do with other watchers.
- **`Ev::PREPARE`** — All `EvPrepare` watchers are invoked just before `Ev::run()` starts. Thus, `EvPrepare` watchers are the last watchers invoked before the event loop sleeps or polls for new events.
- **`Ev::CHECK`** — All `EvCheck` watchers are queued just after `Ev::run()` has gathered the new events, but before it queues any callbacks for any received events. Thus, `EvCheck` watchers will be invoked before any other watchers of the same or lower priority within an event loop iteration.
- **`Ev::EMBED`** — The embedded event loop specified in the `EvEmbed` watcher needs attention.
- **`Ev::CUSTOM`** — Not ever sent(or otherwise used) by `libev` itself, but can be freely used by `libev` users to signal watchers (e.g. via `EvWatcher::feed()` ).
- **`Ev::ERROR`** — An unspecified error has occurred, the watcher has been stopped. This might happen because the watcher could not be properly started because `libev` ran out of memory, a file descriptor was found to be closed or any other problem. `Libev` considers these application bugs. See also [ANATOMY OF A WATCHER](http://pod.tst.eu/http://cvs.schmorp.de/libev/ev.pod#ANATOMY_OF_A_WATCHER_CONTENT)

    Backend flags: 
- **`Ev::BACKEND_SELECT`** — `select(2) backend`
- **`Ev::BACKEND_POLL`** — `poll(2) backend`
- **`Ev::BACKEND_EPOLL`** — Linux-specific `epoll(7)` backend for both pre- and post-2.6.9 kernels
- **`Ev::BACKEND_KQUEUE`** — `kqueue` backend used on most BSD systems. `EvEmbed` watcher could be used to embed one loop(with kqueue backend) into another. For instance, one can try to create an event loop with `kqueue` backend and use it for sockets only.
- **`Ev::BACKEND_DEVPOLL`** — Solaris 8 backend. This is not implemented yet.
- **`Ev::BACKEND_PORT`** — Solaris 10 event port mechanism with a good scaling.
- **`Ev::BACKEND_ALL`** — Try all backends(even corrupted ones). It's not recommended to use it explicitly. Bitwise operators should be applied here(e.g. `Ev::BACKEND_ALL` & ~ `Ev::BACKEND_KQUEUE`) Use `Ev::recommendedBackends()`, or don't specify any backends at all.
- **`Ev::BACKEND_MASK`** — Not a backend, but a mask to select all backend bits from `$flags` value to mask out any backends(e.g. when modifying the `LIBEV_FLAGS` environment variable).

   
> For the default loop during module initialization phase `Ev` registers [ev_loop_fork]() call by means of `pthread_atfork` (if available).

 
> There are methods providing access to the *default event loop* in `Ev` class(e.g. `Ev::iteration()`, `Ev::depth()` etc.) For *custom loops* (created with `EvLoop::__construct()`) these values may be accessed via corresponding properties and methods of the `EvLoop` class.
>
> The instance of the default event loop itself can be fetched by means of `EvLoop::defaultLoop()` method.
