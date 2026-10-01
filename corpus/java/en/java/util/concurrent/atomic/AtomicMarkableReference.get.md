---
id: "java-en-function-atomicmarkablereference-get"
language: "java"
lang: "en"
category: "function"
name: "AtomicMarkableReference.get"
signature: "public V get(boolean[] markHolder)"
title: "AtomicMarkableReference.get"
directive: "method"
module: "java.base/java.util.concurrent.atomic"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicMarkableReference.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AtomicMarkableReference.get

```java
public V get(boolean[] markHolder)
```

Returns the current values of both the reference and the mark.
 Typical usage is `boolean[1] holder; ref = v.get(holder); `.

**参数**

- **markHolder** — an array of size of at least one. On return, `markHolder[0]` will hold the value of the mark.

**返回**

- the current value of the reference
