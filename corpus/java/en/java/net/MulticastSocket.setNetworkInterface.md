---
id: "java-en-function-multicastsocket-setnetworkinterface"
language: "java"
lang: "en"
category: "function"
name: "MulticastSocket.setNetworkInterface"
signature: "public void setNetworkInterface(NetworkInterface netIf) throws SocketException"
title: "MulticastSocket.setNetworkInterface"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/MulticastSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MulticastSocket.setNetworkInterface

```java
public void setNetworkInterface(NetworkInterface netIf) throws SocketException
```

Specify the network interface for outgoing multicast datagrams
 sent on this socket.

 This method is equivalent to calling `setOption(SocketOption, Object)
 setOption`.

**参数**

- **netIf** — the interface

**异常**

- **SocketException** — if there is an error in the underlying protocol, such as a TCP error, or the socket is closed.

**参见**

- #getNetworkInterface()
- StandardSocketOptions#IP_MULTICAST_IF

> *Since 1.4*
