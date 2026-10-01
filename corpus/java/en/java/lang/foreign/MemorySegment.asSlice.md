---
id: "java-en-function-memorysegment-asslice"
language: "java"
lang: "en"
category: "function"
name: "MemorySegment.asSlice"
signature: "MemorySegment asSlice(long offset, long newSize)"
title: "MemorySegment.asSlice"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemorySegment.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemorySegment.asSlice

```java
MemorySegment asSlice(long offset, long newSize)
```

Returns a slice of this memory segment, at the given offset. The returned
 segment's address is the address of this segment plus the given offset;
 its size is specified by the given argument.
 

 Equivalent to the following code:
 {@snippet lang=java :
 asSlice(offset, newSize, 1);
 }
 

 If this segment is `isReadOnly() read-only`,
 the returned segment is also `isReadOnly() read-only`.
 

 The returned memory segment shares a region of backing memory with this segment.
 Hence, no memory will be allocated or freed by this method.

**参数**

- **offset** — The new segment base offset (relative to the address of this segment), specified in bytes
- **newSize** — The new segment size, specified in bytes

**返回**

- a slice of this memory segment

**异常**

- **IndexOutOfBoundsException** — if `offset < 0`, `offset > byteSize()`, `newSize < 0`, or `newSize > byteSize() - offset`

**参见**

- #asSlice(long, long, long)
