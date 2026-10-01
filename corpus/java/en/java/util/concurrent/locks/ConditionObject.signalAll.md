---
id: "java-en-function-conditionobject-signalall"
language: "java"
lang: "en"
category: "function"
name: "ConditionObject.signalAll"
signature: "public final void signalAll()"
title: "ConditionObject.signalAll"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractQueuedLongSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConditionObject.signalAll

```java
public final void signalAll()
```

Moves all threads from the wait queue for this condition to
 the wait queue for the owning lock.

**异常**

- **IllegalMonitorStateException** — if `isHeldExclusively` returns `false`
