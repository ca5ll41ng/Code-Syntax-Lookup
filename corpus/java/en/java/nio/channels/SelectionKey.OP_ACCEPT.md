---
id: "java-en-function-selectionkey-op_accept"
language: "java"
lang: "en"
category: "function"
name: "SelectionKey.OP_ACCEPT"
signature: "public static final int OP_ACCEPT = 1 << 4"
title: "SelectionKey.OP_ACCEPT"
directive: "field"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/SelectionKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SelectionKey.OP_ACCEPT

```java
public static final int OP_ACCEPT = 1 << 4
```

Operation-set bit for socket-accept operations.

 

 Suppose that a selection key's interest set contains
 `OP_ACCEPT` at the start of a selection operation.  If the selector
 detects that the corresponding server-socket channel is ready to accept
 another connection, or has an error pending, then it will add
 `OP_ACCEPT` to the key's ready set.
