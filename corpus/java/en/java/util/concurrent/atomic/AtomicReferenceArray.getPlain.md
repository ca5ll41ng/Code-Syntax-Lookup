---
id: "java-en-function-atomicreferencearray-getplain"
language: "java"
lang: "en"
category: "function"
name: "AtomicReferenceArray.getPlain"
signature: "public final E getPlain(int i)"
title: "AtomicReferenceArray.getPlain"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicReferenceArray.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicReferenceArray.getPlain

```java
public final E getPlain(int i)
```

Returns the current value of the element at index `i`,
 with memory semantics of reading as if the variable was declared
 non-`volatile`.

**参数**

- **i** — the index

**返回**

- the value

> *Since 9*
