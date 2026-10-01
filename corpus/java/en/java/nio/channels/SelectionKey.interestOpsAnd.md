---
id: "java-en-function-selectionkey-interestopsand"
language: "java"
lang: "en"
category: "function"
name: "SelectionKey.interestOpsAnd"
signature: "public int interestOpsAnd(int ops)"
title: "SelectionKey.interestOpsAnd"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/SelectionKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SelectionKey.interestOpsAnd

```java
public int interestOpsAnd(int ops)
```

Atomically sets this key's interest set to the bitwise intersection ("and")
 of the existing interest set and the given value. This method is guaranteed
 to be atomic with respect to other concurrent calls to this method or to
 `interestOpsOr`.

 

 This method may be invoked at any time.  If this method is invoked
 while a selection operation is in progress then it has no effect upon
 that operation; the change to the key's interest set will be seen by the
 next selection operation.

 methods, this method does not throw `IllegalArgumentException` when
 invoked with bits in the interest set that do not correspond to an
 operation that is supported by this key's channel. This is to allow
 operation bits in the interest set to be cleared using bitwise complement
 values, e.g., `interestOpsAnd(~SelectionKey.OP_READ)` will remove
 the `OP_READ` from the interest set without affecting other bits.

 `interestOps()` and `interestOps(int)` to retrieve and set
 this key's interest set.

**参数**

- **ops** — The interest set to apply

**返回**

- The previous interest set

**异常**

- **CancelledKeyException** — If this key has been cancelled

> *Since 11*
