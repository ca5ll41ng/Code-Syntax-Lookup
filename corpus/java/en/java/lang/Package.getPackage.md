---
id: "java-en-function-package-getpackage"
language: "java"
lang: "en"
category: "function"
name: "Package.getPackage"
signature: "public static Package getPackage(String name)"
title: "Package.getPackage"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Package.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Package.getPackage

```java
public static Package getPackage(String name)
```

Finds a package by name in the caller's class loader and its
 ancestors.
 

 If the caller's class loader defines a `Package` of the given name,
 the `Package` is returned. Otherwise, the ancestors of the
 caller's class loader are searched recursively (parent by parent)
 for a `Package` of the given name.
 

 Calling this method is equivalent to calling `getPackage`
 on a `ClassLoader` instance which is the caller's class loader.

**参数**

- **name** — A package name, such as "`java.lang`".

**返回**

- The `Package` of the given name defined by the caller's class loader or its ancestors, or `null` if not found.

**异常**

- **NullPointerException** — if `name` is `null`.

**参见**

- ClassLoader#getDefinedPackage

> **⚠ Deprecated** — If multiple class loaders delegate to each other and define classes with the same package name, and one such loader relies on the lookup behavior of `getPackage` to return a `Package` from a parent loader, then the properties exposed by the `Package` may not be as expected in the rest of the program. For example, the `Package` will only expose annotations from the `package-info.class` file defined by the parent loader, even if annotations exist in a `package-info.class` file defined by a child loader.  A more robust approach is to use the `getDefinedPackage` method which returns a `Package` for the specified class loader.
