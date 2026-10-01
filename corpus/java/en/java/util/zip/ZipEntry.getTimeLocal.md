---
id: "java-en-function-zipentry-gettimelocal"
language: "java"
lang: "en"
category: "function"
name: "ZipEntry.getTimeLocal"
signature: "public LocalDateTime getTimeLocal()"
title: "ZipEntry.getTimeLocal"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/ZipEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZipEntry.getTimeLocal

```java
public LocalDateTime getTimeLocal()
```

Returns the last modification time of the entry in local date-time.

 

 If the entry is read from a ZIP file or ZIP file formatted
 input stream, this is the last modification time from the zip
 file entry's `optional extra data` if the extended timestamp
 fields are present. Otherwise, the last modification time is read
 from entry's standard MS-DOS formatted `date and time fields`.

 

 The `systemDefault() system default TimeZone`
 is used to convert the UTC time to local date-time.

**返回**

- The last modification time of the entry in local date-time

**参见**

- #setTimeLocal(LocalDateTime)

> *Since 9*
