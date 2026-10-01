---
id: "java-en-function-classloader-getdefinedpackage"
language: "java"
lang: "en"
category: "function"
name: "ClassLoader.getDefinedPackage"
signature: "public final Package getDefinedPackage(String name)"
title: "ClassLoader.getDefinedPackage"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassLoader.getDefinedPackage

```java
public final Package getDefinedPackage(String name)
```

Returns a `Package` of the given name that
 has been defined by this class loader.

**参数**

- **name** — The package name

**返回**

- The `Package` of the given name that has been defined by this class loader, or `null` if not found

**异常**

- **NullPointerException** — if `name` is `null`.

> *Since 9*
