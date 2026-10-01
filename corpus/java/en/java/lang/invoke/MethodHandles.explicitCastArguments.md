---
id: "java-en-function-methodhandles-explicitcastarguments"
language: "java"
lang: "en"
category: "function"
name: "MethodHandles.explicitCastArguments"
signature: "public static MethodHandle explicitCastArguments(MethodHandle target, MethodType newType)"
title: "MethodHandles.explicitCastArguments"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles.explicitCastArguments

```java
public static MethodHandle explicitCastArguments(MethodHandle target, MethodType newType)
```

Produces a method handle which adapts the type of the
 given method handle to a new type by pairwise argument and return type conversion.
 The original type and new type must have the same number of arguments.
 The resulting method handle is guaranteed to report a type
 which is equal to the desired new type.
 

 If the original type and new type are equal, returns target.
 

 The same conversions are allowed as for `asType MethodHandle.asType`,
 and some additional conversions are also applied if those conversions fail.
 Given types T0, T1, one of the following conversions is applied
 if possible, before or instead of any conversions done by `asType`:
 
 
- If T0 and T1 are references, and T1 is an interface type,
     then the value of type T0 is passed as a T1 without a cast.
     (This treatment of interfaces follows the usage of the bytecode verifier.)
 
- If T0 is boolean and T1 is another primitive,
     the boolean is converted to a byte value, 1 for true, 0 for false.
     (This treatment follows the usage of the bytecode verifier.)
 
- If T1 is boolean and T0 is another primitive,
     T0 is converted to byte via Java casting conversion (JLS {@jls 5.5}),
     and the low order bit of the result is tested, as if by `(x & 1) != 0`.
 
- If T0 and T1 are primitives other than boolean,
     then a Java casting conversion (JLS {@jls 5.5}) is applied.
     (Specifically, T0 will convert to T1 by
     widening and/or narrowing.)
 
- If T0 is a reference and T1 a primitive, an unboxing
     conversion will be applied at runtime, possibly followed
     by a Java casting conversion (JLS {@jls 5.5}) on the primitive value,
     possibly followed by a conversion from byte to boolean by testing
     the low-order bit.
 
- If T0 is a reference and T1 a primitive,
     and if the reference is null at runtime, a zero value is introduced.

**参数**

- **target** — the method handle to invoke after arguments are retyped
- **newType** — the expected type of the new method handle

**返回**

- a method handle which delegates to the target after performing any necessary argument conversions, and arranges for any necessary return value conversions

**异常**

- **NullPointerException** — if either argument is null
- **WrongMethodTypeException** — if the conversion cannot be made

**参见**

- MethodHandle#asType
