---
id: "java-en-function-selectionkey-op_write"
language: "java"
lang: "en"
category: "function"
name: "SelectionKey.OP_WRITE"
signature: "public static final int OP_WRITE = 1 << 2"
title: "SelectionKey.OP_WRITE"
directive: "field"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/SelectionKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SelectionKey.OP_WRITE

```java
public static final int OP_WRITE = 1 << 2
```

Operation-set bit for write operations.

 

 Suppose that a selection key's interest set contains
 `OP_WRITE` at the start of a selection operation.  If the selector
 detects that the corresponding channel is ready for writing, has been
 remotely shut down for further reading, or has an error pending, then it
 will add `OP_WRITE` to the key's ready set.
