---
id: "java-en-function-posixfilepermissions-fromstring"
language: "java"
lang: "en"
category: "function"
name: "PosixFilePermissions.fromString"
signature: "public static Set<PosixFilePermission> fromString(String perms)"
title: "PosixFilePermissions.fromString"
directive: "method"
module: "java.base/java.nio.file.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/attribute/PosixFilePermissions.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PosixFilePermissions.fromString

```java
public static Set<PosixFilePermission> fromString(String perms)
```

Returns the set of permissions corresponding to a given `String`
 representation.

 

 The `perms` parameter is a `String` representing the
 permissions. It has 9 characters that are interpreted as three sets of
 three. The first set refers to the owner's permissions; the next to the
 group permissions and the last to others. Within each set, the first
 character is `'r'` to indicate permission to read, the second
 character is `'w'` to indicate permission to write, and the third
 character is `'x'` for execute permission. Where a permission is
 not set then the corresponding character is set to `'-'`.

 

 **Usage Example:**
 Suppose we require the set of permissions that indicate the owner has read,
 write, and execute permissions, the group has read and execute permissions
 and others have none.
 {@snippet lang=java :
     Set perms = PosixFilePermissions.fromString("rwxr-x---");
 }

**参数**

- **perms** — string representing a set of permissions

**返回**

- the resulting set of permissions

**异常**

- **IllegalArgumentException** — if the string cannot be converted to a set of permissions

**参见**

- #toString(Set)
