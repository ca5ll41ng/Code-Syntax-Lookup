---
id: "java-en-function-classloader-resources"
language: "java"
lang: "en"
category: "function"
name: "ClassLoader.resources"
signature: "public Stream<URL> resources(String name)"
title: "ClassLoader.resources"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassLoader.resources

```java
public Stream<URL> resources(String name)
```

Returns a stream whose elements are the URLs of all the resources with
 the given name. A resource is some data (images, audio, text, etc) that
 can be accessed by class code in a way that is independent of the
 location of the code.

 

 The name of a resource is a `/`-separated path name that
 identifies the resource.

 

 The resources will be located when the returned stream is evaluated.
 If the evaluation results in an `IOException` then the I/O
 exception is wrapped in an `UncheckedIOException` that is then
 thrown.

 

 Resources in named modules are subject to the encapsulation rules
 specified by `getResourceAsStream Module.getResourceAsStream`.
 Additionally, and except for the special case where the resource has a
 name ending with "`.class`", this method will only find resources in
 packages of named modules when the package is `isOpen(String)
 opened` unconditionally (even if the caller of this method is in the
 same module as the resource). 

 getResources` to find all the resources with the given name and returns
 a stream with the elements in the enumeration as the source.

 implementation ensures that any delegation is consistent with the `getResource` method. This should
 ensure that the first element returned by the stream is the same
 resource that the `getResource(String)` method would return.

**参数**

- **name** — The resource name

**返回**

- A stream of resource `java.net.URL URL` objects. If no resources could  be found, the stream will be empty. Resources for which a `URL` cannot be constructed, or are in a package that is not opened unconditionally, will not be in the stream.

**异常**

- **NullPointerException** — If `name` is `null`

> *Since 9*
