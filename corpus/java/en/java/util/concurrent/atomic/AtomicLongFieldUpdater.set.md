---
id: "java-en-function-atomiclongfieldupdater-set"
language: "java"
lang: "en"
category: "function"
name: "AtomicLongFieldUpdater.set"
signature: "public abstract void set(T obj, long newValue)"
title: "AtomicLongFieldUpdater.set"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicLongFieldUpdater.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicLongFieldUpdater.set

```java
public abstract void set(T obj, long newValue)
```

Sets the field of the given object managed by this updater to the
 given updated value. This operation is guaranteed to act as a volatile
 store with respect to subsequent invocations of `compareAndSet`.

**参数**

- **obj** — An object whose field to set
- **newValue** — the new value
