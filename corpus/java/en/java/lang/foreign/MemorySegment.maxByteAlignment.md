---
id: "java-en-function-memorysegment-maxbytealignment"
language: "java"
lang: "en"
category: "function"
name: "MemorySegment.maxByteAlignment"
signature: "long maxByteAlignment()"
title: "MemorySegment.maxByteAlignment"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemorySegment.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemorySegment.maxByteAlignment

```java
long maxByteAlignment()
```

{@return the maximum byte alignment
 associated with this memory segment}
 

 The returned alignment is always a power of two and is derived from
 the segment `address` and, if it is a heap segment,
 the type of the `heapBase() backing heap storage`.
 

 This method can be used to ensure that a segment is sufficiently aligned
 with a layout:
 {@snippet lang=java:
 MemoryLayout layout = ...
 MemorySegment segment = ...
 if (segment.maxByteAlignment() < layout.byteAlignment()) {
     // Take action (e.g. throw an Exception)
 }
 }

> *Since 23*
