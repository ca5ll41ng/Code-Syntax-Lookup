---
id: "java-en-function-java-lang-foreign-memorylayout"
language: "java"
lang: "en"
category: "function"
name: "java.lang.foreign.MemoryLayout"
title: "MemoryLayout"
directive: "type"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/MemoryLayout.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryLayout

A memory layout describes the contents of a memory segment.
 

 There are two leaves in the layout hierarchy, `ValueLayout value layouts`,
 which are used to represent values of given size and kind and
 `PaddingLayout padding layouts` which are used, as the name suggests, to
 represent a portion of a memory segment whose contents should be ignored, and which
 are primarily present for alignment reasons. Some common value layout constants, such
 as `JAVA_INT` and `JAVA_FLOAT_UNALIGNED` are
 defined in the `ValueLayout` class. A special kind of value layout, namely an
 `AddressLayout address layout`, is used to model values that denote the
 address of a region of memory.
 

 More complex layouts can be derived from simpler ones: a
 `SequenceLayout sequence layout` denotes a homogeneous repetition of zero
 or more occurrences of an element layout; a `GroupLayout group layout`
 denotes a heterogeneous aggregation of zero or more member layouts. Group layouts
 come in two flavors: `StructLayout struct layouts`, where member layouts
 are laid out one after the other, and `UnionLayout union layouts` where
 member layouts are laid out at the same starting offset.
 

 Layouts can be optionally associated with a name. A layout name can be
 referred to when constructing layout paths.
 

 Consider the following struct declaration in C:

 {@snippet lang=c :
 typedef struct {
     char kind;
     int value;
 } TaggedValues[5];
 }

 The above declaration can be modeled using a layout object, as follows:

 {@snippet lang=java :
 SequenceLayout TAGGED_VALUES = MemoryLayout.sequenceLayout(5,
     MemoryLayout.structLayout(
         ValueLayout.JAVA_BYTE.withName("kind"),
         MemoryLayout.paddingLayout(3),
         ValueLayout.JAVA_INT.withName("value")
     )
 ).withName("TaggedValues");
 }

 Characteristics of memory layouts

 All layouts have a size (expressed in bytes), which is defined as follows:
 
     
- The size of a value layout is determined by the `carrier`
     associated with the value layout. That is, the constant `JAVA_INT`
     has carrier `int`, and size of 4 bytes;
     
- The size of an address layout is platform-dependent. That is, the constant
     `ADDRESS` has a size of 8 bytes on a 64-bit platform;
     
- The size of a padding layout is always provided explicitly, on
     `paddingLayout(long) construction`;
     
- The size of a sequence layout whose element layout is E
     and element count is L, is the size of E,
     multiplied by L;
     
- The size of a struct layout with member layouts M1, M2, ... Mn
     whose sizes are S1, S2, ... Sn, respectively,
     is S1 + S2 + ... + Sn;
     
- The size of a union layout U with member layouts
     M1, M2, ... Mn whose sizes are
     S1, S2, ... Sn, respectively, is max(S1, S2, ... Sn).
 

 

 Furthermore, all layouts have a natural alignment (expressed in bytes) which
 is defined as follows:
 
     
- The natural alignment of a padding layout is 1;
     
- The natural alignment of a value layout whose size is N is
     N;
     
- The natural alignment of a sequence layout whose element layout is
     E is the alignment of E;
     
- The natural alignment of a group layout with member layouts
     M1, M2, ... Mn whose alignments are
     A1, A2, ... An, respectively, is max(A1, A2 ... An).
 

 A layout's alignment can be overridden if needed
 (see `withByteAlignment`), which can be useful to describe
 layouts with weaker or stronger alignment constraints.

 Layout paths

 A layout path is used to unambiguously select a layout that is nested in some
 other layout. Layout paths are typically expressed as a sequence of one or more
 `PathElement path elements`. (A more formal definition of layout paths is
 provided below).
 

 Layout paths can be used to:
 
     
- obtain `byteOffset(PathElement...) offsets` of
     arbitrarily nested layouts;
     
- obtain a `varHandle(PathElement...) var handle` that can be used
     to access the value corresponding to the selected layout;
     
