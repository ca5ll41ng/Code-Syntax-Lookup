---
id: "java-en-function-classloader-findclass"
language: "java"
lang: "en"
category: "function"
name: "ClassLoader.findClass"
signature: "protected Class<?> findClass(String name) throws ClassNotFoundException"
title: "ClassLoader.findClass"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassLoader.findClass

```java
protected Class<?> findClass(String name) throws ClassNotFoundException
```

Finds the class with the specified binary name.
 This method should be overridden by class loader implementations that
 follow the delegation model for loading classes, and will be invoked by
 the `loadClass loadClass` method after checking the
 parent class loader for the requested class.

**参数**

- **name** — The binary name of the class

**返回**

- The resulting `Class` object

**异常**

- **ClassNotFoundException** — If the class could not be found

> *Since 1.2*
