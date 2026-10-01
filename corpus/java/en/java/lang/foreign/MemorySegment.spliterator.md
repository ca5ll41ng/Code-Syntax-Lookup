---
id: "java-en-function-memorysegment-spliterator"
language: "java"
lang: "en"
category: "function"
name: "MemorySegment.spliterator"
signature: "Spliterator<MemorySegment> spliterator(MemoryLayout elementLayout)"
title: "MemorySegment.spliterator"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemorySegment.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemorySegment.spliterator

```java
Spliterator<MemorySegment> spliterator(MemoryLayout elementLayout)
```

Returns a spliterator for this memory segment. The returned spliterator reports
 `SIZED`, `SUBSIZED`, `IMMUTABLE`,
 `NONNULL` and `ORDERED` characteristics.
 

 The returned spliterator splits this segment according to the specified element
 layout; that is, if the supplied layout has size N, then calling
 `trySplit` will result in a spliterator serving approximately
 `S/N` elements (depending on whether N is even or not), where `S` is
 the size of this segment. As such, splitting is possible as long as
 `S/N >= 2`. The spliterator returns segments that have the same lifetime as
 that of this segment.
 

 The returned spliterator effectively allows to slice this segment into disjoint
 `asSlice(long, long) slices`, which can then be processed in parallel
 by multiple threads.

**参数**

- **elementLayout** — the layout to be used for splitting

**返回**

- the element spliterator for this segment

**异常**

- **IllegalArgumentException** — if `elementLayout.byteSize() == 0`
- **IllegalArgumentException** — if `byteSize() % elementLayout.byteSize() != 0`
- **IllegalArgumentException** — if `elementLayout.byteSize() % elementLayout.byteAlignment() != 0`
- **IllegalArgumentException** — if this segment is incompatible with the alignment constraint in the provided layout.
