---
id: "java-en-function-datagramsocket-setreceivebuffersize"
language: "java"
lang: "en"
category: "function"
name: "DatagramSocket.setReceiveBufferSize"
signature: "public void setReceiveBufferSize(int size) throws SocketException"
title: "DatagramSocket.setReceiveBufferSize"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramSocket.setReceiveBufferSize

```java
public void setReceiveBufferSize(int size) throws SocketException
```

Sets the SO_RCVBUF option to the specified value for this
 `DatagramSocket`. The SO_RCVBUF option is used by
 the network implementation as a hint to size the underlying
 network I/O buffers. The SO_RCVBUF setting may also be used
 by the network implementation to determine the maximum size
 of the packet that can be received on this socket.
 

 Because SO_RCVBUF is a hint, applications that want to
 verify what size the buffers were set to should call
 `getReceiveBufferSize`.
 

 Increasing SO_RCVBUF may allow the network implementation
 to buffer multiple packets when packets arrive faster than
 are being received using `receive`.
 

 Note: It is implementation specific if a packet larger
 than SO_RCVBUF can be received.

 If `size > 0`, this method is equivalent to calling
 `setOption(SocketOption, Object)
 setOption`.

**参数**

- **size** — the size to which to set the receive buffer size, in bytes. This value must be greater than 0.

**异常**

- **SocketException** — if there is an error in the underlying protocol, such as an UDP error, or the socket is closed.
- **IllegalArgumentException** — if the value is 0 or is negative.

**参见**

- #getReceiveBufferSize()
- StandardSocketOptions#SO_RCVBUF

> *Since 1.2*
