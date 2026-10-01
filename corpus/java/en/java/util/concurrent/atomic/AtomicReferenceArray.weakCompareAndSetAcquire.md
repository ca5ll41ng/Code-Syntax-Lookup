---
id: "java-en-function-atomicreferencearray-weakcompareandsetacquire"
language: "java"
lang: "en"
category: "function"
name: "AtomicReferenceArray.weakCompareAndSetAcquire"
signature: "public final boolean weakCompareAndSetAcquire(int i, E expectedValue, E newValue)"
title: "AtomicReferenceArray.weakCompareAndSetAcquire"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicReferenceArray.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicReferenceArray.weakCompareAndSetAcquire

```java
public final boolean weakCompareAndSetAcquire(int i, E expectedValue, E newValue)
```

Possibly atomically sets the element at index `i` to
 `newValue` if the element's current value `== expectedValue`,
 with memory effects as specified by
 `weakCompareAndSetAcquire`.

**参数**

- **i** — the index
- **expectedValue** — the expected value
- **newValue** — the new value

**返回**

- `true` if successful

> *Since 9*
