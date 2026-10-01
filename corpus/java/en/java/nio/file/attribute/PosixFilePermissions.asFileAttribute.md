---
id: "java-en-function-posixfilepermissions-asfileattribute"
language: "java"
lang: "en"
category: "function"
name: "PosixFilePermissions.asFileAttribute"
signature: "public static FileAttribute<Set<PosixFilePermission>> asFileAttribute(Set<PosixFilePermission> perms)"
title: "PosixFilePermissions.asFileAttribute"
directive: "method"
module: "java.base/java.nio.file.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/attribute/PosixFilePermissions.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PosixFilePermissions.asFileAttribute

```java
public static FileAttribute<Set<PosixFilePermission>> asFileAttribute(Set<PosixFilePermission> perms)
```

Creates a `FileAttribute`, encapsulating a copy of the given file
 permissions, suitable for passing to the `createFile
 createFile` or `createDirectory createDirectory`
 methods.

**参数**

- **perms** — the set of permissions

**返回**

- an attribute encapsulating the given file permissions with `name name` `"posix:permissions"`

**异常**

- **ClassCastException** — if the set contains elements that are not of type `PosixFilePermission`
