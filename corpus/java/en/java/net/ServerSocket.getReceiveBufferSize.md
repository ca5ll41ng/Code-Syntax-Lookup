---
id: "java-en-function-serversocket-getreceivebuffersize"
language: "java"
lang: "en"
category: "function"
name: "ServerSocket.getReceiveBufferSize"
signature: "public int getReceiveBufferSize() throws SocketException"
title: "ServerSocket.getReceiveBufferSize"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/ServerSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ServerSocket.getReceiveBufferSize

```java
public int getReceiveBufferSize() throws SocketException
```

Gets the value of the `SO_RCVBUF SO_RCVBUF` option
 for this `ServerSocket`, that is the proposed buffer size that
 will be used for Sockets accepted from this `ServerSocket`.

 

Note, the value actually set in the accepted socket is determined by
 calling `getReceiveBufferSize`.

**返回**

- the value of the `SO_RCVBUF` option for this `Socket`.

**异常**

- **SocketException** — if there is an error in the underlying protocol, such as a TCP error, or the socket is closed.

**参见**

- #setReceiveBufferSize(int)

> *Since 1.4*
