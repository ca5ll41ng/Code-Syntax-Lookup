---
id: "java-en-function-segmentallocator-allocatefrom"
language: "java"
lang: "en"
category: "function"
name: "SegmentAllocator.allocateFrom"
signature: "default MemorySegment allocateFrom(String str)"
title: "SegmentAllocator.allocateFrom"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/SegmentAllocator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SegmentAllocator.allocateFrom

```java
default MemorySegment allocateFrom(String str)
```

Converts a Java string into a null-terminated C string using the
 `UTF_8 UTF-8` charset, storing the result into a
 memory segment.
 

 Calling this method is equivalent to the following code:
 {@snippet lang = java:
 allocateFrom(str, StandardCharsets.UTF_8);
}

**参数**

- **str** — the Java string to be converted into a C string

**返回**

- a new segment containing the converted C string
