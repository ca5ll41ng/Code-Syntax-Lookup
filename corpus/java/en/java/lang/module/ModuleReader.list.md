---
id: "java-en-function-modulereader-list"
language: "java"
lang: "en"
category: "function"
name: "ModuleReader.list"
signature: "Stream<String> list() throws IOException"
title: "ModuleReader.list"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleReader.list

```java
Stream<String> list() throws IOException
```

Lists the contents of the module, returning a stream of elements that
 are the names of all resources in the module. Whether the stream of
 elements includes names corresponding to directories in the module is
 module reader specific.

 

 In lazy implementations then an `IOException` may be thrown
 when using the stream to list the module contents. If this occurs then
 the `IOException` will be wrapped in an `java.io.UncheckedIOException` and thrown from the method that caused the
 access to be attempted.

 

 The returned stream may contain references to one or more open directories
 in the module. The directories are closed by closing the stream. 

 

 The behavior of the stream when used after the module reader is
 closed is implementation specific and therefore not specified. 

 This method should be used within a try-with-resources statement or similar
 control structure to ensure that any open directories referenced by the
 stream are closed promptly after the stream's operations have completed.

**返回**

- A stream of elements that are the names of all resources in the module

**异常**

- **IOException** — If an I/O error occurs or the module reader is closed
