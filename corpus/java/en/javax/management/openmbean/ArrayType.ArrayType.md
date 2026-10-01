---
id: "java-en-function-arraytype-arraytype"
language: "java"
lang: "en"
category: "function"
name: "ArrayType.ArrayType"
signature: "public ArrayType(int dimension, OpenType<?> elementType) throws OpenDataException"
title: "ArrayType.ArrayType"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/ArrayType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ArrayType.ArrayType

```java
public ArrayType(int dimension, OpenType<?> elementType) throws OpenDataException
```

Constructs an `ArrayType` instance describing open data values which are
 arrays with dimension dimension of elements
 whose open type is elementType.
 

 When invoked on an `ArrayType` instance,
 the `getClassName() getClassName` method
 returns the class name of the array instances it describes
 (following the rules defined by the
 `getName() getName` method of `java.lang.Class`),
 not the class name of the array elements
 (which is returned by a call to `getElementOpenType().getClassName()`).
 

 The internal field corresponding to the type name of this
 `ArrayType` instance is also set to
 the class name of the array instances it describes.
 In other words, the methods `getClassName` and
 `getTypeName` return the same string value.
 The internal field corresponding to the description of this
 `ArrayType` instance is set to a string value
 which follows the following template:
 
 
- if non-primitive array: &lt;dimension&gt;-dimension array
     of &lt;element_class_name&gt;
 
- if primitive array: &lt;dimension&gt;-dimension array
     of &lt;primitive_type_of_the_element_class_name&gt;
 

 

 As an example, the following piece of code:
 
```
`ArrayType t = new ArrayType(3, SimpleType.STRING);
 System.out.println("array class name       = " + t.getClassName());
 System.out.println("element class name     = " + t.getElementOpenType().getClassName());
 System.out.println("array type name        = " + t.getTypeName());
 System.out.println("array type description = " + t.getDescription());
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

 And the following piece of code which is equivalent to the one listed
 above would also produce the same output:
 
```
`ArrayType t1 = new ArrayType(1, SimpleType.STRING);
 ArrayType t2 = new ArrayType(1, t1);
 ArrayType t3 = new ArrayType(1, t2);
 System.out.println("array class name       = " + t3.getClassName());
 System.out.println("element class name     = " + t3.getElementOpenType().getClassName());
 System.out.println("array type name        = " + t3.getTypeName());
 System.out.println("array type description = " + t3.getDescription());
 `
```

**参数**

- **dimension** — the dimension of arrays described by this `ArrayType` instance; must be greater than or equal to 1.
- **elementType** — the open type of element values contained in the arrays described by this `ArrayType` instance; must be an instance of either `SimpleType`, `CompositeType`, `TabularType` or another `ArrayType` with a `SimpleType`, `CompositeType` or `TabularType` as its `elementType`.

**异常**

- **IllegalArgumentException** — if `dimension` is not a positive integer.
- **OpenDataException** — if elementType's className is not one of the allowed Java class names for open data.
