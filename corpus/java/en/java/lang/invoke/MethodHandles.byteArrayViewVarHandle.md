---
id: "java-en-function-methodhandles-bytearrayviewvarhandle"
language: "java"
lang: "en"
category: "function"
name: "MethodHandles.byteArrayViewVarHandle"
signature: "public static VarHandle byteArrayViewVarHandle(Class<?> viewArrayClass, ByteOrder byteOrder) throws IllegalArgumentException"
title: "MethodHandles.byteArrayViewVarHandle"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles.byteArrayViewVarHandle

```java
public static VarHandle byteArrayViewVarHandle(Class<?> viewArrayClass, ByteOrder byteOrder) throws IllegalArgumentException
```

Produces a VarHandle giving access to elements of a `byte[]` array
 viewed as if it were a different primitive array type, such as
 `int[]` or `long[]`.
 The VarHandle's variable type is the component type of
 `viewArrayClass` and the list of coordinate types is
 `(byte[], int)`, where the `int` coordinate type
 corresponds to an argument that is an index into a `byte[]` array.
 The returned VarHandle accesses bytes at an index in a `byte[]`
 array, composing bytes to or from a value of the component type of
 `viewArrayClass` according to the given endianness.
 

 The supported component types (variables types) are `short`,
 `char`, `int`, `long`, `float` and
 `double`.
 

 Access of bytes at a given index will result in an
 `ArrayIndexOutOfBoundsException` if the index is less than `0`
 or greater than the `byte[]` array length minus the size (in bytes)
 of `T`.
 

 Only plain `GET get` and `SET set`
 access modes are supported by the returned var handle. For all other access modes, an
 `UnsupportedOperationException` will be thrown.

 consider using off-heap memory through
 `allocateDirect(int) direct byte buffers` or
 off-heap `java.lang.foreign.MemorySegment memory segments`,
 or memory segments backed by a
 `ofArray(long[]) `long[]``,
 for which stronger alignment guarantees can be made.

**参数**

- **viewArrayClass** — the view array class, with a component type of type `T`
- **byteOrder** — the endianness of the view array elements, as stored in the underlying `byte` array

**返回**

- a VarHandle giving access to elements of a `byte[]` array viewed as if elements corresponding to the components type of the view array class

**异常**

- **NullPointerException** — if viewArrayClass or byteOrder is null
- **IllegalArgumentException** — if viewArrayClass is not an array type
- **UnsupportedOperationException** — if the component type of viewArrayClass is not supported as a variable type

> *Since 9*
