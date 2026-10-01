---
id: "java-en-function-arena-allocate"
language: "java"
lang: "en"
category: "function"
name: "Arena.allocate"
signature: "MemorySegment allocate(long byteSize, long byteAlignment)"
title: "Arena.allocate"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/Arena.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Arena.allocate

```java
MemorySegment allocate(long byteSize, long byteAlignment)
```

Returns a native memory segment with the given size (in bytes) and alignment
 constraint (in bytes).
 The returned segment is associated with this `scope() arena scope`.
 The segment's `address() address` is the starting address of
 the allocated off-heap region of memory backing the segment, and the address is
 aligned according the provided alignment constraint.

 Implementations of this method must return a native segment featuring the
 requested size, and that is compatible with the provided alignment constraint.
 Furthermore, for any two segments `S1, S2` returned by this method, the
 following invariant must hold:

 {@snippet lang = java:
     S1.asOverlappingSlice(S2).isEmpty() == true
 }

**参数**

- **byteSize** — the size (in bytes) of the off-heap region of memory backing the native memory segment
- **byteAlignment** — the alignment constraint (in bytes) of the off-heap region of memory backing the native memory segment

**返回**

- a new native memory segment

**异常**

- **IllegalArgumentException** — if `bytesSize < 0`, `byteAlignment <= 0`, or if `byteAlignment` is not a power of 2
- **IllegalStateException** — if this arena has already been `close() closed`
- **WrongThreadException** — if this arena is confined, and this method is called from a thread other than the arena's owner thread
