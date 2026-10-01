---
id: "java-en-function-urlclassloader-findresources"
language: "java"
lang: "en"
category: "function"
name: "URLClassLoader.findResources"
signature: "public Enumeration<URL> findResources(final String name) throws IOException"
title: "URLClassLoader.findResources"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLClassLoader.findResources

```java
public Enumeration<URL> findResources(final String name) throws IOException
```

Returns an Enumeration of URLs representing all of the resources
 on the URL search path having the specified name.

**参数**

- **name** — the resource name

**返回**

- An `Enumeration` of `URL`s. If the loader is closed, the Enumeration contains no elements.

**异常**

- **IOException** — if an I/O exception occurs
