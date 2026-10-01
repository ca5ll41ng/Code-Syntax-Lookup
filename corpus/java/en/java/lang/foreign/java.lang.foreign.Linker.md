---
id: "java-en-function-java-lang-foreign-linker"
language: "java"
lang: "en"
category: "function"
name: "java.lang.foreign.Linker"
title: "Linker"
directive: "type"
module: "java.base/java.lang.foreign"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/foreign/Linker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Linker

A linker provides access to foreign functions from Java code, and access to Java code
 from foreign functions.
 

 Foreign functions typically reside in libraries that can be loaded on demand. Each
 library conforms to a specific ABI (Application Binary Interface). An ABI is a set of
 calling conventions and data types associated with the compiler, OS, and processor where
 the library was built. For example, a C compiler on Linux/x64 usually builds libraries
 that conform to the SystemV ABI.
 

 A linker has detailed knowledge of the calling conventions and data types used by a
 specific ABI. For any library that conforms to that ABI, the linker can mediate
 between Java code running in the JVM and foreign functions in the library. In
 particular:
 
 
- A linker allows Java code to link against foreign functions, via
 `downcallHandle(MemorySegment, FunctionDescriptor, Option...) downcall method handles`;
 and
 
- A linker allows foreign functions to call Java method handles, via the generation
 of `upcallStub(MethodHandle, FunctionDescriptor, Arena, Option...) upcall stubs`.
 

 A linker provides a way to look up the canonical layouts associated with the
 data types used by the ABI. For example, a linker implementing the C ABI might choose
 to provide a canonical layout for the C `size_t` type. On 64-bit platforms,
 this canonical layout might be equal to `JAVA_LONG`. The canonical
 layouts supported by a linker are exposed via the `canonicalLayouts` method,
 which returns a map from type names to canonical layouts.
 

 In addition, a linker provides a way to look up foreign functions in libraries that
 conform to the ABI. Each linker chooses a set of libraries that are commonly used on
 the OS and processor combination associated with the ABI. For example, a linker for
 Linux/x64 might choose two libraries: `libc` and `libm`. The functions in
 these libraries are exposed via a `defaultLookup() symbol lookup`.

 Calling native functions

 The `nativeLinker() native linker` can be used to link against functions
 defined in C libraries (native functions). Suppose we wish to downcall from Java to
 the `strlen` function defined in the standard C library:
 {@snippet lang = c:
 size_t strlen(const char *s);
 }
 A downcall method handle that exposes `strlen` is obtained, using the native
 linker, as follows:

 {@snippet lang = java:
 Linker linker = Linker.nativeLinker();
 MethodHandle strlen = linker.downcallHandle(
     linker.defaultLookup().findOrThrow("strlen"),
     FunctionDescriptor.of(JAVA_LONG, ADDRESS)
 );
 }

 Note how the native linker also provides access, via its `defaultLookup() default lookup`,
 to the native functions defined by the C libraries loaded with the Java runtime.
 Above, the default lookup is used to search the address of the `strlen` native
 function. That address is then passed, along with a platform-dependent description
 of the signature of the function expressed as a `FunctionDescriptor` (more on
 that below) to the native linker's `downcallHandle`
 method. The obtained downcall method handle is then invoked as follows:

 {@snippet lang = java:
 try (Arena arena = Arena.ofConfined()) {
     MemorySegment str = arena.allocateFrom("Hello");
     long len = (long) strlen.invokeExact(str);  // 5
 }
}
 Describing C signatures

 When interacting with the native linker, clients must provide a platform-dependent
 description of the signature of the C function they wish to link against. This
 description, a `FunctionDescriptor function descriptor`, defines the layouts
 associated with the parameter types and return type (if any) of the C function.
 

 Scalar C types such as `bool`, `int` are modeled as
 `ValueLayout value layouts` of a suitable carrier. The
 `canonicalLayouts() mapping` between a scalar type and its corresponding
 canonical layout is dependent on the ABI implemented by the native linker (see below).
 

 Composite types are modeled as `GroupLayout group layouts`. More
 specifically, a C `struct` type maps to a `StructLayout struct layout`,
 whereas a C `union` type maps to a `UnionLayout union layout`. When defining
 a struct or union layout, clients must pay attention to the size and alignment constraint
 of the corresponding composite type definition in C. For instance, padding between two
 struct fields must be modeled explicitly, by adding an adequately sized
 `PaddingLayout padding layout` member to the resulting struct layout.
 

 Finally, pointer types such as `int**` and `int(*)(size_t*, size_t*)`
 are modeled as `AddressLayout address layouts`. When the spatial bounds of
 the pointer type are known statically, the address layout can be associated with a
 `targetLayout() target layout`. For instance, a pointer that
 is known to point to a C `int[2]` array can be modeled as an address layout
 whose target layout is a sequence layout whose element count is 2, and whose
 element type is `JAVA_INT`.
 

 All native linker implementations are guaranteed to provide canonical layouts for the
 following set of types:
 
     
