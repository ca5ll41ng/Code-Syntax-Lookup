---
id: "java-en-function-socketchannel-validops"
language: "java"
lang: "en"
category: "function"
name: "SocketChannel.validOps"
signature: "public final int validOps()"
title: "SocketChannel.validOps"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/SocketChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketChannel.validOps

```java
public final int validOps()
```

Returns an operation set identifying this channel's supported
 operations.

 

 Socket channels support connecting, reading, and writing, so this
 method returns `(``OP_CONNECT`
 `|`&nbsp;`OP_READ` `|`&nbsp;`OP_WRITE``)`.

**返回**

- The valid-operation set
