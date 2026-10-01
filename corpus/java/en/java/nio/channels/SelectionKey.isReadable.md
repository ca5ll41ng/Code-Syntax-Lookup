---
id: "java-en-function-selectionkey-isreadable"
language: "java"
lang: "en"
category: "function"
name: "SelectionKey.isReadable"
signature: "public final boolean isReadable()"
title: "SelectionKey.isReadable"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/SelectionKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SelectionKey.isReadable

```java
public final boolean isReadable()
```

Tests whether this key's channel is ready for reading.

 

 An invocation of this method of the form `k.isReadable()`
 behaves in exactly the same way as the expression

 {@snippet lang=java :
     k.readyOps() & OP_READ != 0
 }

 

 If this key's channel does not support read operations then this
 method always returns `false`.

**返回**

- `true` if, and only if, `readyOps() & OP_READ` is nonzero

**异常**

- **CancelledKeyException** — If this key has been cancelled
