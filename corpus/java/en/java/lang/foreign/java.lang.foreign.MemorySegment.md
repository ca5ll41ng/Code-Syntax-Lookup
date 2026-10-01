---
id: "java-en-function-java-lang-foreign-memorysegment"
language: "java"
lang: "en"
category: "function"
name: "java.lang.foreign.MemorySegment"
title: "MemorySegment"
directive: "type"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemorySegment.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemorySegment

A memory segment provides access to a contiguous region of memory.
 

 There are two kinds of memory segments:
 
     
- A heap segment is backed by, and provides access to, a region of
     memory inside the Java heap (an "on-heap" region).
     
- A native segment is backed by, and provides access to, a region of
     memory outside the Java heap (an "off-heap" region).
 

 Heap segments can be obtained by calling one of the `ofArray`
 factory methods. These methods return a memory segment backed by the on-heap region
 that holds the specified Java array.
 

 Native segments can be obtained by calling one of the `allocate`
 factory methods, which return a memory segment backed by a newly allocated off-heap
 region with the given size and aligned to the given alignment constraint.
 Alternatively, native segments can be obtained by
 `map(MapMode, long, long, Arena) mapping` a file into a new off-heap
 region (in some systems, this operation is sometimes referred to as `mmap`).
 Segments obtained in this way are called mapped segments, and their contents
 can be `force() persisted` and `load() loaded` to and from the
 underlying memory-mapped file.
 

 Both kinds of segments are read and written using the same methods, known as
 access operations. An access operation on a memory
 segment always and only provides access to the region for which the segment was
 obtained.

 Characteristics of memory segments

 Every memory segment has an `address() address`, expressed as a
 `long` value. The nature of a segment's address depends on the kind of the
 segment:
 
 
- The address of a heap segment is not a physical address, but rather an offset
 within the region of memory which backs the segment. The region is inside the Java
 heap, so garbage collection might cause the region to be relocated in physical memory
 over time, but this is not exposed to clients of the `MemorySegment` API who
 see a stable virtualized address for a heap segment backed by the region.
 A heap segment obtained from one of the `ofArray` factory methods has
 an address of zero.
 
