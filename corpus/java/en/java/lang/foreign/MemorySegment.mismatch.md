---
id: "java-en-function-memorysegment-mismatch"
language: "java"
lang: "en"
category: "function"
name: "MemorySegment.mismatch"
signature: "long mismatch(MemorySegment other)"
title: "MemorySegment.mismatch"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemorySegment.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemorySegment.mismatch

```java
long mismatch(MemorySegment other)
```

Finds and returns the offset, in bytes, of the first mismatch between
 this segment and the given other segment. The offset is relative to the
 `address() address` of each segment and will be in the
 range of 0 (inclusive) up to the `byteSize() size` (in bytes) of
 the smaller memory segment (exclusive).
 

 If the two segments share a common prefix then the returned offset is
 the length of the common prefix, and it follows that there is a mismatch
 between the two segments at that offset within the respective segments.
 If one segment is a proper prefix of the other, then the returned offset is
 the smallest of the segment sizes, and it follows that the offset is only
 valid for the larger segment. Otherwise, there is no mismatch and `-1` is returned.

**参数**

- **other** — the segment to be tested for a mismatch with this segment

**返回**

- the relative offset, in bytes, of the first mismatch between this and the given other segment, otherwise -1 if no mismatch

**异常**

- **IllegalStateException** — if the `scope() scope` associated with this segment is not `isAlive() alive`
- **WrongThreadException** — if this method is called from a thread `T`, such that `isAccessibleBy(T) == false`
- **IllegalStateException** — if the `scope() scope` associated with `other` is not `isAlive() alive`
- **WrongThreadException** — if this method is called from a thread `T`, such that `other.isAccessibleBy(T) == false`
