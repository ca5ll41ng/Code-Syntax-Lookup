---
id: "java-en-function-memorysegment-equals"
language: "java"
lang: "en"
category: "function"
name: "MemorySegment.equals"
signature: "boolean equals(Object that)"
title: "MemorySegment.equals"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemorySegment.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemorySegment.equals

```java
boolean equals(Object that)
```

Compares the specified object with this memory segment for equality. Returns
 `true` if and only if the specified object is also a memory segment, and if
 the two segments refer to the same location, in some region of memory.
 

 More specifically, for two segments `s1` and `s2` to be considered
 equal, all the following must be true:
 
     
- `s1.heapBase().equals(s2.heapBase())`, that is, the two segments
     must be of the same kind; either both are `isNative() native segments`,
     backed by off-heap memory, or both are backed by the same on-heap
     `heapBase() Java object`;
     
- `s1.address() == s2.address()`, that is, the address of the two
     segments should be the same. This means that the two segments either refer to
     the same location in some off-heap region, or they refer to the same offset
     inside their associated `heapBase() Java object`.
 

          the two memory segments. Clients can compare memory segments structurally
          by using the `mismatch` method instead. Note that
          this method does not compare the temporal and spatial bounds of
          two segments. As such, it is suitable to check whether two segments have
          the same address.

**参数**

- **that** — the object to be compared for equality with this memory segment

**返回**

- `true` if the specified object is equal to this memory segment

**参见**

- #mismatch(MemorySegment)
