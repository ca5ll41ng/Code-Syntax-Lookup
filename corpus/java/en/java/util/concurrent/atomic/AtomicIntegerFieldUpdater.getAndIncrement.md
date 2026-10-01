---
id: "java-en-function-atomicintegerfieldupdater-getandincrement"
language: "java"
lang: "en"
category: "function"
name: "AtomicIntegerFieldUpdater.getAndIncrement"
signature: "public int getAndIncrement(T obj)"
title: "AtomicIntegerFieldUpdater.getAndIncrement"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicIntegerFieldUpdater.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicIntegerFieldUpdater.getAndIncrement

```java
public int getAndIncrement(T obj)
```

Atomically increments by one the current value of the field of the
 given object managed by this updater.

**参数**

- **obj** — An object whose field to get and set

**返回**

- the previous value
