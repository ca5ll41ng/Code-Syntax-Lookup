---
id: "java-en-function-selectionkey-isacceptable"
language: "java"
lang: "en"
category: "function"
name: "SelectionKey.isAcceptable"
signature: "public final boolean isAcceptable()"
title: "SelectionKey.isAcceptable"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/SelectionKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SelectionKey.isAcceptable

```java
public final boolean isAcceptable()
```

Tests whether this key's channel is ready to accept a new socket
 connection.

 

 An invocation of this method of the form `k.isAcceptable()`
 behaves in exactly the same way as the expression

 {@snippet lang=java :
     k.readyOps() & OP_ACCEPT != 0
 }

 

 If this key's channel does not support socket-accept operations then
 this method always returns `false`.

**返回**

- `true` if, and only if, `readyOps() & OP_ACCEPT` is nonzero

**异常**

- **CancelledKeyException** — If this key has been cancelled