- `select(PathElement...) select` an arbitrarily nested layout.
 

 

 For instance, given the `taggedValues` sequence layout constructed above, we can
 obtain the offset, in bytes, of the member layout named value in the
 first sequence element, as follows:
 {@snippet lang=java :
 long valueOffset = TAGGED_VALUES.byteOffset(PathElement.sequenceElement(0),
                                           PathElement.groupElement("value")); // yields 4
 }

 Similarly, we can select the member layout named `value`, as follows:
 {@snippet lang=java :
 MemoryLayout value = TAGGED_VALUES.select(PathElement.sequenceElement(),
                                          PathElement.groupElement("value"));
 }

 Open path elements

 Some layout path elements, said open path elements, can select multiple
 layouts at once. For instance, the open path elements
 `sequenceElement`, `sequenceElement`
 select an unspecified element in a sequence layout. A var handle derived from a
 layout path containing one or more open path element features additional coordinates
 of type `long`, which can be used by clients to bind the open elements
 in the path:

 {@snippet lang=java :
 VarHandle valueHandle = TAGGED_VALUES.varHandle(PathElement.sequenceElement(),
                                                PathElement.groupElement("value"));
 MemorySegment taggedValues = ...
 // reads the "value" field of the third struct in the array (taggedValues[2].value)
 int val = (int) valueHandle.get(taggedValues,
         0L,  // base offset
         2L); // sequence index
 }

 

 Open path elements also affect the creation of
 `byteOffsetHandle(PathElement...) offset-computing method handles`. Each
 open path element becomes an additional `long` parameter in the obtained method
 handle. This parameter can be used to specify the index of the sequence element whose
 offset is to be computed:

 {@snippet lang=java :
 MethodHandle offsetHandle = TAGGED_VALUES.byteOffsetHandle(PathElement.sequenceElement(),
                                                           PathElement.groupElement("kind"));
 long offset1 = (long) offsetHandle.invokeExact(0L, 1L); // 0 + (1 * 8) = 8
 long offset2 = (long) offsetHandle.invokeExact(0L, 2L); // 0 + (2 * 8) = 16
 }

 Dereference path elements

 A special kind of path element, called dereference path element, allows var
 handles obtained from memory layouts to follow pointers. Consider the following layout:

 {@snippet lang=java :
 StructLayout RECTANGLE = MemoryLayout.structLayout(
         ValueLayout.ADDRESS.withTargetLayout(
                 MemoryLayout.sequenceLayout(4,
                         MemoryLayout.structLayout(
                                 ValueLayout.JAVA_INT.withName("x"),
                                 ValueLayout.JAVA_INT.withName("y")
                         ).withName("point")
                  )
          ).withName("points")
 );
 }

 This layout is a struct layout describing a rectangle. It contains a single field,
 namely `points`, an address layout whose
 `targetLayout() target layout` is a sequence layout of four
 struct layouts. Each struct layout describes a two-dimensional point, and is defined
 as a pair or `JAVA_INT` coordinates, with names `x` and
 `y`, respectively.
 

 With dereference path elements, we can obtain a var handle that accesses the `y` coordinate of one of the
 point in the rectangle, as follows:

 {@snippet lang=java :
 VarHandle rectPointYs = RECTANGLE.varHandle(
         PathElement.groupElement("points"),
         PathElement.dereferenceElement(),
         PathElement.sequenceElement(),
         PathElement.groupElement("y")
 );

 MemorySegment rect = ...
 // dereferences the third point struct in the "points" array, and reads its "y" coordinate (rect.points[2]->y)
 int rect_y_2 = (int) rectPointYs.get(rect,
     0L,  // base offset
     2L); // sequence index
 }

 Layout path well-formedness

 A layout path is applied to a layout `C_0`, also called the
 initial layout. Each path element in a layout path can be thought of as a
 function that updates the current layout `C_i-1` to some other layout
 `C_i`. That is, for each path element `E1, E2, ... En`, in a layout path
 `P`, we compute `C_i = f_i(C_i-1)`, where `f_i` is the selection
 function associated with the path element under consideration, denoted as `E_i`.
 The final layout `C_i` is also called the selected layout.
 

 A layout path `P` is considered well-formed for an initial layout `C_0`
 if all its path elements `E1, E2, ... En` are well-formed for their
 corresponding input layouts `C_0, C_1, ... C_n-1`. A path element `E` is
 considered well-formed for a layout `L` if any of the following is true:
 
 
