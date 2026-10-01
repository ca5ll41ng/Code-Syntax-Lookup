---
id: "java-en-function-arraytype-getarraytype"
language: "java"
lang: "en"
category: "function"
name: "ArrayType.getArrayType"
signature: "public static <E> ArrayType<E[]> getArrayType(OpenType<E> elementType) throws OpenDataException"
title: "ArrayType.getArrayType"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/ArrayType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ArrayType.getArrayType

```java
public static <E> ArrayType<E[]> getArrayType(OpenType<E> elementType) throws OpenDataException
```

Create an `ArrayType` instance in a type-safe manner.
 

 Multidimensional arrays can be built up by calling this method as many
 times as necessary.
 

 Calling this method twice with the same parameters may return the same
 object or two equal but not identical objects.
 

 As an example, the following piece of code:
 
```
`ArrayType t1 = ArrayType.getArrayType(SimpleType.STRING);
 ArrayType t2 = ArrayType.getArrayType(t1);
 ArrayType t3 = ArrayType.getArrayType(t2);
 System.out.println("array class name       = " + t3.getClassName());
 System.out.println("element class name     = " + t3.getElementOpenType().getClassName());
 System.out.println("array type name        = " + t3.getTypeName());
 System.out.println("array type description = " + t3.getDescription());
 `
```

 would produce the following output:
 
```
`array class name       = [[[Ljava.lang.String;
 element class name     = java.lang.String
 array type name        = [[[Ljava.lang.String;
 array type description = 3-dimension array of java.lang.String
 `
```

**参数**

- **the** — Java type that described instances must have
- **elementType** — the open type of element values contained in the arrays described by this `ArrayType` instance; must be an instance of either `SimpleType`, `CompositeType`, `TabularType` or another `ArrayType` with a `SimpleType`, `CompositeType` or `TabularType` as its `elementType`.

**返回**

- an `ArrayType` instance

**异常**

- **OpenDataException** — if elementType's className is not one of the allowed Java class names for open data.

> *Since 1.6*
