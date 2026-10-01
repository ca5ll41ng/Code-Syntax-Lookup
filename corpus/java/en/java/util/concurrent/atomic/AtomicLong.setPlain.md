---
id: "java-en-function-atomiclong-setplain"
language: "java"
lang: "en"
category: "function"
name: "AtomicLong.setPlain"
signature: "public final void setPlain(long newValue)"
title: "AtomicLong.setPlain"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicLong.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicLong.setPlain

```java
public final void setPlain(long newValue)
```

Sets the value to `newValue`, with memory semantics
 of setting as if the variable was declared non-`volatile`
 and non-`final`.

**参数**

- **newValue** — the new value

> *Since 9*
