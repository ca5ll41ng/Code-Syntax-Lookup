---
id: "java-en-function-zipfile-getentry"
language: "java"
lang: "en"
category: "function"
name: "ZipFile.getEntry"
signature: "public ZipEntry getEntry(String name)"
title: "ZipFile.getEntry"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/ZipFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZipFile.getEntry

```java
public ZipEntry getEntry(String name)
```

Returns the ZIP file entry for the specified name, or null
 if not found.

**参数**

- **name** — the name of the entry

**返回**

- the ZIP file entry, or null if not found

**异常**

- **IllegalStateException** — if the ZIP file has been closed
