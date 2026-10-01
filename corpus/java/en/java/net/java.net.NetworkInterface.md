---
id: "java-en-function-java-net-networkinterface"
language: "java"
lang: "en"
category: "function"
name: "java.net.NetworkInterface"
title: "NetworkInterface"
directive: "type"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/NetworkInterface.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NetworkInterface

This class represents a Network Interface.
 

 A Network Interface is an abstraction encapsulating
 the characteristics of a Network Interface Controller, or
 Virtual Network adapter, which is a system hardware/software
 component connecting a computer, or host system, to a computer
 network. A Network Interface can be physical or virtual.
 A Network Interface has a name, zero or more assigned
 `InetAddress IP addresses`, zero or more `InterfaceAddress MAC Addresses`, and may have an index.
 The name is highly platform specific but a name such as "le0"
 is typical; it may not be unique. The index is a highly platform
 specific number that identifies the interface. The network
 configuration may change during the lifetime of the JVM.
 For example, the set of IP addresses assigned to a network
 interface can be transient and dynamically allocated, and may
 change at any time.
 

 When obtaining a `NetworkInterface` instance, part of its
 configuration (such as its name and the list of assigned IP addresses),
 is reflective of its configuration at creation time.
 Obtaining an updated view of the network configuration may require
 looking up a network interface again in order to obtain a new instance.
 

 Network interface instances are typically used to identify the local
 interface on which a multicast group is joined.

 factory methods, returning a new instance of a `NetworkInterface`,
 reflecting the configuration at the time of instantiation.
 The network configuration may change at any time, and as such,
 these methods may need to be invoked again in order to obtain
 a more up-to-date view of the network interfaces.
 In particular, there is no guarantee that the same interface will be
 found at the same index, or that the same network addresses will be
 bound to the interface, if the network configuration of the system
 has changed.

> *Since 1.4*
