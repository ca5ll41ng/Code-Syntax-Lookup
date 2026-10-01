---
id: "java-en-function-atomicboolean-weakcompareandsetrelease"
language: "java"
lang: "en"
category: "function"
name: "AtomicBoolean.weakCompareAndSetRelease"
signature: "public final boolean weakCompareAndSetRelease(boolean expectedValue, boolean newValue)"
title: "AtomicBoolean.weakCompareAndSetRelease"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicBoolean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicBoolean.weakCompareAndSetRelease

```java
public final boolean weakCompareAndSetRelease(boolean expectedValue, boolean newValue)
```

Possibly atomically sets the value to `newValue` if the current
 value `== expectedValue`,
 with memory effects as specified by
 `weakCompareAndSetRelease`.

**参数**

- **expectedValue** — the expected value
- **newValue** — the new value

**返回**

- `true` if successful

> *Since 9*
