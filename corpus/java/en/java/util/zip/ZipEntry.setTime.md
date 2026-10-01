---
id: "java-en-function-zipentry-settime"
language: "java"
lang: "en"
category: "function"
name: "ZipEntry.setTime"
signature: "public void setTime(long time)"
title: "ZipEntry.setTime"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/ZipEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZipEntry.setTime

```java
public void setTime(long time)
```

Sets the last modification time of the entry.

 

 If the entry is output to a ZIP file or ZIP file formatted
 output stream the last modification time set by this method will
 be stored into the `date and time fields` of the ZIP file
 entry and encoded in standard `MS-DOS date and time format`.
 The `getDefault() default TimeZone` is
 used to convert the epoch time to the MS-DOS date and time.

**参数**

- **time** — The last modification time of the entry in milliseconds since the epoch

**参见**

- #getTime()
- #getLastModifiedTime()
