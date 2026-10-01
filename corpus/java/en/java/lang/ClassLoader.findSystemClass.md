---
id: "java-en-function-classloader-findsystemclass"
language: "java"
lang: "en"
category: "function"
name: "ClassLoader.findSystemClass"
signature: "protected final Class<?> findSystemClass(String name) throws ClassNotFoundException"
title: "ClassLoader.findSystemClass"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassLoader.findSystemClass

```java
protected final Class<?> findSystemClass(String name) throws ClassNotFoundException
```

Finds a class with the specified binary name,
 loading it if necessary.

 

 This method loads the class through the system class loader (see
 `getSystemClassLoader`).  The `Class` object returned
 might have more than one `ClassLoader` associated with it.
 Subclasses of `ClassLoader` need not usually invoke this method,
 because most class loaders need to override just `findClass`.

**参数**

- **name** — The binary name of the class

**返回**

- The `Class` object for the specified `name`

**异常**

- **ClassNotFoundException** — If the class could not be found

**参见**

- #ClassLoader(ClassLoader)
- #getParent()
