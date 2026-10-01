---
id: "java-en-function-socketpermissioncollection-implies"
language: "java"
lang: "en"
category: "function"
name: "SocketPermissionCollection.implies"
signature: "public boolean implies(Permission permission)"
title: "SocketPermissionCollection.implies"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/SocketPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketPermissionCollection.implies

```java
public boolean implies(Permission permission)
```

Check and see if this collection of permissions implies the permissions
 expressed in "permission".

**参数**

- **permission** — the Permission object to compare

**返回**

- true if "permission" is a proper subset of a permission in the collection, false if not.
