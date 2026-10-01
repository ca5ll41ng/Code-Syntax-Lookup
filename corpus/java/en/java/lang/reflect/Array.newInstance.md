---
id: "java-en-function-array-newinstance"
language: "java"
lang: "en"
category: "function"
name: "Array.newInstance"
signature: "public static Object newInstance(Class<?> componentType, int length) throws NegativeArraySizeException"
title: "Array.newInstance"
directive: "method"
module: "java.base/java.lang.reflect"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/reflect/Array.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Array.newInstance

```java
public static Object newInstance(Class<?> componentType, int length) throws NegativeArraySizeException
```

Creates a new array with the specified component type and
 length.
 Invoking this method is equivalent to creating an array
 as follows:
 
 `Array.newInstance(componentType, new int[]{length`);}
 

 

The number of dimensions of the new array must not
 exceed 255.

**参数**

- **componentType** — the `Class` object representing the component type of the new array
- **length** — the length of the new array

**返回**

- the new array

**异常**

- **NullPointerException** — if the specified `componentType` parameter is null
- **IllegalArgumentException** — if componentType is `TYPE` or if the number of dimensions of the requested array instance exceed 255.
- **NegativeArraySizeException** — if the specified `length` is negative
