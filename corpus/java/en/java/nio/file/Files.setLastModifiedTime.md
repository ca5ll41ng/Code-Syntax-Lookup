---
id: "java-en-function-files-setlastmodifiedtime"
language: "java"
lang: "en"
category: "function"
name: "Files.setLastModifiedTime"
signature: "public static Path setLastModifiedTime(Path path, FileTime time) throws IOException"
title: "Files.setLastModifiedTime"
directive: "method"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Files.setLastModifiedTime

```java
public static Path setLastModifiedTime(Path path, FileTime time) throws IOException
```

Updates a file's last modified time attribute. The file time is converted
 to the epoch and precision supported by the file system. Converting from
 finer to coarser granularities result in precision loss. The behavior of
 this method when attempting to set the last modified time when it is not
 supported by the file system or is outside the range supported by the
 underlying file store is not defined. It may or not fail by throwing an
 `IOException`.

 

 **Usage Example:**
 Suppose we want to set the last modified time to the current time:
 {@snippet lang=java :
     Path path = ...
     FileTime now = FileTime.fromMillis(System.currentTimeMillis());
     Files.setLastModifiedTime(path, now);
 }

**参数**

- **path** — the path to the file
- **time** — the new last modified time

**返回**

- the given path

**异常**

- **IOException** — if an I/O error occurs

**参见**

- BasicFileAttributeView#setTimes
