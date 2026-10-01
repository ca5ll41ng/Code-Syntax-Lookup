---
id: "java-en-function-abstractqueuedlongsynchronizer-owns"
language: "java"
lang: "en"
category: "function"
name: "AbstractQueuedLongSynchronizer.owns"
signature: "public final boolean owns(ConditionObject condition)"
title: "AbstractQueuedLongSynchronizer.owns"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractQueuedLongSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractQueuedLongSynchronizer.owns

```java
public final boolean owns(ConditionObject condition)
```

Queries whether the given ConditionObject
 uses this synchronizer as its lock.

**参数**

- **condition** — the condition

**返回**

- `true` if owned

**异常**

- **NullPointerException** — if the condition is null
