---
id: "java-en-function-classloader-loadclass"
language: "java"
lang: "en"
category: "function"
name: "ClassLoader.loadClass"
signature: "public Class<?> loadClass(String name) throws ClassNotFoundException"
title: "ClassLoader.loadClass"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassLoader.loadClass

```java
public Class<?> loadClass(String name) throws ClassNotFoundException
```

Loads the class with the specified binary name.
 This method searches for classes in the same manner as the `loadClass` method.  It is invoked by the Java virtual
 machine to resolve class references.  Invoking this method is equivalent
 to invoking `loadClass(String, boolean) loadClass(name,
 false)`.

**参数**

- **name** — The binary name of the class

**返回**

- The resulting `Class` object

**异常**

- **ClassNotFoundException** — If the class was not found
