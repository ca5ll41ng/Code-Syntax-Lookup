---
id: "java-en-function-memorysegment-heapbase"
language: "java"
lang: "en"
category: "function"
name: "MemorySegment.heapBase"
signature: "Optional<Object> heapBase()"
title: "MemorySegment.heapBase"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemorySegment.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemorySegment.heapBase

```java
Optional<Object> heapBase()
```

Returns the Java object stored in the on-heap region of memory backing this memory
 segment, if any. For instance, if this memory segment is a heap segment created
 with the `ofArray` factory method, this method will return the
 `byte[]` object which was used to obtain the segment. This method returns
 an empty `Optional` value if either this segment is a
 `isNative() native` segment, or if this segment is
 `isReadOnly() read-only`.

**返回**

- the Java object associated with this memory segment, if any
