---
id: "java-en-function-memorysegment-copy"
language: "java"
lang: "en"
category: "function"
name: "MemorySegment.copy"
signature: "static void copy(MemorySegment srcSegment, long srcOffset, MemorySegment dstSegment, long dstOffset, long bytes)"
title: "MemorySegment.copy"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemorySegment.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemorySegment.copy

```java
static void copy(MemorySegment srcSegment, long srcOffset, MemorySegment dstSegment, long dstOffset, long bytes)
```

Performs a bulk copy from source segment to destination segment. More
 specifically, the bytes at offset `srcOffset` through
 `srcOffset + bytes - 1` in the source segment are copied into the
 destination segment at offset `dstOffset` through
 `dstOffset + bytes - 1`.
 

 If the source segment overlaps with the destination segment, then the copying is
 performed as if the bytes at offset `srcOffset` through
 `srcOffset + bytes - 1` in the source segment were first copied into a
 temporary segment with size `bytes`, and then the contents of the temporary
 segment were copied into the destination segment at offset `dstOffset`
 through `dstOffset + bytes - 1`.
 

 The result of a bulk copy is unspecified if, in the uncommon case, the source
 segment and the destination segment do not overlap, but refer to overlapping
 regions of the same backing storage using different addresses. For example, this
 may occur if the same file is `map mapped` to two segments.
 

 Calling this method is equivalent to the following code:
 {@snippet lang=java :
 MemorySegment.copy(srcSegment, ValueLayout.JAVA_BYTE, srcOffset, dstSegment, ValueLayout.JAVA_BYTE, dstOffset, bytes);
 }

**参数**

- **srcSegment** — the source segment
- **srcOffset** — the starting offset, in bytes, of the source segment
- **dstSegment** — the destination segment
- **dstOffset** — the starting offset, in bytes, of the destination segment
- **bytes** — the number of bytes to be copied

**异常**

- **IllegalStateException** — if the `scope() scope` associated with `srcSegment` is not `isAlive() alive`
- **WrongThreadException** — if this method is called from a thread `T`, such that `srcSegment.isAccessibleBy(T) == false`
- **IllegalStateException** — if the `scope() scope` associated with `dstSegment` is not `isAlive() alive`
- **WrongThreadException** — if this method is called from a thread `T`, such that `dstSegment.isAccessibleBy(T) == false`
- **IndexOutOfBoundsException** — if `srcOffset > srcSegment.byteSize() - bytes`
- **IndexOutOfBoundsException** — if `dstOffset > dstSegment.byteSize() - bytes`
- **IndexOutOfBoundsException** — if either `srcOffset`, `dstOffset` or `bytes` are `< 0`
- **IllegalArgumentException** — if `dstSegment` is `isReadOnly() read-only`
