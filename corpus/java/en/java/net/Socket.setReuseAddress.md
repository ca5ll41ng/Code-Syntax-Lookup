---
id: "java-en-function-socket-setreuseaddress"
language: "java"
lang: "en"
category: "function"
name: "Socket.setReuseAddress"
signature: "public void setReuseAddress(boolean on) throws SocketException"
title: "Socket.setReuseAddress"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Socket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Socket.setReuseAddress

```java
public void setReuseAddress(boolean on) throws SocketException
```

Enable/disable the `SO_REUSEADDR SO_REUSEADDR`
 socket option.
 

 When a TCP connection is closed the connection may remain
 in a timeout state for a period of time after the connection
 is closed (typically known as the `TIME_WAIT` state
 or `2MSL` wait state).
 For applications using a well known socket address or port
 it may not be possible to bind a socket to the required
 `SocketAddress` if there is a connection in the
 timeout state involving the socket address or port.
 

 Enabling `SO_REUSEADDR` prior to binding the socket using
 `bind` allows the socket to be bound even
 though a previous connection is in a timeout state.
 

 When a `Socket` is created the initial setting
 of `SO_REUSEADDR` is disabled.
 

 The behaviour when `SO_REUSEADDR` is enabled or disabled after
 a socket is bound (See `isBound`) is not defined.

**参数**

- **on** — whether to enable or disable the socket option

**异常**

- **SocketException** — if an error occurs enabling or disabling the `SO_REUSEADDR` socket option, or the socket is closed.

**参见**

- #getReuseAddress()
- #bind(SocketAddress)
- #isClosed()
- #isBound()

> *Since 1.4*
