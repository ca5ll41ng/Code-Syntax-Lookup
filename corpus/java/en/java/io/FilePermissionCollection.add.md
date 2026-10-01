---
id: "java-en-function-filepermissioncollection-add"
language: "java"
lang: "en"
category: "function"
name: "FilePermissionCollection.add"
signature: "public void add(Permission permission)"
title: "FilePermissionCollection.add"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/FilePermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FilePermissionCollection.add

```java
public void add(Permission permission)
```

Adds a permission to the FilePermissionCollection. The key for the hash is
 permission.path.

**参数**

- **permission** — the Permission object to add.

**异常**

- **IllegalArgumentException** — if the permission is not a FilePermission
- **SecurityException** — if this FilePermissionCollection object has been marked readonly