- The address of a native segment (including mapped segments) denotes the physical
 address of the region of memory which backs the segment.
 

 

 Every memory segment has a `maxByteAlignment() maximum byte alignment`,
 expressed as a `long` value. The maximum alignment is always a power of two,
 derived from the segment address, and the segment type, as explained in more detail
 below.
 

 Every memory segment has a `byteSize() size`. The size of a heap segment
 is derived from the Java array from which it is obtained. This size is predictable
 across Java runtimes. The size of a native segment is either passed explicitly
 (as in `allocate`) or derived from a `MemoryLayout`
 (as in `allocate`). The size of a memory segment is typically
 a positive number but may be zero, but never negative.
 

 The address and size of a memory segment jointly ensure that access operations on the
 segment cannot fall outside the boundaries of the region of memory that backs
 the segment. That is, a memory segment has spatial bounds.
 

 Every memory segment is associated with a `Scope scope`. This ensures that
 access operations on a memory segment cannot occur when the region of memory that
 backs the memory segment is no longer available (e.g., after the scope associated
 with the accessed memory segment is no longer `isAlive() alive`).
 That is, a memory segment has temporal bounds.
 

 Finally, access operations on a memory segment can be subject to additional
 thread-confinement checks. Heap segments can be accessed from any thread.
 Conversely, native segments can only be accessed compatibly with the
 confinement characteristics of the arena
 used to obtain them.

 Accessing memory segments

 A memory segment can be read or written using various access operations provided in
 this class (e.g. `get`). Each access operation takes
 a `ValueLayout value layout`, which specifies the size and shape of the
 value, and an offset, expressed in bytes. For instance, to read an `int` from
 a segment, using `nativeOrder() default endianness`, the
 following code can be used:
 {@snippet lang=java :
 MemorySegment segment = ...
 int value = segment.get(ValueLayout.JAVA_INT, 0);
 }

 If the value to be read is stored in memory using `BIG_ENDIAN big-endian`
 encoding, the access operation can be expressed as follows:
 {@snippet lang=java :
 int value = segment.get(ValueLayout.JAVA_INT.withOrder(BIG_ENDIAN), 0);
 }

 Access operations on memory segments are implemented using var handles. The
 `varHandle` method can be used to obtain a var handle that can be
 used to get/set values represented by the given value layout on a memory segment at
 the given offset:

 {@snippet lang=java:
 VarHandle intAtOffsetHandle = ValueLayout.JAVA_INT.varHandle(); // (MemorySegment, long)
 int value = (int) intAtOffsetHandle.get(segment, 10L);          // segment.get(ValueLayout.JAVA_INT, 10L)
 }

 Alternatively, a var handle that can be used to access an element of an `int`
 array at a given logical index can be created as follows:

 {@snippet lang=java:
 VarHandle intAtOffsetAndIndexHandle =
         ValueLayout.JAVA_INT.arrayElementVarHandle();             // (MemorySegment, long, long)
 int value = (int) intAtOffsetAndIndexHandle.get(segment, 2L, 3L); // segment.get(ValueLayout.JAVA_INT, 2L + (3L * 4L))
 }

 

 Clients can also drop the base offset parameter, in order to make the access
 expression simpler. This can be used to implement access operations such as
 `getAtIndex`:

 {@snippet lang=java:
 VarHandle intAtIndexHandle =
         MethodHandles.insertCoordinates(intAtOffsetAndIndexHandle, 1, 0L); // (MemorySegment, long)
 int value = (int) intAtIndexHandle.get(segment, 3L);                       // segment.getAtIndex(ValueLayout.JAVA_INT, 3L);
 }

 Var handles for more complex access expressions (e.g. struct field access, pointer
 dereference) can be created directly from memory layouts, using
 layout paths.

 Slicing memory segments

 Memory segments support `asSlice(long, long) slicing`.
 Slicing a memory segment returns a new memory segment that is backed by the same
 region of memory as the original. The address of the sliced segment is derived from
 the address of the original segment, by adding an offset (expressed in bytes). The
 size of the sliced segment is either derived implicitly (by subtracting the specified
 offset from the size of the original segment), or provided explicitly. In other words,
 a sliced segment has stricter spatial bounds than those of the original
 segment:
 {@snippet lang = java:
 Arena arena = ...
 MemorySegment segment = arena.allocate(100);
 MemorySegment slice = segment.asSlice(50, 10);
 slice.get(ValueLayout.JAVA_INT, 20); // Out of bounds!
 arena.close();
 slice.get(ValueLayout.JAVA_INT, 0); // Already closed!
}
 The above code creates a native segment that is 100 bytes long; then, it creates a
 slice that starts at offset 50 of `segment`, and is 10 bytes long. That is, the
 address of the `slice` is `segment.address() + 50`, and its size is 10.
 As a result, attempting to read an int value at offset 20 of the `slice` segment
 will result in an exception. The `Arena temporal bounds` of the original
 segment is inherited by its slices; that is, when the scope associated with
 `segment` is no longer `isAlive() alive`, `slice` will
 also become inaccessible.
 

 A client might obtain a `Stream` from a segment, which can then be used to slice
 the segment (according to a given element layout) and even allow multiple threads to
 work in parallel on disjoint segment slices (to do this, the segment has to be
 `isAccessibleBy(Thread) accessible` from multiple threads).
 The following code can be used to sum all int values in a memory segment in parallel:

 {@snippet lang = java:
 try (Arena arena = Arena.ofShared()) {
     SequenceLayout SEQUENCE_LAYOUT = MemoryLayout.sequenceLayout(1024, ValueLayout.JAVA_INT);
     MemorySegment segment = arena.allocate(SEQUENCE_LAYOUT);
     int sum = segment.elements(ValueLayout.JAVA_INT).parallel()
                      .mapToInt(s -> s.get(ValueLayout.JAVA_INT, 0))
                      .sum();
 }
}

 Alignment

 Access operations on a memory segment are constrained not only by the spatial and
 temporal bounds of the segment, but also by the alignment constraint of the
 value layout specified to the operation. An access operation can access only those
 offsets in the segment that denote addresses in physical memory that are
 aligned according to the layout. An address in physical memory is
 aligned according to a layout if the address is an integer multiple of
 the layout's alignment constraint. For example, the address 1000 is aligned according
 to an 8-byte alignment constraint (because 1000 is an integer multiple of 8), and to
 a 4-byte alignment constraint, and to a 2-byte alignment constraint; in contrast,
 the address 1004 is aligned according to a 4-byte alignment constraint, and to
 a 2-byte alignment constraint, but not to an 8-byte alignment constraint.
 Access operations are required to respect alignment because it can impact
 the performance of access operations, and can also determine which access operations
 are available at a given physical address. For instance,
 `compareAndSet(Object...) atomic access operations`
 operations using `java.lang.invoke.VarHandle` are only permitted at aligned
 addresses. In addition, alignment applies to an access operation whether the segment
 being accessed is a native segment or a heap segment.
 

 If the segment being accessed is a native segment, then its
 `address() address` in physical memory can be combined with the offset to
 obtain the target address in physical memory. The pseudo-function below
 demonstrates this:

 {@snippet lang = java:
 boolean isAligned(MemorySegment segment, long offset, MemoryLayout layout) {
   return ((segment.address() + offset) % layout.byteAlignment()) == 0;
 }
 }

 For example:
 
 
