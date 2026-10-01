---
id: "java-en-function-atomiclongfieldupdater-updateandget"
language: "java"
lang: "en"
category: "function"
name: "AtomicLongFieldUpdater.updateAndGet"
signature: "public final long updateAndGet(T obj, LongUnaryOperator updateFunction)"
title: "AtomicLongFieldUpdater.updateAndGet"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicLongFieldUpdater.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicLongFieldUpdater.updateAndGet

```java
public final long updateAndGet(T obj, LongUnaryOperator updateFunction)
```

Atomically updates (with memory effects as specified by `compareAndSet`) the field of the given object managed
 by this updater with the results of applying the given
 function, returning the updated value. The function should be
 side-effect-free, since it may be re-applied when attempted
 updates fail due to contention among threads.

**参数**

- **obj** — An object whose field to get and set
- **updateFunction** — a side-effect-free function

**返回**

- the updated value

> *Since 1.8*
