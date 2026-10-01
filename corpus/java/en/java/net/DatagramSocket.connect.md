---
id: "java-en-function-datagramsocket-connect"
language: "java"
lang: "en"
category: "function"
name: "DatagramSocket.connect"
signature: "public void connect(InetAddress address, int port)"
title: "DatagramSocket.connect"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramSocket.connect

```java
public void connect(InetAddress address, int port)
```

Connects the socket to a remote address for this socket. When a
 socket is connected to a remote address, packets may only be
 sent to or received from that address. By default a datagram
 socket is not connected. If the socket is already closed,
 then this method has no effect.

 

 If this socket is not bound then this method will first cause the
 socket to be bound to an address that is assigned automatically,
 as if invoking the `bind bind` method with a parameter of
 `null`. If the remote destination to which the socket is connected
 does not exist, or is otherwise unreachable, and if an ICMP destination
 unreachable packet has been received for that address, then a subsequent
 call to send or receive may throw a PortUnreachableException. Note,
 there is no guarantee that the exception will be thrown.

 

 If this socket is already connected, then this method will attempt to
 connect to the given address. If this connect fails then the state of
 this socket is unknown - it may or may not be connected to the address
 that it was previously connected to.

 

 When the socket is connected, the send method checks that the
 packet's address matches the remote address that the socket is
 connected to. A socket connected to a multicast address may only
 be used to send packets. Datagrams in the socket's `SO_RCVBUF socket receive buffer`, which
 have not been `receive(DatagramPacket) received` before invoking
 this method, may be discarded.

**参数**

- **address** — the remote address for the socket
- **port** — the remote port for the socket.

**异常**

- **IllegalArgumentException** — if the address is null, or the port is out of range.
- **UncheckedIOException** — if the port is 0 or connect fails, for example, if the destination address is non-routable

**参见**

- #disconnect

> *Since 1.2*
