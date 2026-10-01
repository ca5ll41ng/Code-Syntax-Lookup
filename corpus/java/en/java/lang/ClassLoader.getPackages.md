---
id: "java-en-function-classloader-getpackages"
language: "java"
lang: "en"
category: "function"
name: "ClassLoader.getPackages"
signature: "protected Package[] getPackages()"
title: "ClassLoader.getPackages"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassLoader.getPackages

```java
protected Package[] getPackages()
```

Returns all of the `Package`s that have been defined by
 this class loader and its ancestors.  The returned array may contain
 more than one `Package` object of the same package name, each
 defined by a different class loader in the class loader hierarchy.

 may delegate to the application class loader. In other words,
 packages in modules defined to the application class loader may be
 visible to the platform class loader.  On the other hand,
 the application class loader is not its ancestor and hence
 when invoked on the platform class loader, this method will not
 return any packages defined to the application class loader.

**返回**

- The array of `Package` objects that have been defined by this class loader and its ancestors

**参见**

- ClassLoader#getDefinedPackages()

> *Since 1.2*
