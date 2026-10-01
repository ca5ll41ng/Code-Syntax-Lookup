---
id: "java-en-function-pathstatus-setexecutable"
language: "java"
lang: "en"
category: "function"
name: "PathStatus.setExecutable"
signature: "public boolean setExecutable(boolean executable, boolean ownerOnly)"
title: "PathStatus.setExecutable"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/File.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PathStatus.setExecutable

```java
public boolean setExecutable(boolean executable, boolean ownerOnly)
```

Sets the owner's or everybody's execute permission for the file or
 directory located by this abstract
 pathname. On some platforms it may be possible to start the Java virtual
 machine with special privileges that allow it to execute files that are
 not marked executable.

 

 The `java.nio.file.Files` class defines methods that operate on
 file attributes including file permissions. This may be used when finer
 manipulation of file permissions is required.

 

 If the platform supports setting a file's execute permission, but
 the user does not have permission to change the access permissions of
 this abstract pathname, then the operation will fail. If the platform
 does not support setting a file's execute permission, this method does
 nothing and returns the value of the `executable` parameter.

**参数**

- **executable** — If `true`, sets the access permission to allow execute operations; if `false` to disallow execute operations
- **ownerOnly** — If `true`, the execute permission applies only to the owner's execute permission; otherwise, it applies to everybody. If the underlying file system can not distinguish the owner's execute permission from that of others, then the permission will apply to everybody, regardless of this value.

**返回**

- `true` if the operation succeeds, `false` if it fails, or the value of the `executable` parameter if setting the execute permission is not supported.

> *Since 1.6*
