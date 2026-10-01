---
id: "java-en-function-classloader-classloader"
language: "java"
lang: "en"
category: "function"
name: "ClassLoader.ClassLoader"
signature: "protected ClassLoader(String name, ClassLoader parent)"
title: "ClassLoader.ClassLoader"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassLoader.ClassLoader

```java
protected ClassLoader(String name, ClassLoader parent)
```

Creates a new class loader of the specified name and using the
 specified parent class loader for delegation.

 bootstrap class loader) then there is no guarantee that all platform
 classes are visible.

**参数**

- **name** — class loader name; or `null` if not named
- **parent** — the parent class loader

**异常**

- **IllegalArgumentException** — if the given name is empty.

> *Since 9*
