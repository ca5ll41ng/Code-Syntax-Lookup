---
id: "java-en-function-classloader-getpackage"
language: "java"
lang: "en"
category: "function"
name: "ClassLoader.getPackage"
signature: "protected Package getPackage(String name)"
title: "ClassLoader.getPackage"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassLoader.getPackage

```java
protected Package getPackage(String name)
```

Finds a package by name in this class loader and its ancestors.
 

 If this class loader defines a `Package` of the given name,
 the `Package` is returned. Otherwise, the ancestors of
 this class loader are searched recursively (parent by parent)
 for a `Package` of the given name.

 may delegate to the application class loader but the application class
 loader is not its ancestor.  When invoked on the platform class loader,
 this method  will not find packages defined to the application
 class loader.

**参数**

- **name** — The package name

**返回**

- The `Package` of the given name that has been defined by this class loader or its ancestors, or `null` if not found.

**异常**

- **NullPointerException** — if `name` is `null`.

**参见**

- ClassLoader#getDefinedPackage(String)

> *Since 1.2*

> **⚠ Deprecated** — If multiple class loaders delegate to each other and define classes with the same package name, and one such loader relies on the lookup behavior of `getPackage` to return a `Package` from a parent loader, then the properties exposed by the `Package` may not be as expected in the rest of the program. For example, the `Package` will only expose annotations from the `package-info.class` file defined by the parent loader, even if annotations exist in a `package-info.class` file defined by a child loader.  A more robust approach is to use the `getDefinedPackage` method which returns a `Package` for the specified class loader.
