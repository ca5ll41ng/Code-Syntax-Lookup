---
id: "java-en-function-javax-management-openmbean-arraytype"
language: "java"
lang: "en"
category: "function"
name: "javax.management.openmbean.ArrayType"
title: "ArrayType"
directive: "type"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/ArrayType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ArrayType

The `ArrayType` class is the open type class whose instances describe
 all open data values which are n-dimensional arrays of open data values.
 

 Examples of valid `ArrayType` instances are:
 
```
`// 2-dimension array of java.lang.String
 ArrayType a1 = new ArrayType(2, SimpleType.STRING);

 // 1-dimension array of int
 ArrayType a2 = new ArrayType(SimpleType.INTEGER, true);

 // 1-dimension array of java.lang.Integer
 ArrayType a3 = new ArrayType(SimpleType.INTEGER, false);

 // 4-dimension array of int
 ArrayType a4 = new ArrayType(3, a2);

 // 4-dimension array of java.lang.Integer
 ArrayType a5 = new ArrayType(3, a3);

 // 1-dimension array of java.lang.String
 ArrayType a6 = new ArrayType(SimpleType.STRING, false);

 // 1-dimension array of long
 ArrayType a7 = new ArrayType(SimpleType.LONG, true);

 // 1-dimension array of java.lang.Integer
 ArrayType a8 = ArrayType.getArrayType(SimpleType.INTEGER);

 // 2-dimension array of java.lang.Integer
 ArrayType a9 = ArrayType.getArrayType(a8);

 // 2-dimension array of int
 ArrayType a10 = ArrayType.getPrimitiveArrayType(int[][].class);

 // 3-dimension array of int
 ArrayType a11 = ArrayType.getArrayType(a10);

 // 1-dimension array of float
 ArrayType a12 = ArrayType.getPrimitiveArrayType(float[].class);

 // 2-dimension array of float
 ArrayType a13 = ArrayType.getArrayType(a12);

 // 1-dimension array of javax.management.ObjectName
 ArrayType a14 = ArrayType.getArrayType(SimpleType.OBJECTNAME);

 // 2-dimension array of javax.management.ObjectName
 ArrayType a15 = ArrayType.getArrayType(a14);

 // 3-dimension array of java.lang.String
 ArrayType a16 = new ArrayType(3, SimpleType.STRING);

 // 1-dimension array of java.lang.String
 ArrayType a17 = new ArrayType(1, SimpleType.STRING);

 // 2-dimension array of java.lang.String
 ArrayType a18 = new ArrayType(1, a17);

 // 3-dimension array of java.lang.String
 ArrayType a19 = new ArrayType(1, a18);
 `
```

**参数**

- **the** — Java component type that arrays described by this ArrayType must have.

> *Since 1.5*
