---
id: "java-en-function-socketchannel-open"
language: "java"
lang: "en"
category: "function"
name: "SocketChannel.open"
signature: "public static SocketChannel open() throws IOException"
title: "SocketChannel.open"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/SocketChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketChannel.open

```java
public static SocketChannel open() throws IOException
```

Opens a socket channel for an Internet protocol socket.

 

 The new channel is created by invoking the `openSocketChannel
 openSocketChannel` method of the system-wide default `java.nio.channels.spi.SelectorProvider` object.

**返回**

- A new socket channel

**异常**

- **IOException** — If an I/O error occurs

**参见**

- java.net.preferIPv4Stack system property
