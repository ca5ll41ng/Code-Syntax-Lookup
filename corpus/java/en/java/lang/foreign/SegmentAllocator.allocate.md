---
id: "java-en-function-segmentallocator-allocate"
language: "java"
lang: "en"
category: "function"
name: "SegmentAllocator.allocate"
signature: "default MemorySegment allocate(MemoryLayout layout)"
title: "SegmentAllocator.allocate"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/SegmentAllocator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SegmentAllocator.allocate

```java
default MemorySegment allocate(MemoryLayout layout)
```

{@return a new memory segment with the given layout}

           `this.allocate(layout.byteSize(), layout.byteAlignment())`.

**参数**

- **layout** — the layout of the block of memory to be allocated