- `L` is a sequence layout and `E` is a sequence path element
 (one of `sequenceElement`, `sequenceElement`
 or `sequenceElement`). Moreover, if `E` contains one or
 more sequence indices, such indices have to be compatible with the sequence layout's
 element count;
 
- `L` is a group layout and `E` is a group path element (one of
 `groupElement` or `groupElement`).
 Moreover, the group path element must refer to a valid member layout in
 `L`, either by name, or index;
 
- `L` is an address layout and `E` is a `dereferenceElement()
 dereference path element`.
 Moreover, `L` must define some `targetLayout() target layout`.
 

 Any attempt to provide a layout path `P` that is not well-formed for an initial
 layout `C_0` will result in an `IllegalArgumentException`.

 Access mode restrictions

 A var handle returned by `varHandle` or
 `varHandle` features certain access characteristics, which are
 derived from the selected layout `L`:
 
 
- A carrier type `T`, derived from `L.carrier()`
 
- An alignment constraint `A`, derived from `L.byteAlignment()`
 
- An access size `S`, derived from `L.byteSize()`
 

 Depending on the above characteristics, the returned var handle might feature certain
 access mode restrictions. We say that a var handle is aligned if its
 alignment constraint `A` is compatible with the access size `S`, that is
 if `A >= S`. An aligned var handle is guaranteed to support the following
 access modes:
 
 
- read write access modes for all `T`.  Access modes `get` and
     `set` for `long`, `double` and `MemorySegment`
     are supported but have no atomicity guarantee, as described in Section
     {@jls 17.7} of The Java Language Specification.
 
- atomic update access modes for `int`, `long`,
     `float`, `double` and `MemorySegment`.
     (Future major platform releases of the JDK may support additional
     types for certain currently unsupported access modes.)
 
- numeric atomic update access modes for `int`, `long` and `MemorySegment`.
     (Future major platform releases of the JDK may support additional
     numeric types for certain currently unsupported access modes.)
 
- bitwise atomic update access modes for `int`, `long` and `MemorySegment`.
     (Future major platform releases of the JDK may support additional
     numeric types for certain currently unsupported access modes.)
 

 If `T` is `float`, `double` or `MemorySegment` then atomic
 update access modes compare values using their bitwise representation
 (see `floatToRawIntBits`, `doubleToRawLongBits`
 and `address`, respectively).
 

 Alternatively, a var handle is unaligned if its alignment constraint `A`
 is incompatible with the access size `S`, that is, if `A < S`. An
 unaligned var handle only supports the `get` and `set` access modes. All
 other access modes will result in `UnsupportedOperationException` being thrown.
 Moreover, while supported, access modes `get` and `set` might lead to
 word tearing.

 Working with variable-length arrays

 We have seen how sequence layouts are used to describe the contents of an array whose
 size is known statically. There are cases, however, where the array size is
 only known dynamically. We call such arrays variable-length arrays.
 There are two common kinds of variable-length arrays:
 
     
- a toplevel variable-length array whose size depends on the value of
     some unrelated variable, or parameter;
     
