---
id: "java-en-function-classloader-getdefinedpackages"
language: "java"
lang: "en"
category: "function"
name: "ClassLoader.getDefinedPackages"
signature: "public final Package[] getDefinedPackages()"
title: "ClassLoader.getDefinedPackages"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassLoader.getDefinedPackages

```java
public final Package[] getDefinedPackages()
```

Returns all of the `Package`s that have been defined by
 this class loader.  The returned array has no duplicated `Package`s
 of the same name.

          for consistency with the existing `getPackages` method.

**返回**

- The array of `Package` objects that have been defined by this class loader; or a zero length array if no package has been defined by this class loader.

> *Since 9*
