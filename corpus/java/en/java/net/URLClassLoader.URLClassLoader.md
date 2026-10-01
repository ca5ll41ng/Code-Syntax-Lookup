---
id: "java-en-function-urlclassloader-urlclassloader"
language: "java"
lang: "en"
category: "function"
name: "URLClassLoader.URLClassLoader"
signature: "public URLClassLoader(URL[] urls, ClassLoader parent)"
title: "URLClassLoader.URLClassLoader"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLClassLoader.URLClassLoader

```java
public URLClassLoader(URL[] urls, ClassLoader parent)
```

Constructs a new URLClassLoader for the given URLs. The URLs will be
 searched in the order specified for classes and resources after first
 searching in the specified parent class loader.  Any `jar:`
 scheme URL is assumed to refer to a JAR file.  Any `file:` scheme
 URL that ends with a '/' is assumed to refer to a directory.  Otherwise,
 the URL is assumed to refer to a JAR file which will be downloaded and
 opened as needed.

 bootstrap class loader) then there is no guarantee that all platform
 classes are visible.
 See `#builtinLoaders Run-time Built-in Class Loaders`
 for information on the bootstrap class loader and other built-in class loaders.

**参数**

- **urls** — the URLs from which to load classes and resources
- **parent** — the parent class loader for delegation, can be `null` for the bootstrap class loader

**异常**

- **NullPointerException** — if `urls` or any of its elements is `null`.
