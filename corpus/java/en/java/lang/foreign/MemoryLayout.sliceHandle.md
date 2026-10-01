---
id: "java-en-function-memorylayout-slicehandle"
language: "java"
lang: "en"
category: "function"
name: "MemoryLayout.sliceHandle"
signature: "MethodHandle sliceHandle(PathElement... elements)"
title: "MemoryLayout.sliceHandle"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemoryLayout.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryLayout.sliceHandle

```java
MethodHandle sliceHandle(PathElement... elements)
```

Creates a method handle which, given a memory segment, returns a
 `asSlice(long, long) slice` corresponding to
 the layout selected by the given layout path, where the initial layout in
 the path is this layout.
 

 The returned method handle has the following characteristics:
 
     
- its return type is `MemorySegment`;
     
- it has a leading parameter of type `MemorySegment` corresponding to
     the memory segment to be sliced
     
- a following `long` parameter, corresponding to the base offset
     
- it has as zero or more trailing parameters of type `long`, one for
     each open path element in the provided
     layout path. The order of these parameters corresponds to the order in which
     the open path elements occur in the provided layout path.
 

 

 The offset `O` of the returned segment is computed as if by a call to a
 `byteOffsetHandle(PathElement...) byte offset handle` constructed
 using the given path elements.
 

 Computing a slice of a memory segment using the method handle returned by this
 method is subject to the following checks:
 
     
- The physical address of the accessed memory segment must be
     aligned according to the
     `byteAlignment() alignment constraint` of the root layout
     (this layout), or an `IllegalArgumentException` will be issued. Note
     that the alignment constraint of the root layout can be more strict
     (but not less) than the alignment constraint of the selected layout.
     
- The slicing operation must fall inside the spatial bounds of the accessed
     memory segment, or an `IndexOutOfBoundsException` is thrown. This is the case
     when `B + A <= S`, where `B` is the base offset (defined above),
     `A` is the size of this layout and `S` is the size of the
     accessed memory segment. Note that the size of this layout might be bigger
     than the size of the accessed layout (e.g. when accessing a struct member).
     
- If the provided layout path has an open path element whose size is `S`,
     its corresponding trailing `long` coordinate value `I` must be
     `0 <= I < S`, or an `IndexOutOfBoundsException` is thrown.
 

          similarly to `asSlice`, but more flexibly,
          as some indices can be specified when invoking the method handle.

**参数**

- **elements** — the layout path elements

**返回**

- a method handle that is used to slice a memory segment at the offset selected by the given layout path

**异常**

- **IllegalArgumentException** — if the layout path is not well-formed for this layout
- **IllegalArgumentException** — if the layout path contains one or more dereference path elements
