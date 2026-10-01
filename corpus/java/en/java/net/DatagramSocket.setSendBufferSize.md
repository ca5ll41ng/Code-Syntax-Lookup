---
id: "java-en-function-datagramsocket-setsendbuffersize"
language: "java"
lang: "en"
category: "function"
name: "DatagramSocket.setSendBufferSize"
signature: "public void setSendBufferSize(int size) throws SocketException"
title: "DatagramSocket.setSendBufferSize"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramSocket.setSendBufferSize

```java
public void setSendBufferSize(int size) throws SocketException
```

Sets the SO_SNDBUF option to the specified value for this
 `DatagramSocket`. The SO_SNDBUF option is used by the
 network implementation as a hint to size the underlying
 network I/O buffers. The SO_SNDBUF setting may also be used
 by the network implementation to determine the maximum size
 of the packet that can be sent on this socket.
 

 As SO_SNDBUF is a hint, applications that want to verify
 what size the buffer is should call `getSendBufferSize`.
 

 Increasing the buffer size may allow multiple outgoing packets
 to be queued by the network implementation when the send rate
 is high.
 

 Note: If `send` is used to send a
 `DatagramPacket` that is larger than the setting
 of SO_SNDBUF then it is implementation specific if the
 packet is sent or discarded.

 If `size > 0`, this method is equivalent to calling
 `setOption(SocketOption, Object)
 setOption`.

**参数**

- **size** — the size to which to set the send buffer size, in bytes. This value must be greater than 0.

**异常**

- **SocketException** — if there is an error in the underlying protocol, such as an UDP error, or the socket is closed.
- **IllegalArgumentException** — if the value is 0 or is negative.

**参见**

- #getSendBufferSize()
- StandardSocketOptions#SO_SNDBUF

> *Since 1.2*
