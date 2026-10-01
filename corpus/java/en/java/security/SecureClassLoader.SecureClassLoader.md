---
id: "java-en-function-secureclassloader-secureclassloader"
language: "java"
lang: "en"
category: "function"
name: "SecureClassLoader.SecureClassLoader"
signature: "protected SecureClassLoader(ClassLoader parent)"
title: "SecureClassLoader.SecureClassLoader"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/SecureClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecureClassLoader.SecureClassLoader

```java
protected SecureClassLoader(ClassLoader parent)
```

Creates a new `SecureClassLoader` using the specified parent
 class loader for delegation.

 bootstrap class loader) then there is no guarantee that all platform
 classes are visible.
 See `#builtinLoaders Run-time Built-in Class Loaders`
 for information on the bootstrap class loader and other built-in class loaders.

**参数**

- **parent** — the parent ClassLoader, can be `null` for the bootstrap class loader
