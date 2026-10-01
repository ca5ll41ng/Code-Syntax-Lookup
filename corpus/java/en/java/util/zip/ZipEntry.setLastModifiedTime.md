---
id: "java-en-function-zipentry-setlastmodifiedtime"
language: "java"
lang: "en"
category: "function"
name: "ZipEntry.setLastModifiedTime"
signature: "public ZipEntry setLastModifiedTime(FileTime time)"
title: "ZipEntry.setLastModifiedTime"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/ZipEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZipEntry.setLastModifiedTime

```java
public ZipEntry setLastModifiedTime(FileTime time)
```

Sets the last modification time of the entry.

 

 When output to a ZIP file or ZIP file formatted output stream
 the last modification time set by this method will be stored into
 ZIP file entry's `date and time fields` in `standard
 MS-DOS date and time format`), and the extended timestamp fields
 in `optional extra data` in UTC time.

**参数**

- **time** — The last modification time of the entry

**返回**

- This ZIP entry

**异常**

- **NullPointerException** — if the `time` is null

**参见**

- #getLastModifiedTime()

> *Since 1.8*
