---
id: "java-en-function-socket-getsendbuffersize"
language: "java"
lang: "en"
category: "function"
name: "Socket.getSendBufferSize"
signature: "public int getSendBufferSize() throws SocketException"
title: "Socket.getSendBufferSize"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Socket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Socket.getSendBufferSize

```java
public int getSendBufferSize() throws SocketException
```

Get value of the `SO_SNDBUF SO_SNDBUF` option
 for this `Socket`, that is the buffer size used by the platform
 for output on this `Socket`.

**返回**

- the value of the `SO_SNDBUF` option for this `Socket`.

**异常**

- **SocketException** — if there is an error in the underlying protocol, such as a TCP error, or the socket is closed.

**参见**

- #setSendBufferSize(int)

> *Since 1.2*
