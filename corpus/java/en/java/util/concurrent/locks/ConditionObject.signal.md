---
id: "java-en-function-conditionobject-signal"
language: "java"
lang: "en"
category: "function"
name: "ConditionObject.signal"
signature: "public final void signal()"
title: "ConditionObject.signal"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractQueuedLongSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConditionObject.signal

```java
public final void signal()
```

Moves the longest-waiting thread, if one exists, from the
 wait queue for this condition to the wait queue for the
 owning lock.

**异常**

- **IllegalMonitorStateException** — if `isHeldExclusively` returns `false`
