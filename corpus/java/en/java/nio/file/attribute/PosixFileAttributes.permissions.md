---
id: "java-en-function-posixfileattributes-permissions"
language: "java"
lang: "en"
category: "function"
name: "PosixFileAttributes.permissions"
signature: "Set<PosixFilePermission> permissions()"
title: "PosixFileAttributes.permissions"
directive: "method"
module: "java.base/java.nio.file.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/attribute/PosixFileAttributes.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PosixFileAttributes.permissions

```java
Set<PosixFilePermission> permissions()
```

Returns the permissions of the file. The file permissions are returned
 as a set of `PosixFilePermission` elements. The returned set is a
 copy of the file permissions and is modifiable. This allows the result
 to be modified and passed to the `setPermissions
 setPermissions` method to update the file's permissions.

**返回**

- the file permissions

**参见**

- PosixFileAttributeView#setPermissions
