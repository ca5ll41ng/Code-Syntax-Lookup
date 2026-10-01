---
id: "java-en-function-modulereader-close"
language: "java"
lang: "en"
category: "function"
name: "ModuleReader.close"
signature: "void close() throws IOException"
title: "ModuleReader.close"
directive: "method"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleReader.close

```java
void close() throws IOException
```

Closes the module reader. Once closed then subsequent calls to locate or
 read a resource will fail by throwing `IOException`.

 

 A module reader is not required to be asynchronously closeable. If a
 thread is reading a resource and another thread invokes the close method,
 then the second thread may block until the read operation is complete.
