---
id: "java-en-function-selectionkey-op_read"
language: "java"
lang: "en"
category: "function"
name: "SelectionKey.OP_READ"
signature: "public static final int OP_READ = 1 << 0"
title: "SelectionKey.OP_READ"
directive: "field"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/SelectionKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SelectionKey.OP_READ

```java
public static final int OP_READ = 1 << 0
```

Operation-set bit for read operations.

 

 Suppose that a selection key's interest set contains
 `OP_READ` at the start of a selection operation.  If the selector
 detects that the corresponding channel is ready for reading, has reached
 end-of-stream, has been remotely shut down for further writing, or has
 an error pending, then it will add `OP_READ` to the key's
 ready-operation set.
