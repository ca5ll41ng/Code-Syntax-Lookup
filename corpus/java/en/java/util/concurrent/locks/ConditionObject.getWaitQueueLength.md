---
id: "java-en-function-conditionobject-getwaitqueuelength"
language: "java"
lang: "en"
category: "function"
name: "ConditionObject.getWaitQueueLength"
signature: "protected final int getWaitQueueLength()"
title: "ConditionObject.getWaitQueueLength"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractQueuedLongSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConditionObject.getWaitQueueLength

```java
protected final int getWaitQueueLength()
```

Returns an estimate of the number of threads waiting on
 this condition.
 Implements `getWaitQueueLength`.

**返回**

- the estimated number of waiting threads

**异常**

- **IllegalMonitorStateException** — if `isHeldExclusively` returns `false`
