---
id: "java-en-function-urlclassloader-definepackage"
language: "java"
lang: "en"
category: "function"
name: "URLClassLoader.definePackage"
signature: "protected Package definePackage(String name, Manifest man, URL url)"
title: "URLClassLoader.definePackage"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLClassLoader.definePackage

```java
protected Package definePackage(String name, Manifest man, URL url)
```

Defines a new package by name in this `URLClassLoader`.
 The attributes contained in the specified `Manifest`
 will be used to obtain package version and sealing information.
 For sealed packages, the additional URL specifies the code source URL
 from which the package was loaded.

**参数**

- **name** — the package name
- **man** — the `Manifest` containing package version and sealing information
- **url** — the code source url for the package, or null if none

**返回**

- the newly defined `Package` object

**异常**

- **IllegalArgumentException** — if the package name is already defined by this class loader
