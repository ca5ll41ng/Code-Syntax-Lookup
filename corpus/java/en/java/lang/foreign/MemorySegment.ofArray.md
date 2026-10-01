---
id: "java-en-function-memorysegment-ofarray"
language: "java"
lang: "en"
category: "function"
name: "MemorySegment.ofArray"
signature: "static MemorySegment ofArray(byte[] byteArray)"
title: "MemorySegment.ofArray"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemorySegment.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemorySegment.ofArray

```java
static MemorySegment ofArray(byte[] byteArray)
```

Creates a heap segment backed by the on-heap region of memory that holds the given
 byte array. The scope of the returned segment is an automatic scope that keeps
 the given array reachable. The returned segment is always accessible, from any
 thread. Its `address` is set to zero.

**参数**

- **byteArray** — the primitive array backing the heap memory segment

**返回**

- a heap memory segment backed by a byte array
