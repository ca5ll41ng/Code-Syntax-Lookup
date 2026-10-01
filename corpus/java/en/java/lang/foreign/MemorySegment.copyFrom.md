---
id: "java-en-function-memorysegment-copyfrom"
language: "java"
lang: "en"
category: "function"
name: "MemorySegment.copyFrom"
signature: "MemorySegment copyFrom(MemorySegment src)"
title: "MemorySegment.copyFrom"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemorySegment.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemorySegment.copyFrom

```java
MemorySegment copyFrom(MemorySegment src)
```

Performs a bulk copy from the given source segment to this segment. More specifically,
 the bytes at offset `0` through `src.byteSize() - 1` in the source
 segment are copied into this segment at offset `0` through
 `src.byteSize() - 1`.
 

 Calling this method is equivalent to the following code:
 {@snippet lang=java :
 MemorySegment.copy(src, 0, this, 0, src.byteSize());
 }

**参数**

- **src** — the source segment

**返回**

- this segment

**异常**

- **IndexOutOfBoundsException** — if `src.byteSize() > this.byteSize()`
- **IllegalStateException** — if the `scope() scope` associated with this segment is not `isAlive() alive`
- **WrongThreadException** — if this method is called from a thread `T`, such that `isAccessibleBy(T) == false`
- **IllegalStateException** — if the `scope() scope` associated with `src` is not `isAlive() alive`
- **WrongThreadException** — if this method is called from a thread `T`, such that `src.isAccessibleBy(T) == false`
- **IllegalArgumentException** — if this segment is `isReadOnly() read-only`
