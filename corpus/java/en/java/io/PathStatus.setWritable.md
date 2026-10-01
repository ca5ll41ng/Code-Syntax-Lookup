---
id: "java-en-function-pathstatus-setwritable"
language: "java"
lang: "en"
category: "function"
name: "PathStatus.setWritable"
signature: "public boolean setWritable(boolean writable, boolean ownerOnly)"
title: "PathStatus.setWritable"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/File.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PathStatus.setWritable

```java
public boolean setWritable(boolean writable, boolean ownerOnly)
```

Sets the owner's or everybody's write permission of the file or
 directory located by this abstract
 pathname. On some platforms it may be possible to start the Java virtual
 machine with special privileges that allow it to modify files that
 disallow write operations.

 

 The `java.nio.file.Files` class defines methods that operate on
 file attributes including file permissions. This may be used when finer
 manipulation of file permissions is required.

**参数**

- **writable** — If `true`, sets the access permission to allow write operations; if `false` to disallow write operations
- **ownerOnly** — If `true`, the write permission applies only to the owner's write permission; otherwise, it applies to everybody.  If the underlying file system can not distinguish the owner's write permission from that of others, then the permission will apply to everybody, regardless of this value.

**返回**

- `true` if and only if the operation succeeded. The operation will fail if the user does not have permission to change the access permissions of this abstract pathname.

> *Since 1.6*
