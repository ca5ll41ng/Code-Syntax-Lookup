---
id: "java-en-function-classloader-getparent"
language: "java"
lang: "en"
category: "function"
name: "ClassLoader.getParent"
signature: "public final ClassLoader getParent()"
title: "ClassLoader.getParent"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassLoader.getParent

```java
public final ClassLoader getParent()
```

Returns the parent class loader for delegation. Some implementations may
 use `null` to represent the bootstrap class loader. This method
 will return `null` in such implementations if this class loader's
 parent is the bootstrap class loader.

**返回**

- The parent `ClassLoader`

> *Since 1.2*
