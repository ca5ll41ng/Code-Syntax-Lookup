---
id: "java-en-function-selectionkey-isconnectable"
language: "java"
lang: "en"
category: "function"
name: "SelectionKey.isConnectable"
signature: "public final boolean isConnectable()"
title: "SelectionKey.isConnectable"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/SelectionKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SelectionKey.isConnectable

```java
public final boolean isConnectable()
```

Tests whether this key's channel has either finished, or failed to
 finish, its socket-connection operation.

 

 An invocation of this method of the form `k.isConnectable()`
 behaves in exactly the same way as the expression

 {@snippet lang=java :
     k.readyOps() & OP_CONNECT != 0
 }

 

 If this key's channel does not support socket-connect operations
 then this method always returns `false`.

**返回**

- `true` if, and only if, `readyOps() & OP_CONNECT` is nonzero

**异常**

- **CancelledKeyException** — If this key has been cancelled
