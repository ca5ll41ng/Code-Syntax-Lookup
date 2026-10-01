---
id: "java-en-function-java-net-datagrampacket"
language: "java"
lang: "en"
category: "function"
name: "java.net.DatagramPacket"
title: "DatagramPacket"
directive: "type"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/DatagramPacket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramPacket

This class represents a datagram packet.
 

 Datagram packets are used to implement a connectionless packet
 delivery service. Each message is routed from one machine to
 another based solely on information contained within that packet.
 Multiple packets sent from one machine to another might be routed
 differently, and might arrive in any order. Packet delivery is
 not guaranteed.

 

 Unless otherwise specified, passing a `null` argument causes
 a `NullPointerException NullPointerException` to be thrown.

 

 Methods and constructors of `DatagramPacket` accept parameters
 of type `SocketAddress`. `DatagramPacket` supports
 `InetSocketAddress`, and may support additional `SocketAddress`
 sub-types.

> *Since 1.0*
