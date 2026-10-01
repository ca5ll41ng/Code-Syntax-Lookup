---
id: "java-en-function-serversocketchannel-validops"
language: "java"
lang: "en"
category: "function"
name: "ServerSocketChannel.validOps"
signature: "public final int validOps()"
title: "ServerSocketChannel.validOps"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/ServerSocketChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ServerSocketChannel.validOps

```java
public final int validOps()
```

Returns an operation set identifying this channel's supported
 operations.

 

 Server-socket channels only support the accepting of new
 connections, so this method returns `OP_ACCEPT`.

**返回**

- The valid-operation set
