---
id: "java-en-function-zipentry-getlastaccesstime"
language: "java"
lang: "en"
category: "function"
name: "ZipEntry.getLastAccessTime"
signature: "public FileTime getLastAccessTime()"
title: "ZipEntry.getLastAccessTime"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/ZipEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZipEntry.getLastAccessTime

```java
public FileTime getLastAccessTime()
```

Returns the last access time of the entry.

 

 The last access time is from the extended timestamp fields
 of entry's `optional extra data` when read from a ZIP file
 or ZIP file formatted stream.

**返回**

- The last access time of the entry, null if not specified

**参见**

- #setLastAccessTime(FileTime)

> *Since 1.8*
