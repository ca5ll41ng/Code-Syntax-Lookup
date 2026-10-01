---
id: "java-en-function-posixfileattributeview-setpermissions"
language: "java"
lang: "en"
category: "function"
name: "PosixFileAttributeView.setPermissions"
signature: "void setPermissions(Set<PosixFilePermission> perms) throws IOException"
title: "PosixFileAttributeView.setPermissions"
directive: "method"
module: "java.base/java.nio.file.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/attribute/PosixFileAttributeView.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PosixFileAttributeView.setPermissions

```java
void setPermissions(Set<PosixFilePermission> perms) throws IOException
```

Updates the file permissions.

**参数**

- **perms** — the new set of permissions

**异常**

- **ClassCastException** — if the sets contains elements that are not of type `PosixFilePermission`
- **IOException** — if an I/O error occurs
