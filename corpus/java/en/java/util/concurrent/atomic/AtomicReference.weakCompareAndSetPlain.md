---
id: "java-en-function-atomicreference-weakcompareandsetplain"
language: "java"
lang: "en"
category: "function"
name: "AtomicReference.weakCompareAndSetPlain"
signature: "public final boolean weakCompareAndSetPlain(V expectedValue, V newValue)"
title: "AtomicReference.weakCompareAndSetPlain"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicReference.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicReference.weakCompareAndSetPlain

```java
public final boolean weakCompareAndSetPlain(V expectedValue, V newValue)
```

Possibly atomically sets the value to `newValue`
 if the current value `== expectedValue`,
 with memory effects as specified by `weakCompareAndSetPlain`.

**参数**

- **expectedValue** — the expected value
- **newValue** — the new value

**返回**

- `true` if successful

> *Since 9*
