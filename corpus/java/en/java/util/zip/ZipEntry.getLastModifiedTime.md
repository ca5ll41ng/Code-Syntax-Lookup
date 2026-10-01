---
id: "java-en-function-zipentry-getlastmodifiedtime"
language: "java"
lang: "en"
category: "function"
name: "ZipEntry.getLastModifiedTime"
signature: "public FileTime getLastModifiedTime()"
title: "ZipEntry.getLastModifiedTime"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/ZipEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZipEntry.getLastModifiedTime

```java
public FileTime getLastModifiedTime()
```

Returns the last modification time of the entry.

 

 If the entry is read from a ZIP file or ZIP file formatted
 input stream, this is the last modification time from the zip
 file entry's `optional extra data` if the extended timestamp
 fields are present. Otherwise the last modification time is read
 from the entry's `date and time fields`, the `getDefault() default TimeZone` is used to convert
 the standard MS-DOS formatted date and time to the epoch time.

**返回**

- The last modification time of the entry, null if not specified

**参见**

- #setLastModifiedTime(FileTime)

> *Since 1.8*
