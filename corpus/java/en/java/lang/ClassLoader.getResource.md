---
id: "java-en-function-classloader-getresource"
language: "java"
lang: "en"
category: "function"
name: "ClassLoader.getResource"
signature: "public URL getResource(String name)"
title: "ClassLoader.getResource"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassLoader.getResource

```java
public URL getResource(String name)
```

Finds the resource with the given name.  A resource is some data
 (images, audio, text, etc) that can be accessed by class code in a way
 that is independent of the location of the code.

 

 The name of a resource is a '`/`'-separated path name that
 identifies the resource. 

 

 Resources in named modules are subject to the encapsulation rules
 specified by `getResourceAsStream Module.getResourceAsStream`.
 Additionally, and except for the special case where the resource has a
 name ending with "`.class`", this method will only find resources in
 packages of named modules when the package is `isOpen(String)
 opened` unconditionally (even if the caller of this method is in the
 same module as the resource). 

 loader for the resource; if the parent is `null` the path of the
 class loader built into the virtual machine is searched. If not found,
 this method will invoke `findResource` to find the resource.

 and where more than one module contains a resource with the given name,
 then the ordering that modules are searched is not specified and may be
 very unpredictable.
 When overriding this method it is recommended that an implementation
 ensures that any delegation is consistent with the `getResources` method.

**参数**

- **name** — The resource name

**返回**

- `URL` object for reading the resource; `null` if the resource could not be found, a `URL` could not be constructed to locate the resource, or the resource is in a package that is not opened unconditionally.

**异常**

- **NullPointerException** — If `name` is `null`

> *Since 1.1*
