---
id: "java-en-function-zipfile-open_delete"
language: "java"
lang: "en"
category: "function"
name: "ZipFile.OPEN_DELETE"
signature: "public static final int OPEN_DELETE = 0x4"
title: "ZipFile.OPEN_DELETE"
directive: "field"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/ZipFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZipFile.OPEN_DELETE

```java
public static final int OPEN_DELETE = 0x4
```

Mode flag to open a ZIP file and mark it for deletion.  The file will be
 deleted some time between the moment that it is opened and the moment
 that it is closed, but its contents will remain accessible via the
 `ZipFile` object until either the close method is invoked or the
 virtual machine exits.
