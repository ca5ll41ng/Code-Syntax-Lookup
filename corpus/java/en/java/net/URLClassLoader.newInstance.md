---
id: "java-en-function-urlclassloader-newinstance"
language: "java"
lang: "en"
category: "function"
name: "URLClassLoader.newInstance"
signature: "public static URLClassLoader newInstance(final URL[] urls, final ClassLoader parent)"
title: "URLClassLoader.newInstance"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLClassLoader.newInstance

```java
public static URLClassLoader newInstance(final URL[] urls, final ClassLoader parent)
```

Creates a new instance of URLClassLoader for the specified
 URLs and parent class loader.

**参数**

- **urls** — the URLs to search for classes and resources
- **parent** — the parent class loader for delegation

**返回**

- the resulting class loader

**异常**

- **NullPointerException** — if `urls` or any of its elements is `null`.
