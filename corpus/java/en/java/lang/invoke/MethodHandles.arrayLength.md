---
id: "java-en-function-methodhandles-arraylength"
language: "java"
lang: "en"
category: "function"
name: "MethodHandles.arrayLength"
signature: "public static MethodHandle arrayLength(Class<?> arrayClass) throws IllegalArgumentException"
title: "MethodHandles.arrayLength"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles.arrayLength

```java
public static MethodHandle arrayLength(Class<?> arrayClass) throws IllegalArgumentException
```

Produces a method handle returning the length of an array,
 as if by the `arraylength` bytecode.
 The type of the method handle will have `int` as return type,
 and its sole argument will be the array type.

 

 If the returned method handle is invoked with a `null`
 array reference, a `NullPointerException` will be thrown.

**参数**

- **arrayClass** — an array type

**返回**

- a method handle which can retrieve the length of an array of the given array type

**异常**

- **NullPointerException** — if the argument is `null`
- **IllegalArgumentException** — if arrayClass is not an array type

> *Since 9*
