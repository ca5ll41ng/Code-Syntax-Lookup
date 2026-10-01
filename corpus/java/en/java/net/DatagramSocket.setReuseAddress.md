---
id: "java-en-function-datagramsocket-setreuseaddress"
language: "java"
lang: "en"
category: "function"
name: "DatagramSocket.setReuseAddress"
signature: "public void setReuseAddress(boolean on) throws SocketException"
title: "DatagramSocket.setReuseAddress"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramSocket.setReuseAddress

```java
public void setReuseAddress(boolean on) throws SocketException
```

Enable/disable the SO_REUSEADDR socket option.
 

 For UDP sockets it may be necessary to bind more than one
 socket to the same socket address. This is typically for the
 purpose of receiving multicast packets
 (See `java.net.MulticastSocket`). The
 `SO_REUSEADDR` socket option allows multiple
 sockets to be bound to the same socket address if the
 `SO_REUSEADDR` socket option is enabled prior
 to binding the socket using `bind`.
 

 Note: This functionality is not supported by all existing platforms,
 so it is implementation specific whether this option will be ignored
 or not. However, if it is not supported then
 `getReuseAddress` will always return `false`.
 

 When a `DatagramSocket` is created the initial setting
 of `SO_REUSEADDR` is disabled.
 

 The behaviour when `SO_REUSEADDR` is enabled or
 disabled after a socket is bound (See `isBound`)
 is not defined.

 This method is equivalent to calling `setOption(SocketOption, Object)
 setOption`.

**参数**

- **on** — whether to enable or disable the

**异常**

- **SocketException** — if an error occurs enabling or disabling the `SO_REUSEADDR` socket option, or the socket is closed.

**参见**

- #getReuseAddress()
- #bind(SocketAddress)
- #isBound()
- #isClosed()
- StandardSocketOptions#SO_REUSEADDR

> *Since 1.4*
