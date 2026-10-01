---
id: "java-en-function-zipentry-getcreationtime"
language: "java"
lang: "en"
category: "function"
name: "ZipEntry.getCreationTime"
signature: "public FileTime getCreationTime()"
title: "ZipEntry.getCreationTime"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/ZipEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZipEntry.getCreationTime

```java
public FileTime getCreationTime()
```

Returns the creation time of the entry.

 

 The creation time is from the extended timestamp fields of
 entry's `optional extra data` when read from a ZIP file
 or ZIP file formatted stream.

**返回**

- the creation time of the entry, null if not specified

**参见**

- #setCreationTime(FileTime)

> *Since 1.8*
