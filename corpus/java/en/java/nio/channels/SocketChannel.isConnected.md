---
id: "java-en-function-socketchannel-isconnected"
language: "java"
lang: "en"
category: "function"
name: "SocketChannel.isConnected"
signature: "public abstract boolean isConnected()"
title: "SocketChannel.isConnected"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/SocketChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketChannel.isConnected

```java
public abstract boolean isConnected()
```

Tells whether or not this channel's network socket is connected.

**返回**

- `true` if, and only if, this channel's network socket is `isOpen open` and connected
