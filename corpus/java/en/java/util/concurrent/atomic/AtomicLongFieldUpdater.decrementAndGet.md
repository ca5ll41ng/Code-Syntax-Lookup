---
id: "java-en-function-atomiclongfieldupdater-decrementandget"
language: "java"
lang: "en"
category: "function"
name: "AtomicLongFieldUpdater.decrementAndGet"
signature: "public long decrementAndGet(T obj)"
title: "AtomicLongFieldUpdater.decrementAndGet"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicLongFieldUpdater.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicLongFieldUpdater.decrementAndGet

```java
public long decrementAndGet(T obj)
```

Atomically decrements by one the current value of the field of the
 given object managed by this updater.

**参数**

- **obj** — An object whose field to get and set

**返回**

- the updated value
