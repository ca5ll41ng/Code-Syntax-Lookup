---
id: "java-en-function-multicastchannel-join"
language: "java"
lang: "en"
category: "function"
name: "MulticastChannel.join"
signature: "MembershipKey join(InetAddress group, NetworkInterface interf) throws IOException"
title: "MulticastChannel.join"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/MulticastChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MulticastChannel.join

```java
MembershipKey join(InetAddress group, NetworkInterface interf) throws IOException
```

Joins a multicast group to begin receiving all datagrams sent to the group,
 returning a membership key.

 

 If this channel is currently a member of the group on the given
 interface to receive all datagrams then the membership key, representing
 that membership, is returned. Otherwise this channel joins the group and
 the resulting new membership key is returned. The resulting membership key
 is not `sourceAddress source-specific`.

 

 A multicast channel may join several multicast groups, including
 the same group on more than one interface. An implementation may impose a
 limit on the number of groups that may be joined at the same time.

**参数**

- **group** — The multicast address to join
- **interf** — The network interface on which to join the group

**返回**

- The membership key

**异常**

- **IllegalArgumentException** — If the group parameter is not a `isMulticastAddress multicast` address, or the group parameter is an address type that is not supported by this channel
- **IllegalStateException** — If the channel already has source-specific membership of the group on the interface
- **UnsupportedOperationException** — If the channel's socket is not an Internet Protocol socket, or the platform does not support multicasting
- **ClosedChannelException** — If this channel is closed
- **IOException** — If an I/O error occurs
