---
id: "java-en-function-atomicintegerfieldupdater-getandset"
language: "java"
lang: "en"
category: "function"
name: "AtomicIntegerFieldUpdater.getAndSet"
signature: "public int getAndSet(T obj, int newValue)"
title: "AtomicIntegerFieldUpdater.getAndSet"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicIntegerFieldUpdater.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicIntegerFieldUpdater.getAndSet

```java
public int getAndSet(T obj, int newValue)
```

Atomically sets the field of the given object managed by this updater
 to the given value and returns the old value.

**参数**

- **obj** — An object whose field to get and set
- **newValue** — the new value

**返回**

- the previous value
