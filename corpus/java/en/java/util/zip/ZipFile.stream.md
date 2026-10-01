---
id: "java-en-function-zipfile-stream"
language: "java"
lang: "en"
category: "function"
name: "ZipFile.stream"
signature: "public Stream<? extends ZipEntry> stream()"
title: "ZipFile.stream"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/ZipFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZipFile.stream

```java
public Stream<? extends ZipEntry> stream()
```

Returns an ordered `Stream` over the ZIP file entries.

 Entries appear in the `Stream` in the order they appear in
 the central directory of the ZIP file.

**返回**

- an ordered `Stream` of entries in this ZIP file

**异常**

- **IllegalStateException** — if the ZIP file has been closed

> *Since 1.8*
