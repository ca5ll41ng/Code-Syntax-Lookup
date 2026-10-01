---
id: "java-en-function-segmentallocator-slicingallocator"
language: "java"
lang: "en"
category: "function"
name: "SegmentAllocator.slicingAllocator"
signature: "static SegmentAllocator slicingAllocator(MemorySegment segment)"
title: "SegmentAllocator.slicingAllocator"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/SegmentAllocator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SegmentAllocator.slicingAllocator

```java
static SegmentAllocator slicingAllocator(MemorySegment segment)
```

Returns a segment allocator that responds to allocation requests by returning
 consecutive slices obtained from the provided segment. Each new allocation
 request will return a new slice starting at the current offset (modulo additional
 padding to satisfy alignment constraint), with given size.
 

 The returned allocator throws `IndexOutOfBoundsException` when a slice of
 the provided segment with the requested size and alignment cannot be found.

**参数**

- **segment** — the segment from which the returned allocator should slice from

**返回**

- a new slicing allocator

**异常**

- **IllegalArgumentException** — if the `segment` is `isReadOnly() read-only`
