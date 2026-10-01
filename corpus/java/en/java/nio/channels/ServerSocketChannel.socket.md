---
id: "java-en-function-serversocketchannel-socket"
language: "java"
lang: "en"
category: "function"
name: "ServerSocketChannel.socket"
signature: "public abstract ServerSocket socket()"
title: "ServerSocketChannel.socket"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/ServerSocketChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ServerSocketChannel.socket

```java
public abstract ServerSocket socket()
```

Retrieves a server socket associated with this channel.

 

 The returned object will not declare any public methods that are not
 declared in the `java.net.ServerSocket` class.

**返回**

- A server socket associated with this channel

**异常**

- **UnsupportedOperationException** — If the channel's socket is not an Internet protocol socket
