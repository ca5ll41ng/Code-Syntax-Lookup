---
id: "java-en-function-filepermissioncollection-implies"
language: "java"
lang: "en"
category: "function"
name: "FilePermissionCollection.implies"
signature: "public boolean implies(Permission permission)"
title: "FilePermissionCollection.implies"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/FilePermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FilePermissionCollection.implies

```java
public boolean implies(Permission permission)
```

Check and see if this set of permissions implies the permissions
 expressed in "permission".

**参数**

- **permission** — the Permission object to compare

**返回**

- true if "permission" is a proper subset of a permission in the set, false if not.
