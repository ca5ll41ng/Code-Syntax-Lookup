---
id: "java-en-function-methodhandles-arrayelementsetter"
language: "java"
lang: "en"
category: "function"
name: "MethodHandles.arrayElementSetter"
signature: "public static MethodHandle arrayElementSetter(Class<?> arrayClass) throws IllegalArgumentException"
title: "MethodHandles.arrayElementSetter"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles.arrayElementSetter

```java
public static MethodHandle arrayElementSetter(Class<?> arrayClass) throws IllegalArgumentException
```

Produces a method handle giving write access to elements of an array,
 as if by the `astore` bytecode.
 The type of the method handle will have a void return type.
 Its last argument will be the array's element type.
 The first and second arguments will be the array type and int.

 

 When the returned method handle is invoked,
 the array reference and array index are checked.
 A `NullPointerException` will be thrown if the array reference
 is `null` and an `ArrayIndexOutOfBoundsException` will be
 thrown if the index is negative or if it is greater than or equal to
 the length of the array.

**参数**

- **arrayClass** — the class of an array

**返回**

- a method handle which can store values into the array type

**异常**

- **NullPointerException** — if the argument is null
- **IllegalArgumentException** — if arrayClass is not an array type
