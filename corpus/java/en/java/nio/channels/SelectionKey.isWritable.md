---
id: "java-en-function-selectionkey-iswritable"
language: "java"
lang: "en"
category: "function"
name: "SelectionKey.isWritable"
signature: "public final boolean isWritable()"
title: "SelectionKey.isWritable"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/SelectionKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SelectionKey.isWritable

```java
public final boolean isWritable()
```

Tests whether this key's channel is ready for writing.

 

 An invocation of this method of the form `k.isWritable()`
 behaves in exactly the same way as the expression

 {@snippet lang=java :
     k.readyOps() & OP_WRITE != 0
 }

 

 If this key's channel does not support write operations then this
 method always returns `false`.

**返回**

- `true` if, and only if, `readyOps() & OP_WRITE` is nonzero

**异常**

- **CancelledKeyException** — If this key has been cancelled
