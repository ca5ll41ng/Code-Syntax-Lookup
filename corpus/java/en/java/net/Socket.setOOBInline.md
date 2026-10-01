---
id: "java-en-function-socket-setoobinline"
language: "java"
lang: "en"
category: "function"
name: "Socket.setOOBInline"
signature: "public void setOOBInline(boolean on) throws SocketException"
title: "Socket.setOOBInline"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Socket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Socket.setOOBInline

```java
public void setOOBInline(boolean on) throws SocketException
```

Enable/disable `SO_OOBINLINE SO_OOBINLINE`
 (receipt of TCP urgent data)

 By default, this option is disabled and TCP urgent data received on a
 socket is silently discarded. If the user wishes to receive urgent data, then
 this option must be enabled. When enabled, urgent data is received
 inline with normal data.
 

 Note, only limited support is provided for handling incoming urgent
 data. In particular, no notification of incoming urgent data is provided
 and there is no capability to distinguish between normal data and urgent
 data unless provided by a higher level protocol.

**参数**

- **on** — `true` to enable `SO_OOBINLINE`, `false` to disable.

**异常**

- **SocketException** — if there is an error in the underlying protocol, such as a TCP error, or the socket is closed.

**参见**

- #getOOBInline()

> *Since 1.4*
