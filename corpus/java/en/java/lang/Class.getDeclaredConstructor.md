---
id: "java-en-function-class-getdeclaredconstructor"
language: "java"
lang: "en"
category: "function"
name: "Class.getDeclaredConstructor"
signature: "public Constructor<T> getDeclaredConstructor(Class<?>... parameterTypes) throws NoSuchMethodException"
title: "Class.getDeclaredConstructor"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.getDeclaredConstructor

```java
public Constructor<T> getDeclaredConstructor(Class<?>... parameterTypes) throws NoSuchMethodException
```

Returns a `Constructor` object that reflects the specified
 constructor of the class represented by this
 `Class` object.  The `parameterTypes` parameter is
 an array of `Class` objects that identify the constructor's
 formal parameter types, in declared order.

 If this `Class` object represents an inner class
 declared in a non-static context, the formal parameter types
 include the explicit enclosing instance as the first parameter.

**参数**

- **parameterTypes** — the parameter array, may be `null`

**返回**

- The `Constructor` object for the constructor with the specified parameter list

**异常**

- **NoSuchMethodException** — if a matching constructor is not found, if this `Class` object represents an interface, a primitive type, an array class, or void, or if `parameterTypes` contains `null`

**参见**

- #getConstructor(Class[])

> *Since 1.1*
