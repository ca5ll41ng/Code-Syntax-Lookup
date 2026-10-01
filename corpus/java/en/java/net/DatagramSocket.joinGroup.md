---
id: "java-en-function-datagramsocket-joingroup"
language: "java"
lang: "en"
category: "function"
name: "DatagramSocket.joinGroup"
signature: "public void joinGroup(SocketAddress mcastaddr, NetworkInterface netIf) throws IOException"
title: "DatagramSocket.joinGroup"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramSocket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramSocket.joinGroup

```java
public void joinGroup(SocketAddress mcastaddr, NetworkInterface netIf) throws IOException
```

Joins a multicast group.

 

 In order to join a multicast group, the caller should specify
 the IP address of the multicast group to join, and the local
 `NetworkInterface network interface` to receive multicast
 packets from.
 
  
-  The `mcastaddr` argument indicates the IP address
   of the multicast group to join. For historical reasons this is
   specified as a `SocketAddress`.
   The default implementation only supports `InetSocketAddress` and
   the `getPort() port` information is ignored.
  
  
-  The `netIf` argument specifies the local interface to receive
       multicast datagram packets, or `null` to defer to the interface
       set for outgoing multicast datagrams.
       If `null`, and no interface has been set, the behaviour is
       unspecified: any interface may be selected or the operation may fail
       with a `SocketException`.
  
 

 

 It is possible to call this method several times to join
 several different multicast groups, or join the same group
 in several different networks. However, if the socket is already a
 member of the group, an `IOException` will be thrown.

 can be configured with `setOption`
 with `IP_MULTICAST_IF`.

**参数**

- **mcastaddr** — indicates the multicast address to join.
- **netIf** — specifies the local interface to receive multicast datagram packets, or `null`.

**异常**

- **IOException** — if there is an error joining, or when the address is not a multicast address, or the platform does not support multicasting, or the socket is closed
- **IllegalArgumentException** — if mcastaddr is `null` or is a SocketAddress subclass not supported by this socket

**参见**

- DatagramChannel#join(InetAddress, NetworkInterface)
- StandardSocketOptions#IP_MULTICAST_IF

> *Since 17*
