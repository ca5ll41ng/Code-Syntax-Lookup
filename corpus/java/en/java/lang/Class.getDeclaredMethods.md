---
id: "java-en-function-class-getdeclaredmethods"
language: "java"
lang: "en"
category: "function"
name: "Class.getDeclaredMethods"
signature: "public Method[] getDeclaredMethods()"
title: "Class.getDeclaredMethods"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.getDeclaredMethods

```java
public Method[] getDeclaredMethods()
```

Returns an array containing `Method` objects reflecting all the
 declared methods of the class or interface represented by this `Class` object, including public, protected, default (package)
 access, and private methods, but excluding inherited methods.
 The declared methods may include methods not in the
 source of the class or interface, including `isBridge bridge methods` and other `isSynthetic synthetic` methods added by compilers.

 

 If this `Class` object represents a class or interface that
 has multiple declared methods with the same name and parameter types,
 but different return types, then the returned array has a `Method`
 object for each such method.

 

 If this `Class` object represents a class or interface that
 has a class initialization method `ConstantDescs#CLASS_INIT_NAME`,
 then the returned array does not have a corresponding `Method` object.

 

 If this `Class` object represents a class or interface with no
 declared methods, then the returned array has length 0.

 

 If this `Class` object represents an array type, a primitive
 type, or void, then the returned array has length 0.

 

 The elements in the returned array are not sorted and are not in any
 particular order.

**返回**

- the array of `Method` objects representing all the declared methods of this class

**参见**

- Java programming language and JVM modeling in core reflection

> *Since 1.1*
