---
id: "java-en-function-multicastsocket-getnetworkinterface"
language: "java"
lang: "en"
category: "function"
name: "MulticastSocket.getNetworkInterface"
signature: "public NetworkInterface getNetworkInterface() throws SocketException"
title: "MulticastSocket.getNetworkInterface"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/MulticastSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MulticastSocket.getNetworkInterface

```java
public NetworkInterface getNetworkInterface() throws SocketException
```

Get the multicast network interface set for outgoing multicast
 datagrams sent from this socket.

 When an interface is set, this method is equivalent
 to calling `getOption(SocketOption)
 getOption`.

**返回**

- The multicast `NetworkInterface` currently set. A placeholder NetworkInterface is returned when there is no interface set; it has a single InetAddress to represent any local address.

**异常**

- **SocketException** — if there is an error in the underlying protocol, such as a TCP error, or the socket is closed.

**参见**

- #setNetworkInterface(NetworkInterface)
- StandardSocketOptions#IP_MULTICAST_IF

> *Since 1.4*
