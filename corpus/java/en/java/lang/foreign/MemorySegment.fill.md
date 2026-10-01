---
id: "java-en-function-memorysegment-fill"
language: "java"
lang: "en"
category: "function"
name: "MemorySegment.fill"
signature: "MemorySegment fill(byte value)"
title: "MemorySegment.fill"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemorySegment.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemorySegment.fill

```java
MemorySegment fill(byte value)
```

Fills the contents of this memory segment with the given value.
 

 More specifically, the given value is written into each address of this
 segment. Equivalent to (but likely more efficient than) the following code:

 {@snippet lang=java :
 for (long offset = 0; offset < segment.byteSize(); offset++) {
     segment.set(ValueLayout.JAVA_BYTE, offset, value);
 }
 }

 But without any regard or guarantees on the ordering of particular memory
 elements being set.
 

 This method can be useful to initialize or reset the contents of a memory segment.

**参数**

- **value** — the value to write into this segment

**返回**

- this memory segment

**异常**

- **IllegalStateException** — if the `scope() scope` associated with this segment is not `isAlive() alive`
- **WrongThreadException** — if this method is called from a thread `T`, such that `isAccessibleBy(T) == false`
- **IllegalArgumentException** — if this segment is `isReadOnly() read-only`
