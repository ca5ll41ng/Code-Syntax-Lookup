---
id: "java-en-function-atomicreference-setplain"
language: "java"
lang: "en"
category: "function"
name: "AtomicReference.setPlain"
signature: "public final void setPlain(V newValue)"
title: "AtomicReference.setPlain"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicReference.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicReference.setPlain

```java
public final void setPlain(V newValue)
```

Sets the value to `newValue`, with memory semantics
 of setting as if the variable was declared non-`volatile`
 and non-`final`.

**参数**

- **newValue** — the new value

> *Since 9*
