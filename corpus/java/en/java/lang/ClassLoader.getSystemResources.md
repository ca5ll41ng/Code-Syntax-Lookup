---
id: "java-en-function-classloader-getsystemresources"
language: "java"
lang: "en"
category: "function"
name: "ClassLoader.getSystemResources"
signature: "public static Enumeration<URL> getSystemResources(String name) throws IOException"
title: "ClassLoader.getSystemResources"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassLoader.getSystemResources

```java
public static Enumeration<URL> getSystemResources(String name) throws IOException
```

Finds all resources of the specified name from the search path used to
 load classes.  The resources thus found are returned as an
 `java.util.Enumeration Enumeration` of `java.net.URL URL` objects.

 

 The search order is described in the documentation for `getSystemResource`.  

 

 Resources in named modules are subject to the encapsulation rules
 specified by `getResourceAsStream Module.getResourceAsStream`.
 Additionally, and except for the special case where the resource has a
 name ending with "`.class`", this method will only find resources in
 packages of named modules when the package is `isOpen(String)
 opened` unconditionally.

**参数**

- **name** — The resource name

**返回**

- An enumeration of `java.net.URL URL` objects for the resource. If no resources could  be found, the enumeration will be empty. Resources for which a `URL` cannot be constructed, or are in a package that is not opened unconditionally, are not returned in the enumeration.

**异常**

- **IOException** — If I/O errors occur

> *Since 1.2*
