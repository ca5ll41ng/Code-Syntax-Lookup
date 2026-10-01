---
id: "java-en-function-java-net-inetsocketaddress"
language: "java"
lang: "en"
category: "function"
name: "java.net.InetSocketAddress"
title: "InetSocketAddress"
directive: "type"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/InetSocketAddress.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InetSocketAddress

This class implements an IP Socket Address (IP address + port number)
 It can also be a pair (hostname + port number), in which case an attempt
 will be made to resolve the hostname. If resolution fails then the address
 is said to be unresolved but can still be used on some circumstances
 like connecting through a proxy.
 

 It provides an immutable object used by sockets for binding, connecting, or
 as returned values.
 

 The wildcard is a special local IP address. It usually means "any"
 and can only be used for `bind` operations.

**参见**

- java.net.Socket
- java.net.ServerSocket

> *Since 1.4*
