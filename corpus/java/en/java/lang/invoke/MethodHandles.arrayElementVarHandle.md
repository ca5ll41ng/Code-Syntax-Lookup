---
id: "java-en-function-methodhandles-arrayelementvarhandle"
language: "java"
lang: "en"
category: "function"
name: "MethodHandles.arrayElementVarHandle"
signature: "public static VarHandle arrayElementVarHandle(Class<?> arrayClass) throws IllegalArgumentException"
title: "MethodHandles.arrayElementVarHandle"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles.arrayElementVarHandle

```java
public static VarHandle arrayElementVarHandle(Class<?> arrayClass) throws IllegalArgumentException
```

Produces a VarHandle giving access to elements of an array of type
 `arrayClass`.  The VarHandle's variable type is the component type
 of `arrayClass` and the list of coordinate types is
 `(arrayClass, int)`, where the `int` coordinate type
 corresponds to an argument that is an index into an array.
 

 Certain access modes of the returned VarHandle are unsupported under
 the following conditions:
 
 
- if the component type is anything other than `byte`,
     `short`, `char`, `int`, `long`,
     `float`, or `double` then numeric atomic update access
     modes are unsupported.
 
- if the component type is anything other than `boolean`,
     `byte`, `short`, `char`, `int` or
     `long` then bitwise atomic update access modes are
     unsupported.
 

 

 If the component type is `float` or `double` then numeric
 and atomic update access modes compare values using their bitwise
 representation (see `floatToRawIntBits` and
 `doubleToRawLongBits`, respectively).

 

 When the returned `VarHandle` is invoked,
 the array reference and array index are checked.
 A `NullPointerException` will be thrown if the array reference
 is `null` and an `ArrayIndexOutOfBoundsException` will be
 thrown if the index is negative or if it is greater than or equal to
 the length of the array.

 Bitwise comparison of `float` values or `double` values,
 as performed by the numeric and atomic update access modes, differ
 from the primitive `==` operator and the `equals`
 and `equals` methods, specifically with respect to
 comparing NaN values or comparing `-0.0` with `+0.0`.
 Care should be taken when performing a compare and set or a compare
 and exchange operation with such values since the operation may
 unexpectedly fail.
 There are many possible NaN values that are considered to be
 `NaN` in Java, although no IEEE 754 floating-point operation
 provided by Java can distinguish between them.  Operation failure can
 occur if the expected or witness value is a NaN value and it is
 transformed (perhaps in a platform specific manner) into another NaN
 value, and thus has a different bitwise representation (see
 `intBitsToFloat` or `longBitsToDouble` for more
 details).
 The values `-0.0` and `+0.0` have different bitwise
 representations but are considered equal when using the primitive
 `==` operator.  Operation failure can occur if, for example, a
 numeric algorithm computes an expected value to be say `-0.0`
 and previously computed the witness value to be say `+0.0`.

**参数**

- **arrayClass** — the class of an array, of type `T[]`

**返回**

- a VarHandle giving access to elements of an array

**异常**

- **NullPointerException** — if the arrayClass is null
- **IllegalArgumentException** — if arrayClass is not an array type

> *Since 9*
