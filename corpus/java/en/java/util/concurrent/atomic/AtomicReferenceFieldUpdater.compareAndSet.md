---
id: "java-en-function-atomicreferencefieldupdater-compareandset"
language: "java"
lang: "en"
category: "function"
name: "AtomicReferenceFieldUpdater.compareAndSet"
signature: "public abstract boolean compareAndSet(T obj, V expect, V update)"
title: "AtomicReferenceFieldUpdater.compareAndSet"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicReferenceFieldUpdater.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicReferenceFieldUpdater.compareAndSet

```java
public abstract boolean compareAndSet(T obj, V expect, V update)
```

Atomically sets the field of the given object managed by this updater
 to the given updated value if the current value `==` the
 expected value. This method is guaranteed to be atomic with respect to
 other calls to `compareAndSet` and `set`, but not
 necessarily with respect to other changes in the field.

**参数**

- **obj** — An object whose field to conditionally set
- **expect** — the expected value
- **update** — the new value

**返回**

- `true` if successful
