---
id: "java-en-function-memorylayout-varhandle"
language: "java"
lang: "en"
category: "function"
name: "MemoryLayout.varHandle"
signature: "VarHandle varHandle(PathElement... elements)"
title: "MemoryLayout.varHandle"
directive: "method"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemoryLayout.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryLayout.varHandle

```java
VarHandle varHandle(PathElement... elements)
```

Creates a var handle that accesses a memory segment at the offset selected by the
 given layout path, where the initial layout in the path is this layout.
 

 The returned var handle has the following characteristics:
 
     
- its type is derived from the `carrier() carrier` of the
     selected value layout;
     
- it has a leading parameter of type `MemorySegment` representing the
     accessed segment
     
- a following `long` parameter, corresponding to the base offset,
     denoted as `B`;
     
- it has zero or more trailing access coordinates of type `long`,
     one for each open path element in the provided
     layout path, denoted as `I1, I2, ... In`, respectively. The order of
     these access coordinates corresponds to the order in which the open path
     elements occur in the provided layout path.
 

 

 If the provided layout path `P` contains no dereference elements, then the
 offset `O` of the access operation is computed as follows:

 {@snippet lang = "java":
 O = this.byteOffsetHandle(P).invokeExact(B, I1, I2, ... In);
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
 

 

 If the selected layout is an `AddressLayout address layout`, calling
 `get` on the returned var handle will return a new
 memory segment. The segment is associated with the global scope. Moreover, the
 size of the segment depends on whether the address layout has a
 `targetLayout() target layout`. More specifically:
 
     
- If the address layout has a target layout `T`, then the size
     of the returned segment is `T.byteSize()`;
     
- Otherwise, the address layout has no target layout and the size
     of the returned segment
     is zero.
 

 Moreover, if the selected layout is an `AddressLayout address layout`,
 calling `set` can throw `IllegalArgumentException`
 if the memory segment representing the address to be written is not a
 `isNative() native` memory segment.
 

 If the provided layout path has size `m` and contains a dereference path
 element in position `k` (where `k <= m`) then two layout paths
 `P` and `Q` are derived, where P contains all the path elements from
 0 to `k - 1` and `Q` contains all the path elements from `k + 1`
 to `m` (`Q` could be an empty layout path if `k == m`).
 Then, the returned var handle is computed as follows:

 {@snippet lang = "java":
 VarHandle baseHandle = this.varHandle(P);
 MemoryLayout target = ((AddressLayout)this.select(P)).targetLayout().get();
 VarHandle targetHandle = target.varHandle(Q);
 targetHandle = MethodHandles.insertCoordinates(targetHandle, 1, 0L); // always access nested targets at offset 0
 targetHandle = MethodHandles.collectCoordinates(targetHandle, 0,
         baseHandle.toMethodHandle(VarHandle.AccessMode.GET));
 }

 (The above can be trivially generalized to cases where the provided layout path
 contains more than one dereference path elements).
 

 As an example, consider the memory layout expressed by a `GroupLayout`
 instance constructed as follows:
 {@snippet lang = "java":
     GroupLayout grp = java.lang.foreign.MemoryLayout.structLayout(
             MemoryLayout.paddingLayout(4),
             ValueLayout.JAVA_INT.withOrder(ByteOrder.BIG_ENDIAN).withName("value")
     );
 }
 To access the member layout named `value`, we can construct a var handle as
 follows:
 {@snippet lang = "java":
     VarHandle handle = grp.varHandle(PathElement.groupElement("value")); //(MemorySegment, long) -> int
 }

 access mode restrictions, which
 are common to all var handles derived from memory layouts.

**参数**

- **elements** — the layout path elements

**返回**

- a var handle that accesses a memory segment at the offset selected by the given layout path

**异常**

- **IllegalArgumentException** — if the layout path is not well-formed for this layout
- **IllegalArgumentException** — if the layout selected by the provided path is not a `ValueLayout value layout`
