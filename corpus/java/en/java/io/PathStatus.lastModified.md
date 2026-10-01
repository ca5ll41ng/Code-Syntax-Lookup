---
id: "java-en-function-pathstatus-lastmodified"
language: "java"
lang: "en"
category: "function"
name: "PathStatus.lastModified"
signature: "public long lastModified()"
title: "PathStatus.lastModified"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/File.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PathStatus.lastModified

```java
public long lastModified()
```

Returns the time that the file located by this abstract pathname was
 last modified.

 While the unit of time of the return value is milliseconds, the
 granularity of the value depends on the underlying file system and may
 be larger.  For example, some file systems use time stamps in units of
 seconds.

 

 Where it is required to distinguish an I/O exception from the case
 where `0L` is returned, or where several attributes of the
 same file are required at the same time, or where the time of last
 access or the creation time are required, then the `readAttributes(Path,Class,LinkOption[])
 Files.readAttributes` method may be used.  If however only the
 time of last modification is required, then the
 `getLastModifiedTime(Path,LinkOption[])
 Files.getLastModifiedTime` method may be used instead.

**返回**

- A `long` value representing the time the file was last modified, measured in milliseconds since the epoch (00:00:00 GMT, January 1, 1970), or `0L` if the file does not exist or if an I/O error occurs.  The value may be negative indicating the number of milliseconds before the epoch
