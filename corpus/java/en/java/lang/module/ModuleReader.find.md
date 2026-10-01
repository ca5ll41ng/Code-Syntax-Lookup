---
id: "java-en-function-modulereader-find"
language: "java"
lang: "en"
category: "function"
name: "ModuleReader.find"
signature: "Optional<URI> find(String name) throws IOException"
title: "ModuleReader.find"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleReader.find

```java
Optional<URI> find(String name) throws IOException
```

Finds a resource, returning a URI to the resource in the module.

 

 If the module reader can determine that the name locates a directory
 then the resulting URI will end with a slash ('/').

**参数**

- **name** — The name of the resource to open for reading

**返回**

- A URI to the resource; an empty `Optional` if the resource is not found or a URI cannot be constructed to locate the resource

**异常**

- **IOException** — If an I/O error occurs or the module reader is closed

**参见**

- ClassLoader#getResource(String)
