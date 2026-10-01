---
id: "java-en-function-atomiclongfieldupdater-lazyset"
language: "java"
lang: "en"
category: "function"
name: "AtomicLongFieldUpdater.lazySet"
signature: "public abstract void lazySet(T obj, long newValue)"
title: "AtomicLongFieldUpdater.lazySet"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicLongFieldUpdater.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicLongFieldUpdater.lazySet

```java
public abstract void lazySet(T obj, long newValue)
```

Eventually sets the field of the given object managed by this
 updater to the given updated value.

**参数**

- **obj** — An object whose field to set
- **newValue** — the new value

> *Since 1.6*