- A native segment with address 1000 can be accessed at offsets 0, 8, 16, 24, etc
     under an 8-byte alignment constraint, because the target addresses
     (1000, 1008, 1016, 1024) are 8-byte aligned.
     Access at offsets 1-7 or 9-15 or 17-23 is disallowed because the target addresses
     would not be 8-byte aligned.
 
- A native segment with address 1000 can be accessed at offsets 0, 4, 8, 12, etc
     under a 4-byte alignment constraint, because the target addresses
     (1000, 1004, 1008, 1012) are 4-byte aligned.
     Access at offsets 1-3 or 5-7 or 9-11 is disallowed because the target addresses
     would not be 4-byte aligned.
 
- A native segment with address 1000 can be accessed at offsets 0, 2, 4, 6, etc
     under a 2-byte alignment constraint, because the target addresses
     (1000, 1002, 1004, 1006) are 2-byte aligned.
     Access at offsets 1 or 3 or 5 is disallowed because the target addresses would
     not be 2-byte aligned.
 
- A native segment with address 1004 can be accessed at offsets 0, 4, 8, 12, etc
     under a 4-byte alignment constraint, and at offsets 0, 2, 4, 6, etc
     under a 2-byte alignment constraint. Under an 8-byte alignment constraint,
     it can be accessed at offsets 4, 12, 20, 28, etc.
 
- A native segment with address 1006 can be accessed at offsets 0, 2, 4, 6, etc
     under a 2-byte alignment constraint.
     Under a 4-byte alignment constraint, it can be accessed at offsets 2, 6, 10, 14, etc.
     Under an 8-byte alignment constraint, it can be accessed at offsets 2, 10, 18, 26, etc.
 