- an variable-length array nested in a struct, whose size depends on
     the value of some other field in the enclosing struct.
 

 While variable-length arrays cannot be modeled directly using sequence layouts,
 clients can still enjoy structured access to elements of variable-length arrays
 using var handles as demonstrated in the following sections.

 Toplevel variable-length arrays

 Consider the following struct declaration in C:

 {@snippet lang=c :
 typedef struct {
     int x;
     int y;
 } Point;
 }

 In the above code, a point is modeled as two coordinates (`x` and
 `y` respectively). Now consider the following snippet of C code:

 {@snippet lang=c :
 int size = ...
 Point *points = (Point*)malloc(sizeof(Point) * size);
 for (int i = 0 ; i < size ; i++) {
    ... points[i].x ...
 }
 }

 Here, we allocate an array of points (`points`). Crucially, the size of
 the array is dynamically bound to the value of the `size` variable. Inside
 the loop, the `x` coordinate of all the points in the array is accessed.
 

 To model this code in Java, let's start by defining a layout for the `Point`
 struct, as follows:

 {@snippet lang=java :
 StructLayout POINT = MemoryLayout.structLayout(
             ValueLayout.JAVA_INT.withName("x"),
             ValueLayout.JAVA_INT.withName("y")
 );
 }

 Since we know we need to create and access an array of points, it would be tempting to
 create a sequence layout modelling the variable-length array, and then derive the
 necessary access var handles from the sequence layout. But this approach is
 problematic, as the size of the variable-length array is not known. Instead, a
 var handle that provides structured access to the elements of a variable-length array
 can be obtained directly from the layout describing the array elements
 (e.g. the point layout), as demonstrated below:

 {@snippet lang=java :
 VarHandle POINT_ARR_X = POINT.arrayElementVarHandle(PathElement.groupElement("x"));

 int size = ...
 MemorySegment points = ...
 for (int i = 0 ; i < size ; i++) {
     ... POINT_ARR_X.get(points, 0L, (long)i) ...
 }
 }

 Here, the coordinate `x` of subsequent point in the array is accessed using the
 `POINT_ARR_X` var handle, which is obtained using the
 `arrayElementVarHandle` method. This var handle features two
 `long` coordinates: the first is a base offset (set to `0L`), while the
 second is a logical index that can be used to stride over all the elements of the
 point array.
 

 The base offset coordinate allows clients to express complex access operations, by
 injecting additional offset computation into the var handle (we will see an example
 of that below). In cases where the base offset is constant (as in the previous
 example) clients can, if desired, drop the base offset parameter and make the access
 expression simpler. This is achieved using the
 `insertCoordinates`
 var handle adapter.

 Nested variable-length arrays

 Consider the following struct declaration in C:

 {@snippet lang=c :
 typedef struct {
     int size;
     Point points[];
 } Polygon;
 }

 In the above code, a polygon is modeled as a size (the number of edges in the polygon)
 and an array of points (one for each vertex in the polygon). The number of vertices
 depends on the number of edges in the polygon. As such, the size of the `points`
 array is left unspecified in the C declaration, using a
 Flexible Array Member (a feature standardized in C99).
 

 Again, clients can perform structured access to elements in the nested variable-length
 array using the `arrayElementVarHandle` method, as demonstrated
 below:

 {@snippet lang=java :
 StructLayout POLYGON = MemoryLayout.structLayout(
             ValueLayout.JAVA_INT.withName("size"),
             MemoryLayout.sequenceLayout(0, POINT).withName("points")
 );

 VarHandle POLYGON_SIZE = POLYGON.varHandle(0, PathElement.groupElement("size"));
 long POINTS_OFFSET = POLYGON.byteOffset(PathElement.groupElement("points"));
 }

 The `POLYGON` layout contains a sequence layout of size zero. The
 element layout of the sequence layout is the `POINT` layout, shown previously.
 The polygon layout is used to obtain a var handle that provides access to the polygon
 size, as well as an offset (`POINTS_OFFSET`) to the start of the variable-length
 `points` array.
 

 The `x` coordinates of all the points in a polygon can then be accessed as
 follows:
 {@snippet lang=java :
 MemorySegment polygon = ...
 int size = POLYGON_SIZE.get(polygon, 0L);
 for (int i = 0 ; i < size ; i++) {
     ... POINT_ARR_X.get(polygon, POINTS_OFFSET, (long)i) ...
 }
  }
 Here, we first obtain the polygon size, using the `POLYGON_SIZE` var handle.
 Then, in a loop, we read the `x` coordinates of all the points in the polygon.
 This is done by providing a custom offset (namely, `POINTS_OFFSET`) to the
 offset coordinate of the `POINT_ARR_X` var handle. As before, the loop
 induction variable `i` is passed as the index of the `POINT_ARR_X`
 var handle, to stride over all the elements of the variable-length array.

 Implementations of this interface are immutable, thread-safe and
 value-based.

> *Since 22*
