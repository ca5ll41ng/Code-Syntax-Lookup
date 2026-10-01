---
id: "java-en-function-datagramchannel-validops"
language: "java"
lang: "en"
category: "function"
name: "DatagramChannel.validOps"
signature: "public final int validOps()"
title: "DatagramChannel.validOps"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/DatagramChannel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DatagramChannel.validOps

```java
public final int validOps()
```

Returns an operation set identifying this channel's supported
 operations.

 

 Datagram channels support reading and writing, so this method
 returns `(``OP_READ` `|`&nbsp;`OP_WRITE``)`.

**返回**

- The valid-operation set
