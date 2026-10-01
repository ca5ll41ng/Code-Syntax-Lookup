---
id: "java-en-function-posixfilepermissions-tostring"
language: "java"
lang: "en"
category: "function"
name: "PosixFilePermissions.toString"
signature: "public static String toString(Set<PosixFilePermission> perms)"
title: "PosixFilePermissions.toString"
directive: "method"
module: "java.base/java.nio.file.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/attribute/PosixFilePermissions.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PosixFilePermissions.toString

```java
public static String toString(Set<PosixFilePermission> perms)
```

Returns the `String` representation of a set of permissions. It
 is guaranteed that the returned `String` can be parsed by the
 `fromString` method.

 

 If the set contains `null` or elements that are not of type
 `PosixFilePermission` then these elements are ignored.

**参数**

- **perms** — the set of permissions

**返回**

- the string representation of the permission set
