---
id: "java-en-function-socketchannel-socket"
language: "java"
lang: "en"
category: "function"
name: "SocketChannel.socket"
signature: "public abstract Socket socket()"
title: "SocketChannel.socket"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/SocketChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketChannel.socket

```java
public abstract Socket socket()
```

Retrieves a socket associated with this channel.

**返回**

- A socket associated with this channel

**异常**

- **UnsupportedOperationException** — If the channel's socket is not an Internet protocol socket
