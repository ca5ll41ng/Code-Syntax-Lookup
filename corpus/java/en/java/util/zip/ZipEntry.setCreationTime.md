---
id: "java-en-function-zipentry-setcreationtime"
language: "java"
lang: "en"
category: "function"
name: "ZipEntry.setCreationTime"
signature: "public ZipEntry setCreationTime(FileTime time)"
title: "ZipEntry.setCreationTime"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/ZipEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZipEntry.setCreationTime

```java
public ZipEntry setCreationTime(FileTime time)
```

Sets the creation time of the entry.

 

 If set, the creation time will be stored into the extended
 timestamp fields of entry's `optional extra data`, when
 output to a ZIP file or ZIP file formatted stream.

**参数**

- **time** — The creation time of the entry

**返回**

- This ZIP entry

**异常**

- **NullPointerException** — if the `time` is null

**参见**

- #getCreationTime()

> *Since 1.8*
