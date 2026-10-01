---
id: "java-en-function-java-net-socketoptions"
language: "java"
lang: "en"
category: "function"
name: "java.net.SocketOptions"
title: "SocketOptions"
directive: "type"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/SocketOptions.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketOptions

Interface of methods to get/set socket options.  This interface is
 implemented by `SocketImpl` and `DatagramSocketImpl`.
 Subclasses of these two classes should override the `getOption` and
 `setOption` methods of this interface in order to support their own options.
 

 The methods and constants defined in this interface are
 for implementation only. If you're not subclassing `SocketImpl` or
 `DatagramSocketImpl`, then you won't use these directly. There are
 type-safe methods to get/set each of these options in `Socket`, `ServerSocket`,
  `DatagramSocket` and `MulticastSocket`.

> *Since 1.1*
