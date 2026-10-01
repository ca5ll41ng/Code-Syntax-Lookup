---
id: "java-en-function-memorysegment-get"
language: "java"
lang: "en"
category: "function"
name: "MemorySegment.get"
signature: "byte get(ValueLayout.OfByte layout, long offset)"
title: "MemorySegment.get"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemorySegment.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemorySegment.get

```java
byte get(ValueLayout.OfByte layout, long offset)
```

Reads a byte from this segment at the given offset, with the given layout.

**参数**

- **layout** — the layout of the region of memory to be read
- **offset** — the offset in bytes (relative to this segment address) at which this access operation will occur.

**返回**

- a byte value read from this segment

**异常**

- **IllegalStateException** — if the `scope() scope` associated with this segment is not `isAlive() alive`
- **WrongThreadException** — if this method is called from a thread `T`, such that `isAccessibleBy(T) == false`
- **IllegalArgumentException** — if the access operation is incompatible with the alignment constraint in the provided layout
- **IndexOutOfBoundsException** — if `offset > byteSize() - layout.byteSize()` or `offset < 0`
