---
id: "java-en-function-sinkchannel-validops"
language: "java"
lang: "en"
category: "function"
name: "SinkChannel.validOps"
signature: "public final int validOps()"
title: "SinkChannel.validOps"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/Pipe.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SinkChannel.validOps

```java
public final int validOps()
```

Returns an operation set identifying this channel's supported
 operations.

 

 Pipe-sink channels only support writing, so this method returns
 `OP_WRITE`.

**返回**

- The valid-operation set
