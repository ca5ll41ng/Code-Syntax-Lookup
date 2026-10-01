---
id: "java-en-function-java-net-unixdomainsocketaddress"
language: "java"
lang: "en"
category: "function"
name: "java.net.UnixDomainSocketAddress"
title: "UnixDomainSocketAddress"
directive: "type"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/UnixDomainSocketAddress.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UnixDomainSocketAddress

A Unix domain socket address.
 A Unix domain socket address encapsulates a file-system path that Unix domain sockets
 bind or connect to.

 

 An unnamed `UnixDomainSocketAddress` has
 an empty path. The local address of a `SocketChannel` to a Unix domain socket
 that is automatically or implicitly bound will be unnamed.

 

 `Path` objects used to create instances of this class must be obtained
 from the `getDefault system-default` file system.

**参见**

- java.nio.channels.SocketChannel
- java.nio.channels.ServerSocketChannel

> *Since 16*
