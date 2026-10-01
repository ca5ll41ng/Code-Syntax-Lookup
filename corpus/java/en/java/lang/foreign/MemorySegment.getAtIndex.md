---
id: "java-en-function-memorysegment-getatindex"
language: "java"
lang: "en"
category: "function"
name: "MemorySegment.getAtIndex"
signature: "byte getAtIndex(ValueLayout.OfByte layout, long index)"
title: "MemorySegment.getAtIndex"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemorySegment.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemorySegment.getAtIndex

```java
byte getAtIndex(ValueLayout.OfByte layout, long index)
```

Reads a byte from this segment at the given index, scaled by the given
 layout size.

**参数**

- **layout** — the layout of the region of memory to be read
- **index** — a logical index. The offset in bytes (relative to this segment address) at which the access operation will occur can be expressed as `(index * layout.byteSize())`.

**返回**

- a byte value read from this segment

**异常**

- **IllegalStateException** — if the `scope() scope` associated with this segment is not `isAlive() alive`
- **WrongThreadException** — if this method is called from a thread `T`, such that `isAccessibleBy(T) == false`
- **IllegalArgumentException** — if the access operation is incompatible with the alignment constraint in the provided layout
- **IllegalArgumentException** — if `layout.byteAlignment() > layout.byteSize()`
- **IndexOutOfBoundsException** — if `index * layout.byteSize()` overflows
- **IndexOutOfBoundsException** — if `index * layout.byteSize() > byteSize() - layout.byteSize()` or `index < 0`
