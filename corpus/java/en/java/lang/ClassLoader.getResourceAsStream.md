---
id: "java-en-function-classloader-getresourceasstream"
language: "java"
lang: "en"
category: "function"
name: "ClassLoader.getResourceAsStream"
signature: "public InputStream getResourceAsStream(String name)"
title: "ClassLoader.getResourceAsStream"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassLoader.getResourceAsStream

```java
public InputStream getResourceAsStream(String name)
```

Returns an input stream for reading the specified resource.

 

 The search order is described in the documentation for `getResource`.  

 

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

**异常**

- **NullPointerException** — If `name` is `null`

> *Since 1.1*
