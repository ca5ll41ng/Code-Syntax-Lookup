---
id: "java-en-function-sourcechannel-validops"
language: "java"
lang: "en"
category: "function"
name: "SourceChannel.validOps"
signature: "public final int validOps()"
title: "SourceChannel.validOps"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/Pipe.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SourceChannel.validOps

```java
public final int validOps()
```

Returns an operation set identifying this channel's supported
 operations.

 

 Pipe-source channels only support reading, so this method
 returns `OP_READ`.

**返回**

- The valid-operation set
