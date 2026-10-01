---
id: "java-en-function-modulereader-open"
language: "java"
lang: "en"
category: "function"
name: "ModuleReader.open"
signature: "default Optional<InputStream> open(String name) throws IOException"
title: "ModuleReader.open"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleReader.open

```java
default Optional<InputStream> open(String name) throws IOException
```

Opens a resource, returning an input stream to read the resource in
 the module.

 

 The behavior of the input stream when used after the module reader
 is closed is implementation specific and therefore not specified. 

 find` method to get a URI to the resource. If found, then it attempts
 to construct a `java.net.URL URL` and open a connection to the
 resource.

**参数**

- **name** — The name of the resource to open for reading

**返回**

- An input stream to read the resource or an empty `Optional` if not found

**异常**

- **IOException** — If an I/O error occurs or the module reader is closed
