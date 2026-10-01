---
id: "java-en-function-atomiclongarray-lazyset"
language: "java"
lang: "en"
category: "function"
name: "AtomicLongArray.lazySet"
signature: "public final void lazySet(int i, long newValue)"
title: "AtomicLongArray.lazySet"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicLongArray.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicLongArray.lazySet

```java
public final void lazySet(int i, long newValue)
```

Sets the element at index `i` to `newValue`,
 with memory effects as specified by `setRelease`.

**参数**

- **i** — the index
- **newValue** — the new value

> *Since 1.6*
