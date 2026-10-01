---
id: "java-en-function-segmentallocator-prefixallocator"
language: "java"
lang: "en"
category: "function"
name: "SegmentAllocator.prefixAllocator"
signature: "static SegmentAllocator prefixAllocator(MemorySegment segment)"
title: "SegmentAllocator.prefixAllocator"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/SegmentAllocator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SegmentAllocator.prefixAllocator

```java
static SegmentAllocator prefixAllocator(MemorySegment segment)
```

Returns a segment allocator that responds to allocation requests by recycling a
 single segment. Each new allocation request will return a new slice starting at
 the segment offset `0`, hence the name prefix allocator.
 

 Equivalent to (but likely more efficient than) the following code:
 {@snippet lang=java :
 MemorySegment segment = ...
 SegmentAllocator prefixAllocator = (size, align) -> segment.asSlice(0, size, align);
 }
 The returned allocator throws `IndexOutOfBoundsException` when a slice of
 the provided segment with the requested size and alignment cannot be found.

          client knows that they have fully processed the contents of the allocated
          segment before the subsequent allocation request takes place.

           the same recycling allocator might cause a thread to overwrite contents
           written to the underlying segment by a different thread.

**参数**

- **segment** — the memory segment to be recycled by the returned allocator

**返回**

- an allocator that recycles an existing segment upon each new allocation request

**异常**

- **IllegalArgumentException** — if the `segment` is `isReadOnly() read-only`
