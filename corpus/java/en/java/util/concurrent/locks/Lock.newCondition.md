---
id: "java-en-function-lock-newcondition"
language: "java"
lang: "en"
category: "function"
name: "Lock.newCondition"
signature: "Condition newCondition()"
title: "Lock.newCondition"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/Lock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Lock.newCondition

```java
Condition newCondition()
```

Returns a new `Condition` instance that is bound to this
 `Lock` instance.

 

Before waiting on the condition the lock must be held by the
 current thread.
 A call to `await` will atomically release the lock
 before waiting and re-acquire the lock before the wait returns.

 

**Implementation Considerations**

 

The exact operation of the `Condition` instance depends on
 the `Lock` implementation and must be documented by that
 implementation.

**返回**

- A new `Condition` instance for this `Lock` instance

**异常**

- **UnsupportedOperationException** — if this `Lock` implementation does not support conditions
