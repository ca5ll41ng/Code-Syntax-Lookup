---
id: "java-en-function-memorysegment-elements"
language: "java"
lang: "en"
category: "function"
name: "MemorySegment.elements"
signature: "Stream<MemorySegment> elements(MemoryLayout elementLayout)"
title: "MemorySegment.elements"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemorySegment.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemorySegment.elements

```java
Stream<MemorySegment> elements(MemoryLayout elementLayout)
```

Returns a sequential `Stream` over disjoint slices (whose size matches that
 of the specified layout) in this segment. Calling this method is equivalent to
 the following code:
 {@snippet lang=java :
 StreamSupport.stream(segment.spliterator(elementLayout), false);
 }

**参数**

- **elementLayout** — the layout to be used for splitting

**返回**

- a sequential `Stream` over disjoint slices in this segment

**异常**

- **IllegalArgumentException** — if `elementLayout.byteSize() == 0`
- **IllegalArgumentException** — if `byteSize() % elementLayout.byteSize() != 0`
- **IllegalArgumentException** — if `elementLayout.byteSize() % elementLayout.byteAlignment() != 0`
- **IllegalArgumentException** — if this segment is incompatible with the alignment constraint in the provided layout
