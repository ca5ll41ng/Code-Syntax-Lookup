---
id: "java-en-function-conditionobject-getwaitingthreads"
language: "java"
lang: "en"
category: "function"
name: "ConditionObject.getWaitingThreads"
signature: "protected final Collection<Thread> getWaitingThreads()"
title: "ConditionObject.getWaitingThreads"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractQueuedLongSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConditionObject.getWaitingThreads

```java
protected final Collection<Thread> getWaitingThreads()
```

Returns a collection containing those threads that may be
 waiting on this Condition.
 Implements `getWaitingThreads`.

**返回**

- the collection of threads

**异常**

- **IllegalMonitorStateException** — if `isHeldExclusively` returns `false`
