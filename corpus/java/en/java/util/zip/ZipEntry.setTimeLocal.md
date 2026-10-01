---
id: "java-en-function-zipentry-settimelocal"
language: "java"
lang: "en"
category: "function"
name: "ZipEntry.setTimeLocal"
signature: "public void setTimeLocal(LocalDateTime time)"
title: "ZipEntry.setTimeLocal"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/ZipEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZipEntry.setTimeLocal

```java
public void setTimeLocal(LocalDateTime time)
```

Sets the last modification time of the entry in local date-time.

 

 If the entry is output to a ZIP file or ZIP file formatted
 output stream the last modification time set by this method will
 be stored into the `date and time fields` of the ZIP file
 entry and encoded in standard `MS-DOS date and time format`.
 If the date-time set is out of the range of the standard `MS-DOS date and time format`, the time will also be stored into
 ZIP file entry's extended timestamp fields in `optional
 extra data` in UTC time. The `systemDefault()
 system default TimeZone` is used to convert the local date-time
 to UTC time.

 

 `LocalDateTime` uses a precision of nanoseconds, whereas
 this class uses a precision of milliseconds. The conversion will
 truncate any excess precision information as though the amount in
 nanoseconds was subject to integer division by one million.

**参数**

- **time** — The last modification time of the entry in local date-time

**异常**

- **NullPointerException** — if `time` is null

**参见**

- #getTimeLocal()

> *Since 9*
