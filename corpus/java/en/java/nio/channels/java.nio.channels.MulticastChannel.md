---
id: "java-en-function-java-nio-channels-multicastchannel"
language: "java"
lang: "en"
category: "function"
name: "java.nio.channels.MulticastChannel"
title: "MulticastChannel"
directive: "type"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/MulticastChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MulticastChannel

A network channel that supports Internet Protocol (IP) multicasting.

 

 IP multicasting is the transmission of IP datagrams to members of
 a group that is zero or more hosts identified by a single destination
 address.

 

 In the case of a channel to an `INET IPv4` socket,
 the underlying operating system optionally supports
  RFC&nbsp;2236: Internet Group
 Management Protocol, Version 2 (IGMPv2). When IGMPv2 is supported then
 the operating system may additionally support source filtering as specified by
  RFC&nbsp;3376: Internet Group
 Management Protocol, Version 3 (IGMPv3).
 For channels to an `INET6 IPv6` socket, the equivalent
 standards are  RFC&nbsp;2710:
 Multicast Listener Discovery (MLD) for IPv6 and  RFC&nbsp;3810: Multicast Listener
 Discovery Version 2 (MLDv2) for IPv6.

 

 The `join` method is used to
 join a group and receive all multicast datagrams sent to the group. A channel
 may join several multicast groups and may join the same group on several
 `NetworkInterface interfaces`. Membership is dropped by invoking the `drop drop` method on the returned `MembershipKey`. If the
 underlying platform supports source filtering then the `block
 block` and `unblock unblock` methods can be used to block or
 unblock multicast datagrams from particular source addresses.

 

 The `join` method
 is used to begin receiving datagrams sent to a group whose source address matches
 a given source address. This method throws `UnsupportedOperationException`
 if the underlying platform does not support source filtering.  Membership is
 cumulative and this method may be invoked again with the same group
 and interface to allow receiving datagrams from other source addresses. The
 method returns a `MembershipKey` that represents membership to receive
 datagrams from the given source address. Invoking the key's `drop drop` method drops membership so that datagrams from the
 source address can no longer be received.

 Platform dependencies

 The multicast implementation is intended to map directly to the native
 multicasting facility. Consequently, the following items should be considered
 when developing an application that receives IP multicast datagrams:

 

 
- 

 The creation of the channel should specify the `ProtocolFamily`
 that corresponds to the address type of the multicast groups that the channel
 will join. There is no guarantee that a channel to a socket in one protocol
 family can join and receive multicast datagrams when the address of the
 multicast group corresponds to another protocol family. For example, it is
 implementation specific if a channel to an `INET6 IPv6`
 socket can join an `INET IPv4` multicast group and receive
 multicast datagrams sent to the group. 

 
- 

 The channel's socket should be bound to the `isAnyLocalAddress wildcard` address. If the socket is bound to
 a specific address, rather than the wildcard address then it is implementation
 specific if multicast datagrams are received by the socket. 

 
- 

 The `SO_REUSEADDR SO_REUSEADDR` option should be
 enabled prior to `bind binding` the socket. This is
 required to allow multiple members of the group to bind to the same
 address. 

 

 

 **Usage Example:**
 {@snippet lang=java :
     // join multicast group on this interface, and also use this
     // interface for outgoing multicast datagrams
     NetworkInterface ni = NetworkInterface.getByName("hme0");

     DatagramChannel dc = DatagramChannel.open(StandardProtocolFamily.INET)
         .setOption(StandardSocketOptions.SO_REUSEADDR, true)
         .bind(new InetSocketAddress(5000))
         .setOption(StandardSocketOptions.IP_MULTICAST_IF, ni);

     InetAddress group = InetAddress.getByName("225.4.5.6");

     MembershipKey key = dc.join(group, ni);
 }

      RFC 2236: Internet Group Management Protocol, Version 2
      RFC 2710: Multicast Listener Discovery (MLD) for IPv6
      RFC 3376: Internet Group Management Protocol, Version 3
      RFC 3810: Multicast Listener Discovery Version 2 (MLDv2) for IPv6

> *Since 1.7*