- `bool`
     
- `char`
     
- `short`
     
- `int`
     
- `long`
     
- `long long`
     
- `float`
     
- `double`
     
- `size_t`
     
- `wchar_t`
     
- `void*`
 

 As noted above, the specific canonical layout associated with each type can vary,
 depending on the data model supported by a given ABI. For instance, the C type
 `long` maps to the layout constant `JAVA_LONG` on Linux/x64,
 but maps to the layout constant `JAVA_INT` on Windows/x64.
 Similarly, the C type `size_t` maps to the layout constant
 `JAVA_LONG` on 64-bit platforms, but maps to the layout constant
 `JAVA_INT` on 32-bit platforms.
 

 A native linker typically does not provide canonical layouts for C's unsigned integral
 types. Instead, they are modeled using the canonical layouts associated with their
 corresponding signed integral types. For instance, the C type `unsigned long`
 maps to the layout constant `JAVA_LONG` on Linux/x64, but maps to
 the layout constant `JAVA_INT` on Windows/x64.
 

 The following table shows some examples of how C types are modeled in Linux/x64
 according to the "System V Application Binary Interface"
 (all the examples provided here will assume these platform-dependent mappings):

 
 Mapping C types
 
 
     C type
     Layout
     Java type
 
 
 
 `bool`
     `JAVA_BOOLEAN`
     `boolean`
 `char` 
 `unsigned char`
     `JAVA_BYTE`
     `byte`
 `short` 
 `unsigned short`
     `JAVA_SHORT`
     `short`
 `int` 
 `unsigned int`
     `JAVA_INT`
     `int`
 `long` 
 `unsigned long`
     `JAVA_LONG`
     `long`
 `long long` 
 `unsigned long long`
     `JAVA_LONG`
     `long`
 `float`
     `JAVA_FLOAT`
     `float`
 `double`
     `JAVA_DOUBLE`
     `double`
 `size_t`
     `JAVA_LONG`
     `long`
 `char*`, `int**`, `struct Point*`
     `ADDRESS`
     `MemorySegment`
 `int (*ptr)[10]`
     
 
```

 ValueLayout.ADDRESS.withTargetLayout(
     MemoryLayout.sequenceLayout(10,
         ValueLayout.JAVA_INT)
 );
 
```

     `MemorySegment`
 struct Point { int x; long y; };
     
 
```

 MemoryLayout.structLayout(
     ValueLayout.JAVA_INT.withName("x"),
     MemoryLayout.paddingLayout(4),
     ValueLayout.JAVA_LONG.withName("y")
 );
 
```

     
     `MemorySegment`
 union Choice { float a; int b; }
     
 
```

 MemoryLayout.unionLayout(
     ValueLayout.JAVA_FLOAT.withName("a"),
     ValueLayout.JAVA_INT.withName("b")
 );
 
```

     
     `MemorySegment`
 
 
 

 A native linker only supports function descriptors whose argument/return layouts are
 well-formed layouts. More formally, a layout `L` is well-formed if:
 
 
- `L` is a value layout and `L` is derived from a canonical layout
     `C` such that `L.byteAlignment() <= C.byteAlignment()`
 
- `L` is a sequence layout `S` and all the following conditions hold:
 
 
- `L.byteAlignment()` is equal to the sequence layout's natural alignment
     , and
 
- `S.elementLayout()` is a well-formed layout.
 

 
 
- `L` is a group layout `G` and all the following conditions hold:
 
 
- `G.byteAlignment()` is equal to the group layout's natural alignment
 
