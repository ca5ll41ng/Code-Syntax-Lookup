---
id: "java-en-function-datagramsocket-getsendbuffersize"
language: "java"
lang: "en"
category: "function"
name: "DatagramSocket.getSendBufferSize"
signature: "public int getSendBufferSize() throws SocketException"
title: "DatagramSocket.getSendBufferSize"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramSocket.getSendBufferSize

```java
public int getSendBufferSize() throws SocketException
```

Get value of the SO_SNDBUF option for this `DatagramSocket`, that is the
 buffer size, in bytes, used by the platform for output on this `DatagramSocket`.

 This method is equivalent to calling `getOption(SocketOption)
 getOption`.

**返回**

- the value of the SO_SNDBUF option for this `DatagramSocket`

**异常**

- **SocketException** — if there is an error in the underlying protocol, such as an UDP error, or the socket is closed.

**参见**

- #setSendBufferSize
- StandardSocketOptions#SO_SNDBUF

> *Since 1.2*
