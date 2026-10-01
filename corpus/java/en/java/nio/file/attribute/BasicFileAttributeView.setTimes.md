---
id: "java-en-function-basicfileattributeview-settimes"
language: "java"
lang: "en"
category: "function"
name: "BasicFileAttributeView.setTimes"
signature: "void setTimes(FileTime lastModifiedTime, FileTime lastAccessTime, FileTime createTime) throws IOException"
title: "BasicFileAttributeView.setTimes"
directive: "method"
module: "java.base/java.nio.file.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/attribute/BasicFileAttributeView.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BasicFileAttributeView.setTimes

```java
void setTimes(FileTime lastModifiedTime, FileTime lastAccessTime, FileTime createTime) throws IOException
```

Updates any or all of the file's last modified time, last access time,
 and create time attributes.

 

 This method updates the file's timestamp attributes. The values are
 converted to the epoch and precision supported by the file system.
 Converting from finer to coarser granularities results in precision loss.
 The behavior of this method when attempting to set a timestamp that is
 not supported or to a value that is outside the range supported by the
 underlying file store is not defined. It may or not fail by throwing an
 `IOException`.

 

 If any of the `lastModifiedTime`, `lastAccessTime`,
 or `createTime` parameters has the value `null` then the
 corresponding timestamp is not changed. An implementation may require to
 read the existing values of the file attributes when only some, but not
 all, of the timestamp attributes are updated. Consequently, this method
 may not be an atomic operation with respect to other file system
 operations. Reading and re-writing existing values may also result in
 precision loss. If all of the `lastModifiedTime`, `lastAccessTime` and `createTime` parameters are `null` then
 this method has no effect.

 

 **Usage Example:**
 Suppose we want to change a file's last access time.
 {@snippet lang=java :
     Path path = ...
     FileTime time = ...
     Files.getFileAttributeView(path, BasicFileAttributeView.class).setTimes(null, time, null);
 }

**参数**

- **lastModifiedTime** — the new last modified time, or `null` to not change the value
- **lastAccessTime** — the last access time, or `null` to not change the value
- **createTime** — the file's create time, or `null` to not change the value

**异常**

- **IOException** — if an I/O error occurs

**参见**

- java.nio.file.Files#setLastModifiedTime
