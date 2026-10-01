---
id: "java-en-function-zipfile-close"
language: "java"
lang: "en"
category: "function"
name: "ZipFile.close"
signature: "public void close() throws IOException"
title: "ZipFile.close"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/ZipFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZipFile.close

```java
public void close() throws IOException
```

Closes the ZIP file.

 

 Closing this ZIP file will close all of the input streams
 previously returned by invocations of the `getInputStream
 getInputStream` method.

**异常**

- **IOException** — if an I/O error has occurred
