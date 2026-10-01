---
id: "java-en-function-memorysegment-set"
language: "java"
lang: "en"
category: "function"
name: "MemorySegment.set"
signature: "void set(ValueLayout.OfByte layout, long offset, byte value)"
title: "MemorySegment.set"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemorySegment.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemorySegment.set

```java
void set(ValueLayout.OfByte layout, long offset, byte value)
```

Writes a byte into this segment at the given offset, with the given layout.

**参数**

- **layout** — the layout of the region of memory to be written
- **offset** — the offset in bytes (relative to this segment address) at which this access operation will occur.
- **value** — the byte value to be written.

**异常**

- **IllegalStateException** — if the `scope() scope` associated with this segment is not `isAlive() alive`
- **WrongThreadException** — if this method is called from a thread `T`, such that `isAccessibleBy(T) == false`
- **IllegalArgumentException** — if the access operation is incompatible with the alignment constraint in the provided layout
- **IndexOutOfBoundsException** — if `offset > byteSize() - layout.byteSize()` or `offset < 0`
- **IllegalArgumentException** — if this segment is `isReadOnly() read-only`
