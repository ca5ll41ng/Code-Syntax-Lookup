---
id: "java-en-function-package-getpackages"
language: "java"
lang: "en"
category: "function"
name: "Package.getPackages"
signature: "public static Package[] getPackages()"
title: "Package.getPackages"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Package.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Package.getPackages

```java
public static Package[] getPackages()
```

Returns all of the `Package`s defined by the caller's class loader
 and its ancestors.  The returned array may contain more than one
 `Package` object of the same package name, each defined by
 a different class loader in the class loader hierarchy.
 

 Calling this method is equivalent to calling `getPackages`
 on a `ClassLoader` instance which is the caller's class loader.

**返回**

- The array of `Package` objects defined by this class loader and its ancestors

**参见**

- ClassLoader#getDefinedPackages
