---
id: "java-en-function-classloader-getresources"
language: "java"
lang: "en"
category: "function"
name: "ClassLoader.getResources"
signature: "public Enumeration<URL> getResources(String name) throws IOException"
title: "ClassLoader.getResources"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassLoader.getResources

```java
public Enumeration<URL> getResources(String name) throws IOException
```

Finds all the resources with the given name. A resource is some data
 (images, audio, text, etc) that can be accessed by class code in a way
 that is independent of the location of the code.

 

 The name of a resource is a `/`-separated path name that
 identifies the resource. 

 

 Resources in named modules are subject to the encapsulation rules
 specified by `getResourceAsStream Module.getResourceAsStream`.
 Additionally, and except for the special case where the resource has a
 name ending with "`.class`", this method will only find resources in
 packages of named modules when the package is `isOpen(String)
 opened` unconditionally (even if the caller of this method is in the
 same module as the resource). 

 loader for the resource; if the parent is `null` the path of the
 class loader built into the virtual machine is searched. It then
 invokes `findResources` to find the resources with the
 name in this class loader. It returns an enumeration whose elements
 are the URLs found by searching the parent class loader followed by
 the elements found with `findResources`.

 and where more than one module contains a resource with the given name,
 then the ordering is not specified and may be very unpredictable.
 When overriding this method it is recommended that an
 implementation ensures that any delegation is consistent with the `getResource` method. This should
 ensure that the first element returned by the Enumeration's
 `nextElement` method is the same resource that the
 `getResource(String)` method would return.

**参数**

- **name** — The resource name

**返回**

- An enumeration of `java.net.URL URL` objects for the resource. If no resources could be found, the enumeration will be empty. Resources for which a `URL` cannot be constructed, or are in a package that is not opened unconditionally, are not returned in the enumeration.

**异常**

- **IOException** — If I/O errors occur
- **NullPointerException** — If `name` is `null`

> *Since 1.2*
