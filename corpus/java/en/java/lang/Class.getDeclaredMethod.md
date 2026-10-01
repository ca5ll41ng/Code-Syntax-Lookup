---
id: "java-en-function-class-getdeclaredmethod"
language: "java"
lang: "en"
category: "function"
name: "Class.getDeclaredMethod"
signature: "public Method getDeclaredMethod(String name, Class<?>... parameterTypes) throws NoSuchMethodException"
title: "Class.getDeclaredMethod"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.getDeclaredMethod

```java
public Method getDeclaredMethod(String name, Class<?>... parameterTypes) throws NoSuchMethodException
```

Returns a `Method` object that reflects the specified
 declared method of the class or interface represented by this
 `Class` object. The `name` parameter is a
 `String` that specifies the simple name of the desired
 method, and the `parameterTypes` parameter is an array of
 `Class` objects that identify the method's formal parameter
 types, in declared order.  If more than one method with the same
 parameter types is declared in a class, and one of these methods has a
 return type that is more specific than any of the others, that method is
 returned; otherwise one of the methods is chosen arbitrarily.  If the
 name is `ConstantDescs#INIT_NAME` or `ConstantDescs#CLASS_INIT_NAME` a `NoSuchMethodException`
 is raised.

 

 If this `Class` object represents an array type, then this
 method does not find the `clone()` method.

**参数**

- **name** — the name of the method
- **parameterTypes** — the parameter array, may be `null`

**返回**

- the `Method` object for the method of this class matching the specified name and parameters

**异常**

- **NoSuchMethodException** — if a matching method is not found, if `parameterTypes` contains `null`, or if the name is `ConstantDescs#INIT_NAME` or `ConstantDescs#CLASS_INIT_NAME`

> *Since 1.1*