- A native segment with address 1007 can be accessed at offsets 0, 1, 2, 3, etc
     under a 1-byte alignment constraint.
     Under a 2-byte alignment constraint, it can be accessed at offsets 1, 3, 5, 7, etc.
     Under a 4-byte alignment constraint, it can be accessed at offsets 1, 5, 9, 13, etc.
     Under an 8-byte alignment constraint, it can be accessed at offsets 1, 9, 17, 25, etc.
 

 

 The alignment constraint used to access a segment is typically dictated by the shape
 of the data structure stored in the segment. For example, if the programmer wishes to
 store a sequence of 8-byte values in a native segment, then the segment should be
 allocated by specifying an 8-byte alignment constraint, either via
 `allocate` or `allocate`. These
 factories ensure that the off-heap region of memory backing the returned segment
 has a starting address that is 8-byte aligned. Subsequently, the programmer can access
 the segment at the offsets of interest -- 0, 8, 16, 24, etc -- in the knowledge that
 every such access is aligned.
 

 If the segment being accessed is a heap segment, then determining whether access is
 aligned is more complex. The address of the segment in physical memory is not known
 and is not even fixed (it may change when the segment is relocated during garbage
 collection). This means that the address cannot be combined with the specified offset
 to determine a target address in physical memory. Since the alignment constraint
 always refers to alignment of addresses in physical memory, it is not
 possible in principle to determine if any offset in a heap segment is aligned.
 For example, suppose the programmer chooses an 8-byte alignment constraint and tries
 to access offset 16 in a heap segment. If the heap segment's address 0 corresponds to
 physical address 1000, then the target address (1016) would be aligned, but if
 address 0 corresponds to physical address 1004, then the target address (1020) would
 not be aligned. It is undesirable to allow access to target addresses that are
 aligned according to the programmer's chosen alignment constraint, but might not be
 predictably aligned in physical memory (e.g. because of platform considerations
 and/or garbage collection behavior).
 

 In practice, the Java runtime lays out arrays in memory so that each n-byte element
 occurs at an n-byte aligned physical address. The
 runtime preserves this invariant even if the array is relocated during garbage
 collection. Access operations rely on this invariant to determine if the specified
 offset in a heap segment refers to an aligned address in physical memory.
 For example:
 
 
- The starting physical address of a `short[]` array will be 2-byte aligned
     (e.g. 1006) so that successive short elements occur at 2-byte aligned addresses
     (e.g. 1006, 1008, 1010, 1012, etc). A heap segment backed by a `short[]`
     array can be accessed at offsets 0, 2, 4, 6, etc under a 2-byte alignment
     constraint. The segment cannot be accessed at any offset under a 4-byte
     alignment constraint, because there is no guarantee that the target address would
     be 4-byte aligned, e.g., offset 0 would correspond to physical address 1006 while
     offset 1 would correspond to physical address 1007. Similarly, the segment cannot
     be accessed at any offset under an 8-byte alignment constraint, because there is
     no guarantee that the target address would be 8-byte aligned, e.g., offset 2
     would correspond to physical address 1008 but offset 4 would correspond to
     physical address 1010.
 
