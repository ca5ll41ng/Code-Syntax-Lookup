---
id: "java-en-function-selectionkey-op_connect"
language: "java"
lang: "en"
category: "function"
name: "SelectionKey.OP_CONNECT"
signature: "public static final int OP_CONNECT = 1 << 3"
title: "SelectionKey.OP_CONNECT"
directive: "field"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/SelectionKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SelectionKey.OP_CONNECT

```java
public static final int OP_CONNECT = 1 << 3
```

Operation-set bit for socket-connect operations.

 

 Suppose that a selection key's interest set contains
 `OP_CONNECT` at the start of a selection operation.  If the selector
 detects that the corresponding socket channel is ready to complete its
 connection sequence, or has an error pending, then it will add
 `OP_CONNECT` to the key's ready set.
