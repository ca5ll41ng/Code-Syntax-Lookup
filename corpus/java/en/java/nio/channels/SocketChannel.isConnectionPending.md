---
id: "java-en-function-socketchannel-isconnectionpending"
language: "java"
lang: "en"
category: "function"
name: "SocketChannel.isConnectionPending"
signature: "public abstract boolean isConnectionPending()"
title: "SocketChannel.isConnectionPending"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/SocketChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketChannel.isConnectionPending

```java
public abstract boolean isConnectionPending()
```

Tells whether or not a connection operation is in progress on this
 channel.

**返回**

- `true` if, and only if, a connection operation has been initiated on this channel but not yet completed by invoking the `finishConnect finishConnect` method
