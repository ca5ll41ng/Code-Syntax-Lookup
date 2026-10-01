---
id: "en-php-guide-class-swoole-event"
language: "php"
lang: "en"
category: "guide"
name: "class.swoole-event"
title: "The Swoole\\Event class"
module: "swoole"
source_url: "https://www.php.net/manual/en/class.swoole-event.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Swoole\Event class

Swoole\Event

   Introduction  The Swoole extension provides low-level interfaces to directly manipulate the underlying epoll/kqueue/poll/select event loop. It allows adding sockets created by other extensions or PHP's stream/socket extensions to Swoole's EventLoop.   
> The Event module is low-level, being a basic encapsulation of epoll. Users should have experience with IO multiplexing programming.

    Event Priority 
1. Signal handler callback functions set via Process::signal
2. Timer callback functions set via Timer::tick and Timer::after
3. Deferred execution functions set via Event::defer
4. Periodic callback functions set via Event::cycle

   Swoole Event Socket Type  
- **`$fd` `int`** — File descriptors, including Swoole\Client->$sock, Swoole\Process->$pipe, or any other file descriptor (fd).
- **`$stream resource` `resource`** — Resources created by stream_socket_client/fsockopen.
- **`$socket resource` `resource`** — Resources created by socket_create from the sockets extension require the --enable-sockets flag during Swoole compilation.
- **`$object` `object`** — Swoole automatically converts Swoole\Process into UnixSocket and Swoole\Client into connected client sockets at the underlying level.

     Class Synopsis   `Swoole\Event`    `Swoole\Event`
