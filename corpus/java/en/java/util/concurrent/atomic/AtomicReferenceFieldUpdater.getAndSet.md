---
id: "java-en-function-atomicreferencefieldupdater-getandset"
language: "java"
lang: "en"
category: "function"
name: "AtomicReferenceFieldUpdater.getAndSet"
signature: "public V getAndSet(T obj, V newValue)"
title: "AtomicReferenceFieldUpdater.getAndSet"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicReferenceFieldUpdater.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicReferenceFieldUpdater.getAndSet

```java
public V getAndSet(T obj, V newValue)
```

Atomically sets the field of the given object managed by this updater
 to the given value and returns the old value.

**参数**

- **obj** — An object whose field to get and set
- **newValue** — the new value

**返回**

- the previous value
