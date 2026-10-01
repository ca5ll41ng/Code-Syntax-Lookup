---
id: "java-en-function-class-newinstance"
language: "java"
lang: "en"
category: "function"
name: "Class.newInstance"
signature: "public T newInstance() throws InstantiationException, IllegalAccessException"
title: "Class.newInstance"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.newInstance

```java
public T newInstance() throws InstantiationException, IllegalAccessException
```

Creates a new instance of the class represented by this `Class`
 object.  The class is instantiated as if by a `new`
 expression with an empty argument list.  The class is initialized if it
 has not already been initialized.

**返回**

- a newly allocated instance of the class represented by this object.

**异常**

- **IllegalAccessException** — if the class or its nullary constructor is not accessible.
- **InstantiationException** — if this `Class` represents an abstract class, an interface, an array class, a primitive type, or void; or if the class has no nullary constructor; or if the instantiation fails for some other reason.
- **ExceptionInInitializerError** — if the initialization provoked by this method fails.

> **⚠ Deprecated** — This method propagates any exception thrown by the nullary constructor, including a checked exception.  Use of this method effectively bypasses the compile-time exception checking that would otherwise be performed by the compiler. The `newInstance(java.lang.Object...) Constructor.newInstance` method avoids this problem by wrapping any exception thrown by the constructor in a (checked) `java.lang.reflect.InvocationTargetException`.    The call  {@snippet lang="java" : clazz.newInstance() }  can be replaced by  {@snippet lang="java" : clazz.getDeclaredConstructor().newInstance() }  The latter sequence of calls is inferred to be able to throw the additional exception types `InvocationTargetException` and `NoSuchMethodException`. Both of these exception types are subclasses of `ReflectiveOperationException`.
