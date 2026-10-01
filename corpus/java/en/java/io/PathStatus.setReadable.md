---
id: "java-en-function-pathstatus-setreadable"
language: "java"
lang: "en"
category: "function"
name: "PathStatus.setReadable"
signature: "public boolean setReadable(boolean readable, boolean ownerOnly)"
title: "PathStatus.setReadable"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/File.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PathStatus.setReadable

```java
public boolean setReadable(boolean readable, boolean ownerOnly)
```

Sets the owner's or everybody's read permission for the file or directory
 located by this abstract
 pathname. On some platforms it may be possible to start the Java virtual
 machine with special privileges that allow it to read files that are
 marked as unreadable.

 

 The `java.nio.file.Files` class defines methods that operate on
 file attributes including file permissions. This may be used when finer
 manipulation of file permissions is required.

 

 If the platform supports setting a file's read permission, but
 the user does not have permission to change the access permissions of
 this abstract pathname, then the operation will fail. If the platform
 does not support setting a file's read permission, this method does
 nothing and returns the value of the `readable` parameter.

**参数**

- **readable** — If `true`, sets the access permission to allow read operations; if `false` to disallow read operations
- **ownerOnly** — If `true`, the read permission applies only to the owner's read permission; otherwise, it applies to everybody.  If the underlying file system can not distinguish the owner's read permission from that of others, then the permission will apply to everybody, regardless of this value.

**返回**

- `true` if the operation succeeds, `false` if it fails, or the value of the `readable` parameter if setting the read permission is not supported.

> *Since 1.6*
