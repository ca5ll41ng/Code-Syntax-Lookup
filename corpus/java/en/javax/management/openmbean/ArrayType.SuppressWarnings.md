---
id: "java-en-function-arraytype-suppresswarnings"
language: "java"
lang: "en"
category: "function"
name: "ArrayType.SuppressWarnings"
signature: "@SuppressWarnings(\"unchecked\") // can't get appropriate T for primitive array public static <T> ArrayType<T> getPrimitiveArrayType(Class<T> arrayClass)"
title: "ArrayType.SuppressWarnings"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/ArrayType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ArrayType.SuppressWarnings

```java
@SuppressWarnings("unchecked") // can't get appropriate T for primitive array public static <T> ArrayType<T> getPrimitiveArrayType(Class<T> arrayClass)
```

Create an `ArrayType` instance in a type-safe manner.
 

 Calling this method twice with the same parameters may return the
 same object or two equal but not identical objects.
 

 As an example, the following piece of code:
 
```
`ArrayType t = ArrayType.getPrimitiveArrayType(int[][][].class);
 System.out.println("array class name       = " + t.getClassName());
 System.out.println("element class name     = " + t.getElementOpenType().getClassName());
 System.out.println("array type name        = " + t.getTypeName());
 System.out.println("array type description = " + t.getDescription());
 `
```

 would produce the following output:
 
```
`array class name       = [[[I
 element class name     = java.lang.Integer
 array type name        = [[[I
 array type description = 3-dimension array of int
 `
```

**参数**

- **the** — Java type that described instances must have
- **arrayClass** — a primitive array class such as `int[].class`, `boolean[][].class`, etc. The `getElementOpenType` method of the returned `ArrayType` returns the `SimpleType` corresponding to the wrapper type of the primitive type of the array.

**返回**

- an `ArrayType` instance

**异常**

- **IllegalArgumentException** — if arrayClass is not a primitive array.

> *Since 1.6*
