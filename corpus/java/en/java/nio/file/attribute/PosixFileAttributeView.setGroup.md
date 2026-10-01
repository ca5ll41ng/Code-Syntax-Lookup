---
id: "java-en-function-posixfileattributeview-setgroup"
language: "java"
lang: "en"
category: "function"
name: "PosixFileAttributeView.setGroup"
signature: "void setGroup(GroupPrincipal group) throws IOException"
title: "PosixFileAttributeView.setGroup"
directive: "method"
module: "java.base/java.nio.file.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/attribute/PosixFileAttributeView.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PosixFileAttributeView.setGroup

```java
void setGroup(GroupPrincipal group) throws IOException
```

Updates the file group-owner.

**参数**

- **group** — the new file group-owner

**异常**

- **IOException** — if an I/O error occurs
