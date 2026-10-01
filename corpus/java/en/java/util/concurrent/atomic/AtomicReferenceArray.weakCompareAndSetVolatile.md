---
id: "java-en-function-atomicreferencearray-weakcompareandsetvolatile"
language: "java"
lang: "en"
category: "function"
name: "AtomicReferenceArray.weakCompareAndSetVolatile"
signature: "public final boolean weakCompareAndSetVolatile(int i, E expectedValue, E newValue)"
title: "AtomicReferenceArray.weakCompareAndSetVolatile"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicReferenceArray.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicReferenceArray.weakCompareAndSetVolatile

```java
public final boolean weakCompareAndSetVolatile(int i, E expectedValue, E newValue)
```

Possibly atomically sets the element at index `i` to
 `newValue` if the element's current value `== expectedValue`,
 with memory effects as specified by
 `weakCompareAndSet`.

**参数**

- **i** — the index
- **expectedValue** — the expected value
- **newValue** — the new value

**返回**

- `true` if successful

> *Since 9*