- `G.byteSize()` is a multiple of `G.byteAlignment()`
 
- Each member layout in `G.memberLayouts()` is either a padding layout or a
     well-formed layout
 
- Each non-padding member layout `E` in `G.memberLayouts()` follows an
     optional padding member layout, whose size is the minimum size required to
     align `E`
 
- `G` contains an optional trailing padding member layout, whose size is the
     minimum size that satisfies (2)
 

 
 

 

 A function descriptor is well-formed if its argument and return layouts are
 well-formed and are not sequence layouts. A native linker is guaranteed to reject
 function descriptors that are not well-formed. However, a native linker can still
 reject well-formed function descriptors, according to platform-specific rules.
 For example, some native linkers may reject packed struct layouts -- struct
 layouts whose member layouts feature relaxed alignment constraints, to avoid
 the insertion of additional padding.

 Function pointers

 Sometimes, it is useful to pass Java code as a function pointer to some native
 function; this is achieved by using an
 `upcallStub(MethodHandle, FunctionDescriptor, Arena, Option...) upcall stub`.
 To demonstrate this, let's consider the following function from the C standard library:

 {@snippet lang = c:
 void qsort(void *base, size_t nmemb, size_t size,
            int (*compar)(const void *, const void *));
 }

 The `qsort` function can be used to sort the contents of an array, using a
 custom comparator function which is passed as a function pointer
 (the `compar` parameter). To be able to call the `qsort` function from
 Java, we must first create a downcall method handle for it, as follows:

 {@snippet lang = java:
 Linker linker = Linker.nativeLinker();
 MethodHandle qsort = linker.downcallHandle(
     linker.defaultLookup().findOrThrow("qsort"),
         FunctionDescriptor.ofVoid(ADDRESS, JAVA_LONG, JAVA_LONG, ADDRESS)
 );
 }

 As before, we use `JAVA_LONG` to map the C type `size_t` type,
 and `ADDRESS` for both the first pointer parameter (the array
 pointer) and the last parameter (the function pointer).
 

 To invoke the `qsort` downcall handle obtained above, we need a function pointer
 to be passed as the last parameter. That is, we need to create a function pointer out
 of an existing method handle. First, let's write a Java method that can compare two
 int elements passed as pointers (i.e. as `MemorySegment memory segments`):

 {@snippet lang = java:
 class Qsort {
     static int qsortCompare(MemorySegment elem1, MemorySegment elem2) {
         return Integer.compare(elem1.get(JAVA_INT, 0), elem2.get(JAVA_INT, 0));
     }
 }
 }

 Now let's create a method handle for the comparator method defined above:

 {@snippet lang = java:
 FunctionDescriptor comparDesc = FunctionDescriptor.of(JAVA_INT,
                                                       ADDRESS.withTargetLayout(JAVA_INT),
                                                       ADDRESS.withTargetLayout(JAVA_INT));
 MethodHandle comparHandle = MethodHandles.lookup()
                                          .findStatic(Qsort.class, "qsortCompare",
                                                      comparDesc.toMethodType());
 }

 First, we create a function descriptor for the function pointer type. Since we know
 that the parameters passed to the comparator method will be pointers to elements of
 a C `int[]` array, we can specify `JAVA_INT` as the target
 layout for the address layouts of both parameters. This will allow the comparator
 method to access the contents of the array elements to be compared. We then
 `toMethodType() turn` that function descriptor into
 a suitable `java.lang.invoke.MethodType method type` which we then use to
 look up the comparator method handle. We can now create an upcall stub that points to
 that method, and pass it, as a function pointer, to the `qsort` downcall handle,
 as follows:

 {@snippet lang = java:
 try (Arena arena = Arena.ofConfined()) {
     MemorySegment comparFunc = linker.upcallStub(comparHandle, comparDesc, arena);
     MemorySegment array = arena.allocateFrom(JAVA_INT, 0, 9, 3, 4, 6, 5, 1, 8, 2, 7);
     qsort.invokeExact(array, 10L, 4L, comparFunc);
     int[] sorted = array.toArray(JAVA_INT); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
 }
 }

 This code creates an off-heap array, copies the contents of a Java array into it, and
 then passes the array to the `qsort` method handle along with the comparator
 function we obtained from the native linker. After the invocation, the contents
 of the off-heap array will be sorted according to our comparator function, written in
 Java. We then extract a new Java array from the segment, which contains the sorted
 elements.

 Functions returning pointers

 When interacting with native functions, it is common for those functions to allocate
 a region of memory and return a pointer to that region. Let's consider the following
 function from the C standard library:

 {@snippet lang = c:
 void *malloc(size_t size);
 }

 The `malloc` function allocates a region of memory with the given size,
 and returns a pointer to that region of memory, which is later deallocated using
 another function from the C standard library:

 {@snippet lang = c:
 void free(void *ptr);
 }

 The `free` function takes a pointer to a region of memory and deallocates that
 region. In this section we will show how to interact with these native functions,
 with the aim of providing a safe allocation API (the approach outlined below
 can of course be generalized to allocation functions other than `malloc` and
 `free`).
 

 First, we need to create the downcall method handles for `malloc` and
 `free`, as follows:

 {@snippet lang = java:
 Linker linker = Linker.nativeLinker();

 MethodHandle malloc = linker.downcallHandle(
     linker.defaultLookup().findOrThrow("malloc"),
     FunctionDescriptor.of(ADDRESS, JAVA_LONG)
 );

 MethodHandle free = linker.downcallHandle(
     linker.defaultLookup().findOrThrow("free"),
     FunctionDescriptor.ofVoid(ADDRESS)
 );
 }

 When a native function returning a pointer (such as `malloc`) is invoked using
 a downcall method handle, the Java runtime has no insight into the size or the
 lifetime of the returned pointer. Consider the following code:

 {@snippet lang = java:
 MemorySegment segment = (MemorySegment)malloc.invokeExact(100);
 }

 The size of the segment returned by the `malloc` downcall method handle is
 zero. Moreover, the scope of the
 returned segment is the global scope. To provide safe access to the segment, we must,
 unsafely, resize the segment to the desired size (100, in this case). It might also
 be desirable to attach the segment to some existing `Arena arena`, so that
 the lifetime of the region of memory backing the segment can be managed automatically,
 as for any other native segment created directly from Java code. Both of these
 operations are accomplished using the restricted method
 `reinterpret`, as follows:

 {@snippet lang = java:
 MemorySegment allocateMemory(long byteSize, Arena arena) throws Throwable {
     MemorySegment segment = (MemorySegment) malloc.invokeExact(byteSize); // size = 0, scope = always alive
     return segment.reinterpret(byteSize, arena, s -> {
         try {
             free.invokeExact(s);
         } catch (Throwable e) {
             throw new RuntimeException(e);
         }
     });  // size = byteSize, scope = arena.scope()
 }
 }

 The `allocateMemory` method defined above accepts two parameters: a size and an
 arena. The method calls the `malloc` downcall method handle, and unsafely
 reinterprets the returned segment, by giving it a new size (the size passed to the
 `allocateMemory` method) and a new scope (the scope of the provided arena).
 The method also specifies a cleanup action to be executed when the provided
 arena is closed. Unsurprisingly, the cleanup action passes the segment to the
 `free` downcall method handle, to deallocate the underlying region of memory.
 We can use the `allocateMemory` method as follows:

 {@snippet lang = java:
 try (Arena arena = Arena.ofConfined()) {
     MemorySegment segment = allocateMemory(100, arena);
 } // 'free' called here
 }

 Note how the segment obtained from `allocateMemory` acts as any other segment
 managed by the confined arena. More specifically, the obtained segment has the desired
 size, can only be accessed by a single thread (the thread that created the confined
 arena), and its lifetime is tied to the surrounding try-with-resources block.

 Variadic functions

 Variadic functions are C functions that can accept a variable number and type of
 arguments. They are declared with a trailing ellipsis (`...`) at the end of the
 formal parameter list, such as: `void foo(int x, ...);`
 The arguments passed in place of the ellipsis are called variadic arguments.
 Variadic functions are, essentially, templates that can be specialized into
 multiple non-variadic functions by replacing the `...` with a list of
 variadic parameters of a fixed number and type.
 

 It should be noted that values passed as variadic arguments undergo default argument
 promotion in C. For instance, the following argument promotions are applied:
 
 
