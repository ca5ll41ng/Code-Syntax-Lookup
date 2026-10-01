---
id: "en-php-guide-class-eventutil"
language: "php"
lang: "en"
category: "guide"
name: "class.eventutil"
title: "The EventUtil class"
module: "event"
source_url: "https://www.php.net/manual/en/class.eventutil.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The EventUtil class

EventUtil

   Introduction  `EventUtil` is a singleton with supplementary methods and constants.      Class Synopsis    `EventUtil`     `final` `EventUtil`      `const` `int` `EventUtil::AF_INET` 2   `const` `int` `EventUtil::AF_INET6` 10   `const` `int` `EventUtil::AF_UNSPEC` 0   `const` `int` `EventUtil::LIBEVENT_VERSION_NUMBER` 33559808   `const` `int` `EventUtil::SO_DEBUG` 1   `const` `int` `EventUtil::SO_REUSEADDR` 2   `const` `int` `EventUtil::SO_KEEPALIVE` 9   `const` `int` `EventUtil::SO_DONTROUTE` 5   `const` `int` `EventUtil::SO_LINGER` 13   `const` `int` `EventUtil::SO_BROADCAST` 6   `const` `int` `EventUtil::SO_OOBINLINE` 10   `const` `int` `EventUtil::SO_SNDBUF` 7   `const` `int` `EventUtil::SO_RCVBUF` 8   `const` `int` `EventUtil::SO_SNDLOWAT` 19   `const` `int` `EventUtil::SO_RCVLOWAT` 18   `const` `int` `EventUtil::SO_SNDTIMEO` 21   `const` `int` `EventUtil::SO_RCVTIMEO` 20   `const` `int` `EventUtil::SO_TYPE` 3   `const` `int` `EventUtil::SO_ERROR` 4   `const` `int` `EventUtil::SOL_SOCKET` 1   `const` `int` `EventUtil::SOL_TCP` 6   `const` `int` `EventUtil::SOL_UDP` 17   `const` `int` `EventUtil::IPPROTO_IP` 0   `const` `int` `EventUtil::IPPROTO_IPV6` 41         Predefined Constants 
- **`EventUtil::AF_INET`** — IPv4 address family
- **`EventUtil::AF_INET6`** — IPv6 address family
- **`EventUtil::AF_UNSPEC`** — Unspecified IP address family
- **`EventUtil::SO_DEBUG`** — Socket option. Enable socket debugging. Only allowed for processes with the `CAP_NET_ADMIN` capability or an effective user ID of `0`. (Added in event-1.6.0.)
- **`EventUtil::SO_REUSEADDR`** — Socket option. Indicates that the rules used in validating addresses supplied in a `bind(2)` call should allow reuse of local addresses. See the `socket(7)` manual page. (Added in event-1.6.0.)
- **`EventUtil::SO_KEEPALIVE`** — Socket option. Enable sending of keep-alive messages on connection-oriented sockets. Expects an integer boolean flag. See the `socket(7)` manual page. (Added in event-1.6.0.)
- **`EventUtil::SO_DONTROUTE`** — Socket option. See the `socket(7)` manual page. (Added in event-1.6.0.)
- **`EventUtil::SO_LINGER`** — Socket option. When enabled, a `close(2)` or `shutdown(2)` will not return until all queued messages for the socket have been successfully sent or the linger timeout has been reached. Otherwise, the call returns immediately and the closing is done in the background. See the `socket(7)` manual page. (Added in event-1.6.0.)
- **`EventUtil::SO_BROADCAST`** — Socket option. Reports whether transmission of broadcast messages is supported. See the `socket(7)` manual page. (Added in event-1.6.0.)
- **`EventUtil::SO_OOBINLINE`** — Socket option. See the `socket(7)` manual page. (Added in event-1.6.0.)
- **`EventUtil::SO_SNDBUF`** — Socket option. See the `socket(7)` manual page. (Added in event-1.6.0.)
- **`EventUtil::SO_RCVBUF`** — Socket option. See the `socket(7)` manual page. (Added in event-1.6.0.)
- **`EventUtil::SO_SNDLOWAT`** — Socket option. See the `socket(7)` manual page. (Added in event-1.6.0.)
- **`EventUtil::SO_RCVLOWAT`** — Socket option. See the `socket(7)` manual page. (Added in event-1.6.0.)
- **`EventUtil::SO_SNDTIMEO`** — Socket option. See the `socket(7)` manual page. (Added in event-1.6.0.)
- **`EventUtil::SO_RCVTIMEO`** — Socket option. See the `socket(7)` manual page. (Added in event-1.6.0.)
- **`EventUtil::SO_TYPE`** — Socket option. See the `socket(7)` manual page. (Added in event-1.6.0.)
- **`EventUtil::SO_ERROR`** — Socket option. See the `socket(7)` manual page. (Added in event-1.6.0.)
- **`EventUtil::SOL_SOCKET`** — Socket option level. See the `socket(7)` manual page. (Added in event-1.6.0.)
- **`EventUtil::SOL_TCP`** — Socket option level. See the `socket(7)` manual page. (Added in event-1.6.0.)
- **`EventUtil::SOL_UDP`** — Socket option level. See the `socket(7)` manual page. (Added in event-1.6.0.)
- **`EventUtil::IPPROTO_IP`** — See the `socket(7)` manual page. (Added in event-1.6.0.)
- **`EventUtil::IPPROTO_IPV6`** — See the `socket(7)` manual page. (Added in event-1.6.0.)
- **`EventUtil::LIBEVENT_VERSION_NUMBER`** — Libevent' version number at the time when Event extension had been compiled with the library.
