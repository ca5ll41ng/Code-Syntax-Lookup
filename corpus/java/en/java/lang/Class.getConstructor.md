---
id: "java-en-function-class-getconstructor"
language: "java"
lang: "en"
category: "function"
name: "Class.getConstructor"
signature: "public Constructor<T> getConstructor(Class<?>... parameterTypes) throws NoSuchMethodException"
title: "Class.getConstructor"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.getConstructor

```java
public Constructor<T> getConstructor(Class<?>... parameterTypes) throws NoSuchMethodException
```

Returns a `Constructor` object that reflects the specified
 public constructor of the class represented by this `Class`
 object. The `parameterTypes` parameter is an array of
 `Class` objects that identify the constructor's formal
 parameter types, in declared order.

 If this `Class` object represents an inner class
 declared in a non-static context, the formal parameter types
 include the explicit enclosing instance as the first parameter.

 

 The constructor to reflect is the public constructor of the class
 represented by this `Class` object whose formal parameter
 types match those specified by `parameterTypes`.

**参数**

- **parameterTypes** — the parameter array, may be `null`

**返回**

- the `Constructor` object of the public constructor that matches the specified `parameterTypes`

**异常**

- **NoSuchMethodException** — if a matching constructor is not found, if this `Class` object represents an interface, a primitive type, an array class, or void, or if `parameterTypes` contains `null`

**参见**

- #getDeclaredConstructor(Class[])

> *Since 1.1*
