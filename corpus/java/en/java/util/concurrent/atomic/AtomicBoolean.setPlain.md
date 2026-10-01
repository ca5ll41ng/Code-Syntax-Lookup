---
id: "java-en-function-atomicboolean-setplain"
language: "java"
lang: "en"
category: "function"
name: "AtomicBoolean.setPlain"
signature: "public final void setPlain(boolean newValue)"
title: "AtomicBoolean.setPlain"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicBoolean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicBoolean.setPlain

```java
public final void setPlain(boolean newValue)
```

Sets the value to `newValue`, with memory semantics
 of setting as if the variable was declared non-`volatile`
 and non-`final`.

**参数**

- **newValue** — the new value

> *Since 9*
