---
id: "java-en-function-classloader-getsystemresourceasstream"
language: "java"
lang: "en"
category: "function"
name: "ClassLoader.getSystemResourceAsStream"
signature: "public static InputStream getSystemResourceAsStream(String name)"
title: "ClassLoader.getSystemResourceAsStream"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassLoader.getSystemResourceAsStream

```java
public static InputStream getSystemResourceAsStream(String name)
```

Open for reading, a resource of the specified name from the search path
 used to load classes.  This method locates the resource through the
 system class loader (see `getSystemClassLoader`).

 

 Resources in named modules are subject to the encapsulation rules
 specified by `getResourceAsStream Module.getResourceAsStream`.
 Additionally, and except for the special case where the resource has a
 name ending with "`.class`", this method will only find resources in
 packages of named modules when the package is `isOpen(String)
 opened` unconditionally.

**参数**

- **name** — The resource name

**返回**

- An input stream for reading the resource; `null` if the resource could not be found, or the resource is in a package that is not opened unconditionally.

> *Since 1.1*
