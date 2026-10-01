---
id: "java-en-function-methodhandles-arrayconstructor"
language: "java"
lang: "en"
category: "function"
name: "MethodHandles.arrayConstructor"
signature: "public static MethodHandle arrayConstructor(Class<?> arrayClass) throws IllegalArgumentException"
title: "MethodHandles.arrayConstructor"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles.arrayConstructor

```java
public static MethodHandle arrayConstructor(Class<?> arrayClass) throws IllegalArgumentException
```

Produces a method handle constructing arrays of a desired type,
 as if by the `anewarray` bytecode.
 The return type of the method handle will be the array type.
 The type of its sole argument will be `int`, which specifies the size of the array.

 

 If the returned method handle is invoked with a negative
 array size, a `NegativeArraySizeException` will be thrown.

**参数**

- **arrayClass** — an array type

**返回**

- a method handle which can create arrays of the given type

**异常**

- **NullPointerException** — if the argument is `null`
- **IllegalArgumentException** — if `arrayClass` is not an array type

**参见**

- java.lang.reflect.Array#newInstance(Class, int)

> *Since 9*
