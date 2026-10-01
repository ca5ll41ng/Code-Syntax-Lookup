---
id: "java-en-function-datagramsocketimpl-connect"
language: "java"
lang: "en"
category: "function"
name: "DatagramSocketImpl.connect"
signature: "protected void connect(InetAddress address, int port) throws SocketException"
title: "DatagramSocketImpl.connect"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramSocketImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramSocketImpl.connect

```java
protected void connect(InetAddress address, int port) throws SocketException
```

Connects a datagram socket to a remote destination. This associates the remote
 address with the local socket so that datagrams may only be sent to this destination
 and received from this destination. This may be overridden to call a native
 system connect.

 

If the remote destination to which the socket is connected does not
 exist, or is otherwise unreachable, and if an ICMP destination unreachable
 packet has been received for that address, then a subsequent call to
 send or receive may throw a PortUnreachableException.
 Note, there is no guarantee that the exception will be thrown.

**参数**

- **address** — the remote InetAddress to connect to
- **port** — the remote port number

**异常**

- **SocketException** — may be thrown if the socket cannot be connected to the remote destination

> *Since 1.4*
