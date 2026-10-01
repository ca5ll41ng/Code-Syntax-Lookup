---
id: "java-en-function-socket-getreceivebuffersize"
language: "java"
lang: "en"
category: "function"
name: "Socket.getReceiveBufferSize"
signature: "public int getReceiveBufferSize() throws SocketException"
title: "Socket.getReceiveBufferSize"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Socket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Socket.getReceiveBufferSize

```java
public int getReceiveBufferSize() throws SocketException
```

Gets the value of the `SO_RCVBUF SO_RCVBUF` option
 for this `Socket`, that is the buffer size used by the platform
 for input on this `Socket`.

**返回**

- the value of the `SO_RCVBUF` option for this `Socket`.

**异常**

- **SocketException** — if there is an error in the underlying protocol, such as a TCP error, or the socket is closed.

**参见**

- #setReceiveBufferSize(int)

> *Since 1.2*
