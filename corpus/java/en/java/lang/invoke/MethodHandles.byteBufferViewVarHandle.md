---
id: "java-en-function-methodhandles-bytebufferviewvarhandle"
language: "java"
lang: "en"
category: "function"
name: "MethodHandles.byteBufferViewVarHandle"
signature: "public static VarHandle byteBufferViewVarHandle(Class<?> viewArrayClass, ByteOrder byteOrder) throws IllegalArgumentException"
title: "MethodHandles.byteBufferViewVarHandle"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles.byteBufferViewVarHandle

```java
public static VarHandle byteBufferViewVarHandle(Class<?> viewArrayClass, ByteOrder byteOrder) throws IllegalArgumentException
```

Produces a VarHandle giving access to elements of a `ByteBuffer`
 viewed as if it were an array of elements of a different primitive
 component type to that of `byte`, such as `int[]` or
 `long[]`.
 The VarHandle's variable type is the component type of
 `viewArrayClass` and the list of coordinate types is
 `(ByteBuffer, int)`, where the `int` coordinate type
 corresponds to an argument that is an index into a `byte[]` array.
 The returned VarHandle accesses bytes at an index in a
 `ByteBuffer`, composing bytes to or from a value of the component
 type of `viewArrayClass` according to the given endianness.
 

 The supported component types (variables types) are `short`,
 `char`, `int`, `long`, `float` and
 `double`.
 

 Access will result in a `ReadOnlyBufferException` for anything
 other than the read access modes if the `ByteBuffer` is read-only.
 

 Access of bytes at a given index will result in an
 `IndexOutOfBoundsException` if the index is less than `0`
 or greater than the `ByteBuffer` limit minus the size (in bytes) of
 `T`.
 

 For heap byte buffers, access is always unaligned. As a result, only the plain
 `GET get`
 and `SET set` access modes are supported by the
 returned var handle. For all other access modes, an `IllegalStateException`
 will be thrown.
 

 For direct buffers only, access of bytes at an index may be aligned or misaligned for `T`,
 with respect to the underlying memory address, `A` say, associated
 with the `ByteBuffer` and index.
 If access is misaligned then access for anything other than the
 `get` and `set` access modes will result in an
 `IllegalStateException`.  In such cases atomic access is only
 guaranteed with respect to the largest power of two that divides the GCD
 of `A` and the size (in bytes) of `T`.
 If access is aligned then following access modes are supported and are
 guaranteed to support atomic access:
 
 
- read write access modes for all `T`.  Access modes `get`
     and `set` for `long` and `double` are supported but
     have no atomicity guarantee, as described in Section {@jls 17.7} of
     The Java Language Specification.
 
- atomic update access modes for `int`, `long`,
     `float` or `double`.
     (Future major platform releases of the JDK may support additional
     types for certain currently unsupported access modes.)
 
- numeric atomic update access modes for `int` and `long`.
     (Future major platform releases of the JDK may support additional
     numeric types for certain currently unsupported access modes.)
 
- bitwise atomic update access modes for `int` and `long`.
     (Future major platform releases of the JDK may support additional
     numeric types for certain currently unsupported access modes.)
 

 

 Misaligned access, and therefore atomicity guarantees, may be determined
 for a `ByteBuffer`, `bb` (direct or otherwise), an
 `index`, `T` and its corresponding boxed type,
 `T_BOX`, as follows:
 
```
`int sizeOfT = T_BOX.BYTES;  // size in bytes of T
 ByteBuffer bb = ...
 int misalignedAtIndex = bb.alignmentOffset(index, sizeOfT);
 boolean isMisaligned = misalignedAtIndex != 0;
 `
```

 

 If the variable type is `float` or `double` then atomic
 update access modes compare values using their bitwise representation
 (see `floatToRawIntBits` and
 `doubleToRawLongBits`, respectively).

**参数**

- **viewArrayClass** — the view array class, with a component type of type `T`
- **byteOrder** — the endianness of the view array elements, as stored in the underlying `ByteBuffer` (Note this overrides the endianness of a `ByteBuffer`)

**返回**

- a VarHandle giving access to elements of a `ByteBuffer` viewed as if elements corresponding to the components type of the view array class

**异常**

- **NullPointerException** — if viewArrayClass or byteOrder is null
- **IllegalArgumentException** — if viewArrayClass is not an array type
- **UnsupportedOperationException** — if the component type of viewArrayClass is not supported as a variable type

> *Since 9*
