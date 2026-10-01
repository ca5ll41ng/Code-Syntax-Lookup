---
id: "java-en-function-socket-setreceivebuffersize"
language: "java"
lang: "en"
category: "function"
name: "Socket.setReceiveBufferSize"
signature: "public void setReceiveBufferSize(int size) throws SocketException"
title: "Socket.setReceiveBufferSize"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/Socket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Socket.setReceiveBufferSize

```java
public void setReceiveBufferSize(int size) throws SocketException
```

Sets the `SO_RCVBUF SO_RCVBUF` option to the
 specified value for this `Socket`. The
 `SO_RCVBUF` option is used by the platform's networking code
 as a hint for the size to set the underlying network I/O buffers.

 

Increasing the receive buffer size can increase the performance of
 network I/O for high-volume connection, while decreasing it can
 help reduce the backlog of incoming data.

 

Because `SO_RCVBUF` is a hint, applications that want to verify
 what size the buffers were set to should call `getReceiveBufferSize`.

 

The value of `SO_RCVBUF` is also used to set the TCP receive window
 that is advertised to the remote peer.
 Generally, the window size can be modified at any time when a socket is
 connected. However, if a receive window larger than 64K is required then
 this must be requested **before** the socket is connected to the
 remote peer. There are two cases to be aware of:
 
 
- For sockets accepted from a ServerSocket, this must be done by calling
 `setReceiveBufferSize` before the ServerSocket
 is bound to a local address.
 
- For client sockets, setReceiveBufferSize() must be called before
 connecting the socket to its remote peer.

**参数**

- **size** — the size to which to set the receive buffer size. This value must be greater than 0.

**异常**

- **IllegalArgumentException** — if the value is 0 or is negative.
- **SocketException** — if there is an error in the underlying protocol, such as a TCP error, or the socket is closed.

**参见**

- #getReceiveBufferSize()
- ServerSocket#setReceiveBufferSize(int)

> *Since 1.2*
