---
id: "java-en-function-selectionkey-interestopsor"
language: "java"
lang: "en"
category: "function"
name: "SelectionKey.interestOpsOr"
signature: "public int interestOpsOr(int ops)"
title: "SelectionKey.interestOpsOr"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/SelectionKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SelectionKey.interestOpsOr

```java
public int interestOpsOr(int ops)
```

Atomically sets this key's interest set to the bitwise union ("or") of
 the existing interest set and the given value. This method is guaranteed
 to be atomic with respect to other concurrent calls to this method or to
 `interestOpsAnd`.

 

 This method may be invoked at any time.  If this method is invoked
 while a selection operation is in progress then it has no effect upon
 that operation; the change to the key's interest set will be seen by the
 next selection operation.

 `interestOps()` and `interestOps(int)` to retrieve and set
 this key's interest set.

**参数**

- **ops** — The interest set to apply

**返回**

- The previous interest set

**异常**

- **IllegalArgumentException** — If a bit in the set does not correspond to an operation that is supported by this key's channel, that is, if `(ops & ~channel().validOps()) != 0`
- **CancelledKeyException** — If this key has been cancelled

> *Since 11*
