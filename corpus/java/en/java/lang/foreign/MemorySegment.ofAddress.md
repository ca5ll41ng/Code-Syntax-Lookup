---
id: "java-en-function-memorysegment-ofaddress"
language: "java"
lang: "en"
category: "function"
name: "MemorySegment.ofAddress"
signature: "static MemorySegment ofAddress(long address)"
title: "MemorySegment.ofAddress"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemorySegment.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemorySegment.ofAddress

```java
static MemorySegment ofAddress(long address)
```

Creates a zero-length native segment from the given
 `address() address value`.
 

 The returned segment is associated with the global scope and is accessible from
 any thread.
 

 On 32-bit platforms, the given address value will be normalized such that the
 highest-order ("leftmost") 32 bits of the `address() address`
 of the returned memory segment are set to zero.

**参数**

- **address** — the address of the returned native segment

**返回**

- a zero-length native segment with the given address
