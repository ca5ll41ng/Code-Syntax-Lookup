---
id: "java-en-function-arraytype-tostring"
language: "java"
lang: "en"
category: "function"
name: "ArrayType.toString"
signature: "public String toString()"
title: "ArrayType.toString"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/ArrayType.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ArrayType.toString

```java
public String toString()
```

Returns a string representation of this `ArrayType` instance.
 

 The string representation consists of the name of this class (i.e.
 `javax.management.openmbean.ArrayType`), the type name,
 the dimension, the elements' open type and the primitive array flag
 defined for this instance.
 

 As `ArrayType` instances are immutable, the
 string representation for this instance is calculated
 once, on the first call to `toString`, and
 then the same value is returned for subsequent calls.

**返回**

- a string representation of this `ArrayType` instance