- The starting physical address of a `long[]` array will be 8-byte aligned
     (e.g. 1000), so that successive long elements occur at 8-byte aligned addresses
     (e.g., 1000, 1008, 1016, 1024, etc.) A heap segment backed by a `long[]`
     array can be accessed at offsets 0, 8, 16, 24, etc under an 8-byte alignment
     constraint. In addition, the segment can be accessed at offsets 0, 4, 8, 12,
     etc under a 4-byte alignment constraint, because the target addresses (1000, 1004,
     1008, 1012) are 4-byte aligned. And, the segment can be accessed at offsets 0, 2,
     4, 6, etc under a 2-byte alignment constraint, because the target addresses (e.g.
     1000, 1002, 1004, 1006) are 2-byte aligned.
 

 

 In other words, heap segments feature a maximum
 alignment which is derived from the size of the elements of the Java array backing the
 segment, as shown in the following table:

 
 Maximum alignment of heap segments
 
 
     Array type (of backing region)
     Maximum supported alignment (in bytes)
 
 
 
 `boolean[]`
     `ValueLayout.JAVA_BOOLEAN.byteAlignment()`
 `byte[]`
     `ValueLayout.JAVA_BYTE.byteAlignment()`
 `char[]`
     `ValueLayout.JAVA_CHAR.byteAlignment()`
 `short[]`
     `ValueLayout.JAVA_SHORT.byteAlignment()`
 `int[]`
     `ValueLayout.JAVA_INT.byteAlignment()`
 `float[]`
     `ValueLayout.JAVA_FLOAT.byteAlignment()`
 `long[]`
     `ValueLayout.JAVA_LONG.byteAlignment()`
 `double[]`
     `ValueLayout.JAVA_DOUBLE.byteAlignment()`
 
 

 Heap segments can only be accessed using a layout whose alignment is smaller or equal
 to the maximum alignment associated with the heap segment. Attempting to access a
 heap segment using a layout whose alignment is greater than the maximum alignment
 associated with the heap segment will fail, as demonstrated in the following example:

 {@snippet lang=java :
 MemorySegment byteSegment = MemorySegment.ofArray(new byte[10]);
 byteSegment.get(ValueLayout.JAVA_INT, 0); // fails: ValueLayout.JAVA_INT.byteAlignment() > ValueLayout.JAVA_BYTE.byteAlignment()
 }

 In such circumstances, clients have two options. They can use a heap segment backed
 by a different array type (e.g. `long[]`), capable of supporting greater maximum
 alignment. More specifically, the maximum alignment associated with `long[]` is
 set to `ValueLayout.JAVA_LONG.byteAlignment()`, which is 8 bytes:

 {@snippet lang=java :
 MemorySegment longSegment = MemorySegment.ofArray(new long[10]);
 longSegment.get(ValueLayout.JAVA_INT, 0); // ok: ValueLayout.JAVA_INT.byteAlignment() <= ValueLayout.JAVA_LONG.byteAlignment()
 }

 Alternatively, they can invoke the access operation with an unaligned layout.
 All unaligned layout constants (e.g. `JAVA_INT_UNALIGNED`) have
 their alignment constraint set to 1:
 {@snippet lang=java :
 MemorySegment byteSegment = MemorySegment.ofArray(new byte[10]);
 byteSegment.get(ValueLayout.JAVA_INT_UNALIGNED, 0); // ok: ValueLayout.JAVA_INT_UNALIGNED.byteAlignment() == ValueLayout.JAVA_BYTE.byteAlignment()
 }

 Clients can use the `maxByteAlignment` method to check if
 a memory segment supports the alignment constraint of a memory layout, as follows:
 {@snippet lang=java:
 MemoryLayout layout = ...
 MemorySegment segment = ...
 boolean isAligned = segment.maxByteAlignment() >= layout.byteAlignment();
 }

 Zero-length memory segments

 When interacting with foreign functions, it is
 common for those functions to allocate a region of memory and return a pointer to that
 region. Modeling the region of memory with a memory segment is challenging because
 the Java runtime has no insight into the size of the region. Only the address of the
 start of the region, stored in the pointer, is available. For example, a C function
 with return type `char*` might return a pointer to a region containing a single
 `char` value, or to a region containing an array of `char` values, where
 the size of the array might be provided in a separate parameter. The size of the
 array is not readily apparent to the code calling the foreign function and hoping to
 use its result. In addition to having no insight into the size of the region of
 memory backing a pointer returned from a foreign function, it also has no insight
 into the lifetime intended for said region of memory by the foreign function that
 allocated it.
 

 The `MemorySegment` API uses zero-length memory segments to represent:
 
     
- pointers returned from a foreign function;
     
- pointers passed by a foreign function
         to an upcall stub; and
     
- pointers read from a memory segment (more on that below).
 

 The address of the zero-length segment is the address stored in the pointer.
 The spatial and temporal bounds of the zero-length segment are as follows:
 
     
- The size of the segment is zero. Any attempt to access these segments will
     fail with `IndexOutOfBoundsException`. This is a crucial safety feature: as
     these segments are associated with a region of memory whose size is not known, any
     access operations involving these segments cannot be validated. In effect, a
     zero-length memory segment wraps an address, and it cannot be used
     without explicit intent (see below);
     
