---
id: "java-en-function-zipentry-gettime"
language: "java"
lang: "en"
category: "function"
name: "ZipEntry.getTime"
signature: "public long getTime()"
title: "ZipEntry.getTime"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/ZipEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZipEntry.getTime

```java
public long getTime()
```

Returns the last modification time of the entry.

 

 If the entry is read from a ZIP file or ZIP file formatted
 input stream, this is the last modification time from the `date and time fields` of the ZIP file entry. The
 `getDefault() default TimeZone` is used
 to convert the standard MS-DOS formatted date and time to the
 epoch time.

**返回**

- The last modification time of the entry in milliseconds since the epoch, or -1 if not specified

**参见**

- #setTime(long)
- #setLastModifiedTime(FileTime)
