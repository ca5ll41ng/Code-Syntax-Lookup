---
id: "java-en-function-basicfileattributes-lastaccesstime"
language: "java"
lang: "en"
category: "function"
name: "BasicFileAttributes.lastAccessTime"
signature: "FileTime lastAccessTime()"
title: "BasicFileAttributes.lastAccessTime"
directive: "method"
module: "java.base/java.nio.file.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/attribute/BasicFileAttributes.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BasicFileAttributes.lastAccessTime

```java
FileTime lastAccessTime()
```

Returns the time of last access.

 

 If the file system implementation does not support a time stamp
 to indicate the time of last access then this method returns
 an implementation specific default value, typically the `lastModifiedTime() last-modified-time` or a `FileTime`
 representing the epoch (1970-01-01T00:00:00Z).

**返回**

- a `FileTime` representing the time of last access