- The segment is associated with the global scope. Thus, while zero-length
     memory segments cannot be accessed directly, they can be passed, opaquely, to
     other pointer-accepting foreign functions.
 

 

 To demonstrate how clients can work with zero-length memory segments, consider the
 case of a client that wants to read a pointer from some memory segment. This can be
 done via the `get` access method. This
 method accepts an `AddressLayout address layout`
 (e.g. `ADDRESS`), the layout of the pointer to be read. For instance,
 on a 64-bit platform, the size of an address layout is 8 bytes. The access operation
 also accepts an offset, expressed in bytes, which indicates the position (relative to
 the start of the memory segment) at which the pointer is stored. The access operation
 returns a zero-length native memory segment, backed by a region
 of memory whose starting address is the 64-bit value read at the specified offset.
 

 The returned zero-length memory segment cannot be accessed directly by the client:
 since the size of the segment is zero, any access operation would result in
 out-of-bounds access. Instead, the client must, unsafely, assign new spatial
 bounds to the zero-length memory segment. This can be done via the
 `reinterpret` method, as follows:

 {@snippet lang = java:
 MemorySegment z = segment.get(ValueLayout.ADDRESS, ...);   // size = 0
 MemorySegment ptr = z.reinterpret(16);                     // size = 16
 int x = ptr.getAtIndex(ValueLayout.JAVA_INT, 3);           // ok
}
 

 In some cases, the client might additionally want to assign new temporal bounds to a
 zero-length memory segment. This can be done via the
 `reinterpret` method, which returns a new native segment
 with the desired size and the same temporal bounds as those of the provided arena:

 {@snippet lang = java:
 MemorySegment ptr = null;
 try (Arena arena = Arena.ofConfined()) {
       MemorySegment z = segment.get(ValueLayout.ADDRESS, ...);    // size = 0, scope = always alive
       ptr = z.reinterpret(16, arena, null);                       // size = 16, scope = arena.scope()
       int x = ptr.getAtIndex(ValueLayout.JAVA_INT, 3);            // ok
 }
 int x = ptr.getAtIndex(ValueLayout.JAVA_INT, 3);                  // throws IllegalStateException
}

 Alternatively, if the size of the region of memory backing the zero-length memory
 segment is known statically, the client can overlay a
 `withTargetLayout(MemoryLayout) target layout` on the address
 layout used when reading a pointer. The target layout is then used to dynamically
 expand the size of the native memory segment returned by the access operation
 so that the size of the segment is the same as the size of the target layout . In other
 words, the returned segment is no longer a zero-length memory segment, and the pointer
 it represents can be dereferenced directly:

 {@snippet lang = java:
 AddressLayout intArrPtrLayout = ValueLayout.ADDRESS.withTargetLayout(
         MemoryLayout.sequenceLayout(4, ValueLayout.JAVA_INT)); // layout for int (*ptr)[4]
 MemorySegment ptr = segment.get(intArrPtrLayout, ...);         // size = 16
 int x = ptr.getAtIndex(ValueLayout.JAVA_INT, 3);               // ok
}
 

 All the methods that can be used to manipulate zero-length memory segments
 (`reinterpret`, `reinterpret`, `reinterpret` and
 `withTargetLayout`) are
 restricted methods, and should
 be used with caution: assigning a segment incorrect spatial and/or temporal bounds
 could result in a VM crash when attempting to access the memory segment.

 Keep-alive operations

 Some operations on memory segments keep the memory segment `isAlive() alive`.
 For instance, if the segment has been obtained using a `ofShared() shared arena`,
 any attempt to `close() close` the arena while such an operation is still
 executing will result in an `IllegalStateException`.
 

 Examples of keep-alive operations are: passing a memory segment to a
 `downcallHandle(FunctionDescriptor, Linker.Option...) downcall method handle`,
 or calling one of the methods `load`, `unload`, `force`, or `isLoaded`.

 Implementations of this interface are immutable, thread-safe and
 value-based.

> *Since 22*
