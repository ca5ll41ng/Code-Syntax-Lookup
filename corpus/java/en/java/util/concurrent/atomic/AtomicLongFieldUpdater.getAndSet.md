---
id: "java-en-function-atomiclongfieldupdater-getandset"
language: "java"
lang: "en"
category: "function"
name: "AtomicLongFieldUpdater.getAndSet"
signature: "public long getAndSet(T obj, long newValue)"
title: "AtomicLongFieldUpdater.getAndSet"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicLongFieldUpdater.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicLongFieldUpdater.getAndSet

```java
public long getAndSet(T obj, long newValue)
```

Atomically sets the field of the given object managed by this updater
 to the given value and returns the old value.

**参数**

- **obj** — An object whose field to get and set
- **newValue** — the new value

**返回**

- the previous value
