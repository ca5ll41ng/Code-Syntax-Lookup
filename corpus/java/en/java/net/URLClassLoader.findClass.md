---
id: "java-en-function-urlclassloader-findclass"
language: "java"
lang: "en"
category: "function"
name: "URLClassLoader.findClass"
signature: "protected Class<?> findClass(final String name) throws ClassNotFoundException"
title: "URLClassLoader.findClass"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLClassLoader.findClass

```java
protected Class<?> findClass(final String name) throws ClassNotFoundException
```

Finds and loads the class with the specified name from the URL search
 path. Any URLs referring to JAR files are loaded and opened as needed
 until the class is found.

**参数**

- **name** — the name of the class

**返回**

- the resulting class

**异常**

- **ClassNotFoundException** — if the class could not be found, or if the loader is closed.
- **NullPointerException** — if `name` is `null`.
