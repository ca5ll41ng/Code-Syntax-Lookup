---
id: "java-en-function-serversocketchannel-open"
language: "java"
lang: "en"
category: "function"
name: "ServerSocketChannel.open"
signature: "public static ServerSocketChannel open() throws IOException"
title: "ServerSocketChannel.open"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/ServerSocketChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ServerSocketChannel.open

```java
public static ServerSocketChannel open() throws IOException
```

Opens a server-socket channel for an Internet protocol socket.

 

 The new channel is created by invoking the `openServerSocketChannel
 openServerSocketChannel` method of the system-wide default `java.nio.channels.spi.SelectorProvider` object.

 

 The new channel's socket is initially unbound; it must be bound to a
 specific address via one of its socket's `bind(SocketAddress) bind` methods before
 connections can be accepted.

**返回**

- A new socket channel

**异常**

- **IOException** — If an I/O error occurs

**参见**

- java.net.preferIPv4Stack system property
