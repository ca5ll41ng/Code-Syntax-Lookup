---
id: "java-en-function-atomiclongarray-weakcompareandsetrelease"
language: "java"
lang: "en"
category: "function"
name: "AtomicLongArray.weakCompareAndSetRelease"
signature: "public final boolean weakCompareAndSetRelease(int i, long expectedValue, long newValue)"
title: "AtomicLongArray.weakCompareAndSetRelease"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicLongArray.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicLongArray.weakCompareAndSetRelease

```java
public final boolean weakCompareAndSetRelease(int i, long expectedValue, long newValue)
```

Possibly atomically sets the element at index `i` to
 `newValue` if the element's current value `== expectedValue`,
 with memory effects as specified by
 `weakCompareAndSetRelease`.

**参数**

- **i** — the index
- **expectedValue** — the expected value
- **newValue** — the new value

**返回**

- `true` if successful

> *Since 9*
