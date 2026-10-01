---
id: "en-php-guide-class-eventbufferevent"
language: "php"
lang: "en"
category: "guide"
name: "class.eventbufferevent"
title: "The EventBufferEvent class"
module: "event"
source_url: "https://www.php.net/manual/en/class.eventbufferevent.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The EventBufferEvent class

EventBufferEvent

   Introduction  Represents Libevent's buffer event.    Usually an application wants to perform some amount of data buffering in addition to just responding to events. When we want to write data, for example, the usual pattern looks like:   
1. Decide that we want to write some data to a connection; put that data in a buffer.
2. Wait for the connection to become writable
3. Write as much of the data as we can
4. Remember how much we wrote, and if we still have more data to write, wait for the connection to become writable again.

  This buffered I/O pattern is common enough that Libevent provides a generic mechanism for it. A "buffer event" consists of an underlying transport (like a socket), a read buffer, and a write buffer. Instead of regular events, which give callbacks when the underlying transport is ready to be read or written, a buffer event invokes its user-supplied callbacks when it has read or written enough data.      Class Synopsis    `EventBufferEvent`     `final` `EventBufferEvent`      `const` `int` `EventBufferEvent::READING` 1   `const` `int` `EventBufferEvent::WRITING` 2   `const` `int` `EventBufferEvent::EOF` 16   `const` `int` `EventBufferEvent::ERROR` 32   `const` `int` `EventBufferEvent::TIMEOUT` 64   `const` `int` `EventBufferEvent::CONNECTED` 128   `const` `int` `EventBufferEvent::OPT_CLOSE_ON_FREE` 1   `const` `int` `EventBufferEvent::OPT_THREADSAFE` 2   `const` `int` `EventBufferEvent::OPT_DEFER_CALLBACKS` 4   `const` `int` `EventBufferEvent::OPT_UNLOCK_CALLBACKS` 8   `const` `int` `EventBufferEvent::SSL_OPEN` 0   `const` `int` `EventBufferEvent::SSL_CONNECTING` 1   `const` `int` `EventBufferEvent::SSL_ACCEPTING` 2    `public` `int` `fd`   `public` `int` `priority`   `public` `readonly` `EventBuffer` `input`   `public` `readonly` `EventBuffer` `output`         Properties 
- **`fd`** — Numeric file descriptor associated with the buffer event. Normally represents a bound socket. Equals to `null`, if there is no file descriptor(socket) associated with the buffer event.
- **`priority`** — The priority of the events used to implement the buffer event.
- **`input`** — Underlying input buffer object( `EventBuffer`)
- **`output`** — Underlying output buffer object( `EventBuffer`)

     Predefined Constants 
- **`EventBufferEvent::READING`** — An event occurred during a read operation on the bufferevent. See the other flags for which event it was.
- **`EventBufferEvent::WRITING`** — An event occurred during a write operation on the bufferevent. See the other flags for which event it was.
- **`EventBufferEvent::EOF`** — Got an end-of-file indication on the buffer event.
- **`EventBufferEvent::ERROR`** — An error occurred during a bufferevent operation. For more information on what the error was, call `EventUtil::getLastSocketErrno()` and/or `EventUtil::getLastSocketError()`.
- **`EventBufferEvent::TIMEOUT`**
- **`EventBufferEvent::CONNECTED`** — Finished a requested connection on the bufferevent.
- **`EventBufferEvent::OPT_CLOSE_ON_FREE`** — When the buffer event is freed, close the underlying transport. This will close an underlying socket, free an underlying buffer event, etc.
- **`EventBufferEvent::OPT_THREADSAFE`** — Automatically allocate locks for the bufferevent, so that it’s safe to use from multiple threads.
- **`EventBufferEvent::OPT_DEFER_CALLBACKS`** — When this flag is set, the bufferevent defers all of its callbacks. See [Fast portable non-blocking network programming with Libevent, Deferred callbacks](http://www.wangafu.net/~nickm/libevent-book/Ref6_bufferevent.html#_deferred_callbacks).
- **`EventBufferEvent::OPT_UNLOCK_CALLBACKS`** — By default, when the bufferevent is set up to be threadsafe, the buffer event’s locks are held whenever the any user-provided callback is invoked. Setting this option makes Libevent release the buffer event’s lock when it’s invoking the callbacks.
- **`EventBufferEvent::SSL_OPEN`** — The SSL handshake is done
- **`EventBufferEvent::SSL_CONNECTING`** — SSL is currently performing negotiation as a client
- **`EventBufferEvent::SSL_ACCEPTING`** — SSL is currently performing negotiation as a server
