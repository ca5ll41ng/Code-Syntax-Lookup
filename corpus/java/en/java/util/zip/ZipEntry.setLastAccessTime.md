---
id: "java-en-function-zipentry-setlastaccesstime"
language: "java"
lang: "en"
category: "function"
name: "ZipEntry.setLastAccessTime"
signature: "public ZipEntry setLastAccessTime(FileTime time)"
title: "ZipEntry.setLastAccessTime"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/ZipEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZipEntry.setLastAccessTime

```java
public ZipEntry setLastAccessTime(FileTime time)
```

Sets the last access time of the entry.

 

 If set, the last access time will be stored into the extended
 timestamp fields of entry's `optional extra data`, when output
 to a ZIP file or ZIP file formatted stream.

**参数**

- **time** — The last access time of the entry

**返回**

- This ZIP entry

**异常**

- **NullPointerException** — if the `time` is null

**参见**

- #getLastAccessTime()

> *Since 1.8*
