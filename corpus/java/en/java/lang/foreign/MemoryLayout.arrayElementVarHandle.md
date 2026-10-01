---
id: "java-en-function-memorylayout-arrayelementvarhandle"
language: "java"
lang: "en"
category: "function"
name: "MemoryLayout.arrayElementVarHandle"
signature: "VarHandle arrayElementVarHandle(PathElement... elements)"
title: "MemoryLayout.arrayElementVarHandle"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemoryLayout.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryLayout.arrayElementVarHandle

```java
VarHandle arrayElementVarHandle(PathElement... elements)
```

Creates a var handle that accesses adjacent elements in a memory segment at
 offsets selected by the given layout path, where the accessed elements have this
 layout, and where the initial layout in the path is this layout.
 

 The returned var handle has the following characteristics:
 
     
- its type is derived from the `carrier() carrier` of the
     selected value layout;
     
- it has a leading parameter of type `MemorySegment` representing
     the accessed segment
     
- a following `long` parameter, corresponding to the base offset,
     denoted as `B`;
     
- a following `long` parameter, corresponding to the array index,
     denoted as `I0`. The array index is used to scale the accessed offset
     by this layout size;
     
- it has zero or more trailing access coordinates of type `long`,
     one for each open path element in the provided
     layout path, denoted as `I1, I2, ... In`, respectively. The order of
     these access coordinates corresponds to the order in which the open path
     elements occur in the provided layout path.
 

 

 If the provided layout path `P` contains no dereference elements, then the
 offset `O` of the access operation is computed as follows:

 {@snippet lang = "java":
 O = this.byteOffsetHandle(P).invokeExact(this.scale(B, I0), I1, I2, ... In);
 }
 

 More formally, the method handle returned by this method is obtained from `varHandle`,
 as follows:
 {@snippet lang = "java":
 MethodHandles.collectCoordinates(varHandle(elements), 1, scaleHandle())
 }
 

 Accessing a memory segment using the var handle returned by this method is subject
 to the following checks:
 
     
- The physical address of the accessed memory segment must be
     aligned according to the
     `byteAlignment() alignment constraint` of the root layout
     (this layout), or an `IllegalArgumentException` is thrown. Note
     that the alignment constraint of the root layout can be more strict
     (but not less) than the alignment constraint of the selected value layout.
     
- The access operation must fall inside the spatial bounds of the accessed
     memory segment, or an `IndexOutOfBoundsException` is thrown. This is the case
     when `B + A <= S`, where `B` is the base offset (defined above),
     `A` is the size of this layout and `S` is the size of the
     accessed memory segment. Note that the size of this layout might be bigger
     than the size of the accessed layout (e.g. when accessing a struct member).
     
- If the provided layout path has an open path element whose size is `S`,
     its corresponding trailing `long` coordinate value `I` must be
     `0 <= I < S`, or an `IndexOutOfBoundsException` is thrown.
     
- The accessed memory segment must be
     `isAccessibleBy(Thread) accessible` from the thread
     performing the access operation, or a `WrongThreadException` is thrown.
     
- For write operations, the accessed memory segment must not be
     `isReadOnly() read only`, or an
     `IllegalArgumentException` is thrown.
     
- The `scope() scope` associated with the accessed
     segment must be `isAlive() alive`, or an
     `IllegalStateException` is thrown.
 

 As the leading index coordinate `I0` is not bound by any sequence layout, it
 can assume any non-negative value - provided that the resulting offset
 computation does not overflow, or that the computed offset does not fall outside
 the spatial bound of the accessed memory segment. As such, the var handles
 returned from this method can be especially useful when accessing
 variable-length arrays.

**参数**

- **elements** — the layout path elements

**返回**

- a var handle that accesses adjacent elements in a memory segment at offsets selected by the given layout path

**异常**

- **IllegalArgumentException** — if the layout path is not well-formed for this layout
- **IllegalArgumentException** — if the layout selected by the provided path is not a `ValueLayout value layout`
