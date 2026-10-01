---
id: "java-en-function-memorysegment-reinterpret"
language: "java"
lang: "en"
category: "function"
name: "MemorySegment.reinterpret"
signature: "MemorySegment reinterpret(long newSize)"
title: "MemorySegment.reinterpret"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemorySegment.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemorySegment.reinterpret

```java
MemorySegment reinterpret(long newSize)
```

{@return a new memory segment that has the same address and scope as this segment,
          but with the provided size}
 

 If this segment is `isReadOnly() read-only`,
 the returned segment is also `isReadOnly() read-only`.
 

 The returned memory segment shares a region of backing memory with this segment.
 Hence, no memory will be allocated or freed by this method.

**参数**

- **newSize** — the size of the returned segment

**异常**

- **IllegalArgumentException** — if `newSize < 0`
- **UnsupportedOperationException** — if this segment is not a `isNative() native` segment
- **IllegalCallerException** — if the caller is in a module that does not have native access enabled
