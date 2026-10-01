---
id: "java-en-function-socket-setsendbuffersize"
language: "java"
lang: "en"
category: "function"
name: "Socket.setSendBufferSize"
signature: "public void setSendBufferSize(int size) throws SocketException"
title: "Socket.setSendBufferSize"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Socket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Socket.setSendBufferSize

```java
public void setSendBufferSize(int size) throws SocketException
```

Sets the `SO_SNDBUF SO_SNDBUF` option to the
 specified value for this `Socket`.
 The `SO_SNDBUF` option is used by the platform's networking code
 as a hint for the size to set the underlying network I/O buffers.

 

Because `SO_SNDBUF` is a hint, applications that want to verify
 what size the buffers were set to should call `getSendBufferSize`.

**参数**

- **size** — the size to which to set the send buffer size. This value must be greater than 0.

**异常**

- **SocketException** — if there is an error in the underlying protocol, such as a TCP error, or the socket is closed.
- **IllegalArgumentException** — if the value is 0 or is negative.

**参见**

- #getSendBufferSize()

> *Since 1.2*
