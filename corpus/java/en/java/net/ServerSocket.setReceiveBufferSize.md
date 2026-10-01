---
id: "java-en-function-serversocket-setreceivebuffersize"
language: "java"
lang: "en"
category: "function"
name: "ServerSocket.setReceiveBufferSize"
signature: "public void setReceiveBufferSize(int size) throws SocketException"
title: "ServerSocket.setReceiveBufferSize"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/ServerSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ServerSocket.setReceiveBufferSize

```java
public void setReceiveBufferSize(int size) throws SocketException
```

Sets a default proposed value for the
 `SO_RCVBUF SO_RCVBUF` option for sockets
 accepted from this `ServerSocket`. The value actually set
 in the accepted socket must be determined by calling
 `getReceiveBufferSize` after the socket
 is returned by `accept`.
 

 The value of `SO_RCVBUF` is used both to set the size of
 the internal socket receive buffer, and to set the size
 of the TCP receive window that is advertised to the remote peer.
 

 It is possible to change the value subsequently, by calling
 `setReceiveBufferSize`. However, if the application
 wishes to allow a receive window larger than 64K bytes, as defined by RFC1323
 then the proposed value must be set in the ServerSocket **before**
 it is bound to a local address. This implies, that the ServerSocket must be
 created with the no-argument constructor, then setReceiveBufferSize() must
 be called and lastly the ServerSocket is bound to an address by calling bind().
 

 Failure to do this will not cause an error, and the buffer size may be set to the
 requested value but the TCP receive window in sockets accepted from
 this ServerSocket will be no larger than 64K bytes.

**参数**

- **size** — the size to which to set the receive buffer size. This value must be greater than 0.

**异常**

- **SocketException** — if there is an error in the underlying protocol, such as a TCP error, or the socket is closed.
- **IllegalArgumentException** — if the value is 0 or is negative.

**参见**

- #getReceiveBufferSize

> *Since 1.4*
