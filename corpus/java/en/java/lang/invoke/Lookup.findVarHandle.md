---
id: "java-en-function-lookup-findvarhandle"
language: "java"
lang: "en"
category: "function"
name: "Lookup.findVarHandle"
signature: "public VarHandle findVarHandle(Class<?> recv, String name, Class<?> type) throws NoSuchFieldException, IllegalAccessException"
title: "Lookup.findVarHandle"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Lookup.findVarHandle

```java
public VarHandle findVarHandle(Class<?> recv, String name, Class<?> type) throws NoSuchFieldException, IllegalAccessException
```

Produces a VarHandle giving access to a non-static field `name`
 of type `type` declared in a class of type `recv`.
 The VarHandle's variable type is `type` and it has one
 coordinate type, `recv`.
 

 Access checking is performed immediately on behalf of the lookup
 class.
 

 Certain access modes of the returned VarHandle are unsupported under
 the following conditions:
 
 
- if the field is declared `final`, then the write, atomic
     update, numeric atomic update, and bitwise atomic update access
     modes are unsupported.
 
- if the field type is anything other than `byte`,
     `short`, `char`, `int`, `long`,
     `float`, or `double` then numeric atomic update
     access modes are unsupported.
 
- if the field type is anything other than `boolean`,
     `byte`, `short`, `char`, `int` or
     `long` then bitwise atomic update access modes are
     unsupported.
 

 

 If the field is declared `volatile` then the returned VarHandle
 will override access to the field (effectively ignore the
 `volatile` declaration) in accordance to its specified
 access modes.
 

 If the field type is `float` or `double` then numeric
 and atomic update access modes compare values using their bitwise
 representation (see `floatToRawIntBits` and
 `doubleToRawLongBits`, respectively).
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

- **recv** — the receiver class, of type `R`, that declares the non-static field
- **name** — the field's name
- **type** — the field's type, of type `T`

**返回**

- a VarHandle giving access to non-static fields.

**异常**

- **NoSuchFieldException** — if the field does not exist
- **IllegalAccessException** — if access checking fails, or if the field is `static`
- **NullPointerException** — if any argument is null

> *Since 9*
