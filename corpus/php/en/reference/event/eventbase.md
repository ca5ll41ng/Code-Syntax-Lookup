---
id: "en-php-guide-class-eventbase"
language: "php"
lang: "en"
category: "guide"
name: "class.eventbase"
title: "The EventBase class"
module: "event"
source_url: "https://www.php.net/manual/en/class.eventbase.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The EventBase class

EventBase

   Introduction  `EventBase` class represents libevent's event base structure. It holds a set of events and can poll to determine which events are active.    Each event base has a *method*, or a *backend* that it uses to determine which events are ready. The recognized methods are: `select`, `poll`, `epoll`, `kqueue`, `devpoll`, `evport` and `win32`.    To configure event base to use, or avoid specific backend `EventConfig` class can be used.   
> Do *NOT* destroy the `EventBase` object as long as resources of the associated `Event` objects are not released. Otherwise, it will lead to unpredictable results!

    Class Synopsis    `EventBase`     `final` `EventBase`      `const` `int` `EventBase::LOOP_ONCE` 1   `const` `int` `EventBase::LOOP_NONBLOCK` 2   `const` `int` `EventBase::NOLOCK` 1   `const` `int` `EventBase::STARTUP_IOCP` 4   `const` `int` `EventBase::NO_CACHE_TIME` 8   `const` `int` `EventBase::EPOLL_USE_CHANGELIST` 16         Predefined Constants 
- **`EventBase::LOOP_ONCE`** — Flag used with `EventBase::loop()` method which means: "block until libevent has an active event, then exit once all active events have had their callbacks run".
- **`EventBase::LOOP_NONBLOCK`** — Flag used with `EventBase::loop()` method which means: "do not block: see which events are ready now, run the callbacks of the highest-priority ones, then exit".
- **`EventBase::NOLOCK`** — Configuration flag. Do not allocate a lock for the event base, even if we have locking set up".
- **`EventBase::STARTUP_IOCP`** — Windows-only configuration flag. Enables the IOCP dispatcher at startup.
- **`EventBase::NO_CACHE_TIME`** — Configuration flag. Instead of checking the current time every time the event loop is ready to run timeout callbacks, check after each timeout callback.
- **`EventBase::EPOLL_USE_CHANGELIST`** — If we are using the `epoll` backend, this flag says that it is safe to use Libevent's internal change-list code to batch up adds and deletes in order to try to do as few syscalls as possible. — Setting this flag can make code run faster, but it may trigger a Linux bug: it is not safe to use this flag if one has any fds cloned by dup(), or its variants. Doing so will produce strange and hard-to-diagnose bugs. — This flag can also be activated by setting the `EVENT_EPOLL_USE_CHANGELIST` environment variable. — This flag has no effect if one winds up using a backend other than `epoll`.
