---
id: "en-php-guide-class-eventlistener"
language: "php"
lang: "en"
category: "guide"
name: "class.eventlistener"
title: "The EventListener class"
module: "event"
source_url: "https://www.php.net/manual/en/class.eventlistener.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The EventListener class

EventListener

   Introduction  Represents a connection listener.      Class Synopsis    `EventListener`     `final` `EventListener`      `const` `int` `EventListener::OPT_LEAVE_SOCKETS_BLOCKING` 1   `const` `int` `EventListener::OPT_CLOSE_ON_FREE` 2   `const` `int` `EventListener::OPT_CLOSE_ON_EXEC` 4   `const` `int` `EventListener::OPT_REUSEABLE` 8   `const` `int` `EventListener::OPT_THREADSAFE` 16    `public` `readonly` `int` `fd`        Properties 
- **`fd`** — Numeric file descriptor of the underlying socket. (Added in `event-1.6.0` .)

    Predefined Constants 
- **`EventListener::OPT_LEAVE_SOCKETS_BLOCKING`** — By default Libevent turns underlying file descriptors, or sockets, to non-blocking mode. This flag tells Libevent to leave them in blocking mode.
- **`EventListener::OPT_CLOSE_ON_FREE`** — If this option is set, the connection listener closes its underlying socket when the `EventListener` object is freed.
- **`EventListener::OPT_CLOSE_ON_EXEC`** — If this option is set, the connection listener sets the close-on-exec flag on the underlying listener socket. See platform documentation for `fcntl` and `FD_CLOEXEC` for more information.
- **`EventListener::OPT_REUSEABLE`** — By default on some platforms, once a listener socket is closed, no other socket can bind to the same port until a while has passed. Setting this option makes Libevent mark the socket as reusable, so that once it is closed, another socket can be opened to listen on the same port.
- **`EventListener::OPT_THREADSAFE`** — Allocate locks for the listener, so that it’s safe to use it from multiple threads.
