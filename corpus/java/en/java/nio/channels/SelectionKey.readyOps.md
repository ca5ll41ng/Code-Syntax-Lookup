---
id: "java-en-function-selectionkey-readyops"
language: "java"
lang: "en"
category: "function"
name: "SelectionKey.readyOps"
signature: "public abstract int readyOps()"
title: "SelectionKey.readyOps"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/SelectionKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SelectionKey.readyOps

```java
public abstract int readyOps()
```

Retrieves this key's ready-operation set.

 

 It is guaranteed that the returned set will only contain operation
 bits that are valid for this key's channel.

**返回**

- This key's ready-operation set

**异常**

- **CancelledKeyException** — If this key has been cancelled
