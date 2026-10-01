---
id: "java-en-function-atomicstampedreference-get"
language: "java"
lang: "en"
category: "function"
name: "AtomicStampedReference.get"
signature: "public V get(int[] stampHolder)"
title: "AtomicStampedReference.get"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicStampedReference.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicStampedReference.get

```java
public V get(int[] stampHolder)
```

Returns the current values of both the reference and the stamp.
 Typical usage is `int[1] holder; ref = v.get(holder); `.

**参数**

- **stampHolder** — an array of size of at least one.  On return, `stampHolder[0]` will hold the value of the stamp.

**返回**

- the current value of the reference
