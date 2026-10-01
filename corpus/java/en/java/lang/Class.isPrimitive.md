---
id: "java-en-function-class-isprimitive"
language: "java"
lang: "en"
category: "function"
name: "Class.isPrimitive"
signature: "public boolean isPrimitive()"
title: "Class.isPrimitive"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.isPrimitive

```java
public boolean isPrimitive()
```

Determines if this `Class` object represents a primitive
 type or void.

 

 There are nine predefined `Class` objects to
 represent the eight primitive types and void.  These are
 created by the Java Virtual Machine, and have the same
 `getName() names` as the primitive types that they
 represent, namely `boolean`, `byte`, `char`,
 `short`, `int`, `long`, `float`, and
 `double`.

 

No other class objects are considered primitive.

 A `Class` object represented by a primitive type can be
 accessed via the `TYPE` public static final variables
 defined in the primitive wrapper classes such as `TYPE Integer.TYPE`. In the Java programming
 language, the objects may be referred to by a class literal
 expression such as `int.class`.  The `Class` object
 for void can be expressed as `void.class` or `TYPE Void.TYPE`.

**返回**

- true if and only if this class represents a primitive type

**参见**

- java.lang.Boolean#TYPE
- java.lang.Character#TYPE
- java.lang.Byte#TYPE
- java.lang.Short#TYPE
- java.lang.Integer#TYPE
- java.lang.Long#TYPE
- java.lang.Float#TYPE
- java.lang.Double#TYPE
- java.lang.Void#TYPE

> *Since 1.1*
