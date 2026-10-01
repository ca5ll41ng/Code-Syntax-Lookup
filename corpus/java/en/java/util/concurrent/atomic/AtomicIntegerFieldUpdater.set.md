---
id: "java-en-function-atomicintegerfieldupdater-set"
language: "java"
lang: "en"
category: "function"
name: "AtomicIntegerFieldUpdater.set"
signature: "public abstract void set(T obj, int newValue)"
title: "AtomicIntegerFieldUpdater.set"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicIntegerFieldUpdater.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicIntegerFieldUpdater.set

```java
public abstract void set(T obj, int newValue)
```

Sets the field of the given object managed by this updater to the
 given updated value. This operation is guaranteed to act as a volatile
 store with respect to subsequent invocations of `compareAndSet`.

**参数**

- **obj** — An object whose field to set
- **newValue** — the new value
