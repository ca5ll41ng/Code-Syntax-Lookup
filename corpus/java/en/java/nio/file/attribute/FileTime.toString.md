---
id: "java-en-function-filetime-tostring"
language: "java"
lang: "en"
category: "function"
name: "FileTime.toString"
signature: "public String toString()"
title: "FileTime.toString"
directive: "method"
module: "java.base/java.nio.file.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/attribute/FileTime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileTime.toString

```java
public String toString()
```

Returns the string representation of this `FileTime`. The string
 is returned in the ISO&nbsp;8601 format:
 
```

     YYYY-MM-DDThh:mm:ss[.s+]Z
 
```

 where "`[.s+]`" represents a dot followed by one of more digits
 for the decimal fraction of a second. It is only present when the decimal
 fraction of a second is not zero. For example, `FileTime.fromMillis(1234567890000L).toString()` yields `"2009-02-13T23:31:30Z"`, and `FileTime.fromMillis(1234567890123L).toString()`
 yields `"2009-02-13T23:31:30.123Z"`.

 

 A `FileTime` is primarily intended to represent the value of a
 file's time stamp. Where used to represent extreme values, where
 the year is less than "`0001`" or greater than "`9999`" then
 this method deviates from ISO 8601 in the same manner as the
 XML Schema
 language. That is, the year may be expanded to more than four digits
 and may be negative-signed. If more than four digits then leading zeros
 are not present. The year before "`0001`" is "`-0001`".

**返回**

- the string representation of this file time
