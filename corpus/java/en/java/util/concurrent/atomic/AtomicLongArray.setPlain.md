---
id: "java-en-function-atomiclongarray-setplain"
language: "java"
lang: "en"
category: "function"
name: "AtomicLongArray.setPlain"
signature: "public final void setPlain(int i, long newValue)"
title: "AtomicLongArray.setPlain"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicLongArray.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicLongArray.setPlain

```java
public final void setPlain(int i, long newValue)
```

Sets the element at index `i` to `newValue`,
 with memory semantics of setting as if the variable was
 declared non-`volatile` and non-`final`.

**参数**

- **i** — the index
- **newValue** — the new value

> *Since 9*
