---
id: "java-en-function-memorysegment-setatindex"
language: "java"
lang: "en"
category: "function"
name: "MemorySegment.setAtIndex"
signature: "void setAtIndex(ValueLayout.OfChar layout, long index, char value)"
title: "MemorySegment.setAtIndex"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemorySegment.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemorySegment.setAtIndex

```java
void setAtIndex(ValueLayout.OfChar layout, long index, char value)
```

Writes a char into this segment at the given index, scaled by the given
 layout size.

**参数**

- **layout** — the layout of the region of memory to be written
- **index** — a logical index. The offset in bytes (relative to this segment address) at which the access operation will occur can be expressed as `(index * layout.byteSize())`.
- **value** — the char value to be written

**异常**

- **IllegalStateException** — if the `scope() scope` associated with this segment is not `isAlive() alive`
- **WrongThreadException** — if this method is called from a thread `T`, such that `isAccessibleBy(T) == false`
- **IllegalArgumentException** — if the access operation is incompatible with the alignment constraint in the provided layout
- **IllegalArgumentException** — if `layout.byteAlignment() > layout.byteSize()`
- **IndexOutOfBoundsException** — if `index * layout.byteSize()` overflows
- **IndexOutOfBoundsException** — if `index * layout.byteSize() > byteSize() - layout.byteSize()` or `index < 0`
- **IllegalArgumentException** — if this segment is `isReadOnly() read-only`
