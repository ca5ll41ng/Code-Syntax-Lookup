---
id: "java-en-function-classloader-findresources"
language: "java"
lang: "en"
category: "function"
name: "ClassLoader.findResources"
signature: "protected Enumeration<URL> findResources(String name) throws IOException"
title: "ClassLoader.findResources"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassLoader.findResources

```java
protected Enumeration<URL> findResources(String name) throws IOException
```

Returns an enumeration of `java.net.URL URL` objects
 representing all the resources with the given name. Class loader
 implementations should override this method.

 

 For resources in named modules then the method must implement the
 rules for encapsulation specified in the `Module` `getResourceAsStream getResourceAsStream` method. Additionally,
 it must not find non-"`.class`" resources in packages of named
 modules unless the package is `isOpen(String) opened`
 unconditionally. 

 contains no elements.

**参数**

- **name** — The resource name

**返回**

- An enumeration of `java.net.URL URL` objects for the resource. If no resources could  be found, the enumeration will be empty. Resources for which a `URL` cannot be constructed, or are in a package that is not opened unconditionally, are not returned in the enumeration.

**异常**

- **IOException** — If I/O errors occur

> *Since 1.2*
