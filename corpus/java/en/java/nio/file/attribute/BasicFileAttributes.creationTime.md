---
id: "java-en-function-basicfileattributes-creationtime"
language: "java"
lang: "en"
category: "function"
name: "BasicFileAttributes.creationTime"
signature: "FileTime creationTime()"
title: "BasicFileAttributes.creationTime"
directive: "method"
module: "java.base/java.nio.file.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/attribute/BasicFileAttributes.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BasicFileAttributes.creationTime

```java
FileTime creationTime()
```

Returns the creation time. The creation time is the time that the file
 was created.

 

 If the file system implementation does not support a time stamp
 to indicate the time when the file was created then this method returns
 an implementation specific default value, typically the `lastModifiedTime() last-modified-time` or a `FileTime`
 representing the epoch (1970-01-01T00:00:00Z).

**返回**

- a `FileTime` representing the time the file was created
