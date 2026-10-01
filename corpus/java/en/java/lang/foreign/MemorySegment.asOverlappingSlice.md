---
id: "java-en-function-memorysegment-asoverlappingslice"
language: "java"
lang: "en"
category: "function"
name: "MemorySegment.asOverlappingSlice"
signature: "Optional<MemorySegment> asOverlappingSlice(MemorySegment other)"
title: "MemorySegment.asOverlappingSlice"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemorySegment.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemorySegment.asOverlappingSlice

```java
Optional<MemorySegment> asOverlappingSlice(MemorySegment other)
```

Returns a slice of this segment that is the overlap between this and the provided
 segment.

 

Two segments `S1` and `S2` are said to overlap if it is possible to
 find at least two slices `L1` (from `S1`) and `L2`
 (from `S2`) that are backed by the same region of memory. As such, it is
 not possible for a `isNative() native` segment to overlap with a heap
 segment; in this case, or when no overlap occurs, an empty `Optional` is
 returned.

**参数**

- **other** — the segment to test for an overlap with this segment

**返回**

- a slice of this segment (where overlapping occurs)
