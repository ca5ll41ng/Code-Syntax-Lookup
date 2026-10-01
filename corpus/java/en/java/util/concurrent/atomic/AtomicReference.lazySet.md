---
id: "java-en-function-atomicreference-lazyset"
language: "java"
lang: "en"
category: "function"
name: "AtomicReference.lazySet"
signature: "public final void lazySet(V newValue)"
title: "AtomicReference.lazySet"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicReference.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicReference.lazySet

```java
public final void lazySet(V newValue)
```

Sets the value to `newValue`,
 with memory effects as specified by `setRelease`.

**参数**

- **newValue** — the new value

> *Since 1.6*
