---
id: "java-en-function-conditionobject-haswaiters"
language: "java"
lang: "en"
category: "function"
name: "ConditionObject.hasWaiters"
signature: "protected final boolean hasWaiters()"
title: "ConditionObject.hasWaiters"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractQueuedLongSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConditionObject.hasWaiters

```java
protected final boolean hasWaiters()
```

Queries whether any threads are waiting on this condition.
 Implements `hasWaiters`.

**返回**

- `true` if there are any waiting threads

**异常**

- **IllegalMonitorStateException** — if `isHeldExclusively` returns `false`