- `_Bool` -> `unsigned int`
 
- `[signed] char` -> `[signed] int`
 
- `[signed] short` -> `[signed] int`
 
- `float` -> `double`
 

 whereby the signed-ness of the source type corresponds to the signed-ness of the
 promoted type. The complete process of default argument promotion is described in the
 C specification. In effect, these promotions place limits on the types that can be
 used to replace the `...`, as the variadic parameters of the specialized form
 of a variadic function will always have a promoted type.
 

 The native linker only supports linking the specialized form of a variadic function.
 A variadic function in its specialized form can be linked using a function descriptor
 describing the specialized form. Additionally, the `firstVariadicArg`
 linker option must be provided to indicate the first variadic parameter in the
 parameter list. The corresponding argument layout (if any), and all following
 argument layouts in the specialized function descriptor, are called
 variadic argument layouts.
 

 The native linker does not automatically perform default argument promotions. However,
 since passing an argument of a non-promoted type as a variadic argument is not
 supported in C, the native linker will reject an attempt to link a specialized
 function descriptor with any variadic argument value layouts corresponding to a
 non-promoted C type. Since the size of the C `int` type is platform-specific,
 exactly which layouts will be rejected is platform-specific as well. As an example:
 on Linux/x64 the layouts corresponding to the C types `_Bool`,
 `(unsigned) char`, `(unsigned) short`, and `float` (among others),
 will be rejected by the linker. The `canonicalLayouts` method can be used to
 find which layout corresponds to a particular C type.
 

 A well-known variadic function is the `printf` function, defined in the
 C standard library:

 {@snippet lang = c:
 int printf(const char *format, ...);
 }

 This function takes a format string, and a number of additional arguments (the number
 of such arguments is dictated by the format string). Consider the following
 variadic call:

 {@snippet lang = c:
 printf("%d plus %d equals %d", 2, 2, 4);
 }

 To perform an equivalent call using a downcall method handle we must create a function
 descriptor which describes the specialized signature of the C function we want to
 call. This descriptor must include an additional layout for each variadic argument we
 intend to provide. In this case, the specialized signature of the C function is
 `(char*, int, int, int)` as the format string accepts three integer parameters.
 We then need to use a `firstVariadicArg(int) linker option`
 to specify the position of the first variadic layout in the provided function
 descriptor (starting from 0). In this case, since the first parameter is the format
 string (a non-variadic argument), the first variadic index needs to be set to 1, as
 follows:

 {@snippet lang = java:
 Linker linker = Linker.nativeLinker();
 MethodHandle printf = linker.downcallHandle(
     linker.defaultLookup().findOrThrow("printf"),
         FunctionDescriptor.of(JAVA_INT, ADDRESS, JAVA_INT, JAVA_INT, JAVA_INT),
         Linker.Option.firstVariadicArg(1) // first int is variadic
 );
 }

 We can then call the specialized downcall handle as usual:

 {@snippet lang = java:
 try (Arena arena = Arena.ofConfined()) {
     //prints "2 plus 2 equals 4"
     int res = (int)printf.invokeExact(arena.allocateFrom("%d plus %d equals %d"), 2, 2, 4);
 }
}

 Safety considerations

 Creating a downcall method handle is intrinsically unsafe. A symbol in a foreign
 library does not, in general, contain enough signature information (e.g. arity and
 types of foreign function parameters). As a consequence, the linker runtime cannot
 validate linkage requests. When a client interacts with a downcall method handle
 obtained through an invalid linkage request (e.g. by specifying a function descriptor
 featuring too many argument layouts), the result of such interaction is unspecified
 and can lead to JVM crashes.
 

 When an upcall stub is passed to a foreign function, a JVM crash might occur, if the
 foreign code casts the function pointer associated with the upcall stub to a type that
 is incompatible with the type of the upcall stub, and then attempts to invoke the
 function through the resulting function pointer. Moreover, if the method handle
 associated with an upcall stub returns a `MemorySegment memory segment`,
 clients must ensure that this address cannot become invalid after the upcall is
 completed. This can lead to unspecified behavior, and even JVM crashes, since an
 upcall is typically executed in the context of a downcall method handle invocation.

 Implementations of this interface are immutable, thread-safe.

> *Since 22*
