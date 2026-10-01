---
id: "java-en-function-atomicintegerfieldupdater-lazyset"
language: "java"
lang: "en"
category: "function"
name: "AtomicIntegerFieldUpdater.lazySet"
signature: "public abstract void lazySet(T obj, int newValue)"
title: "AtomicIntegerFieldUpdater.lazySet"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicIntegerFieldUpdater.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicIntegerFieldUpdater.lazySet

```java
public abstract void lazySet(T obj, int newValue)
```

Eventually sets the field of the given object managed by this
 updater to the given updated value.

**参数**

- **obj** — An object whose field to set
- **newValue** — the new value

> *Since 1.6*
