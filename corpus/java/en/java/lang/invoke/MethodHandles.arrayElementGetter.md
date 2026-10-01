---
id: "java-en-function-methodhandles-arrayelementgetter"
language: "java"
lang: "en"
category: "function"
name: "MethodHandles.arrayElementGetter"
signature: "public static MethodHandle arrayElementGetter(Class<?> arrayClass) throws IllegalArgumentException"
title: "MethodHandles.arrayElementGetter"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles.arrayElementGetter

```java
public static MethodHandle arrayElementGetter(Class<?> arrayClass) throws IllegalArgumentException
```

Produces a method handle giving read access to elements of an array,
 as if by the `aaload` bytecode.
 The type of the method handle will have a return type of the array's
 element type.  Its first argument will be the array type,
 and the second will be `int`.

 

 When the returned method handle is invoked,
 the array reference and array index are checked.
 A `NullPointerException` will be thrown if the array reference
 is `null` and an `ArrayIndexOutOfBoundsException` will be
 thrown if the index is negative or if it is greater than or equal to
 the length of the array.

**参数**

- **arrayClass** — an array type

**返回**

- a method handle which can load values from the given array type

**异常**

- **NullPointerException** — if the argument is null
- **IllegalArgumentException** — if arrayClass is not an array type
