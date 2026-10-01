---
id: "java-en-function-datagramsocket-getreceivebuffersize"
language: "java"
lang: "en"
category: "function"
name: "DatagramSocket.getReceiveBufferSize"
signature: "public int getReceiveBufferSize() throws SocketException"
title: "DatagramSocket.getReceiveBufferSize"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramSocket.getReceiveBufferSize

```java
public int getReceiveBufferSize() throws SocketException
```

Get value of the SO_RCVBUF option for this `DatagramSocket`, that is the
 buffer size, in bytes, used by the platform for input on this `DatagramSocket`.

 This method is equivalent to calling `getOption(SocketOption)
 getOption`.

**返回**

- the value of the SO_RCVBUF option for this `DatagramSocket`

**异常**

- **SocketException** — if there is an error in the underlying protocol, such as an UDP error, or the socket is closed.

**参见**

- #setReceiveBufferSize(int)
- StandardSocketOptions#SO_RCVBUF

> *Since 1.2*
