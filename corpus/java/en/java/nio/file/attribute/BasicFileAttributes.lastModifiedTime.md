---
id: "java-en-function-basicfileattributes-lastmodifiedtime"
language: "java"
lang: "en"
category: "function"
name: "BasicFileAttributes.lastModifiedTime"
signature: "FileTime lastModifiedTime()"
title: "BasicFileAttributes.lastModifiedTime"
directive: "method"
module: "java.base/java.nio.file.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/attribute/BasicFileAttributes.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BasicFileAttributes.lastModifiedTime

```java
FileTime lastModifiedTime()
```

Returns the time of last modification.

 

 If the file system implementation does not support a time stamp
 to indicate the time of last modification then this method returns an
 implementation specific default value, typically a `FileTime`
 representing the epoch (1970-01-01T00:00:00Z).

**返回**

- a `FileTime` representing the time the file was last modified
