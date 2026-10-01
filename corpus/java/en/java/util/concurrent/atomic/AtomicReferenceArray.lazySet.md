---
id: "java-en-function-atomicreferencearray-lazyset"
language: "java"
lang: "en"
category: "function"
name: "AtomicReferenceArray.lazySet"
signature: "public final void lazySet(int i, E newValue)"
title: "AtomicReferenceArray.lazySet"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicReferenceArray.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicReferenceArray.lazySet

```java
public final void lazySet(int i, E newValue)
```

Sets the element at index `i` to `newValue`,
 with memory effects as specified by `setRelease`.

**参数**

- **i** — the index
- **newValue** — the new value

> *Since 1.6*
