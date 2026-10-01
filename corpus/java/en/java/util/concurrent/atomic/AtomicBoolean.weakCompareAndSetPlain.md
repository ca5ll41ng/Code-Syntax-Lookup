---
id: "java-en-function-atomicboolean-weakcompareandsetplain"
language: "java"
lang: "en"
category: "function"
name: "AtomicBoolean.weakCompareAndSetPlain"
signature: "public boolean weakCompareAndSetPlain(boolean expectedValue, boolean newValue)"
title: "AtomicBoolean.weakCompareAndSetPlain"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicBoolean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicBoolean.weakCompareAndSetPlain

```java
public boolean weakCompareAndSetPlain(boolean expectedValue, boolean newValue)
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
