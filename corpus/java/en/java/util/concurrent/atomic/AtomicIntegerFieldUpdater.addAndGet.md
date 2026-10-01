---
id: "java-en-function-atomicintegerfieldupdater-addandget"
language: "java"
lang: "en"
category: "function"
name: "AtomicIntegerFieldUpdater.addAndGet"
signature: "public int addAndGet(T obj, int delta)"
title: "AtomicIntegerFieldUpdater.addAndGet"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicIntegerFieldUpdater.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicIntegerFieldUpdater.addAndGet

```java
public int addAndGet(T obj, int delta)
```

Atomically adds the given value to the current value of the field of
 the given object managed by this updater.

**参数**

- **obj** — An object whose field to get and set
- **delta** — the value to add

**返回**

- the updated value
