---
id: "java-en-function-socketpermissioncollection-add"
language: "java"
lang: "en"
category: "function"
name: "SocketPermissionCollection.add"
signature: "public void add(Permission permission)"
title: "SocketPermissionCollection.add"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/SocketPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketPermissionCollection.add

```java
public void add(Permission permission)
```

Adds a permission to the SocketPermissions. The key for the hash is
 the name in the case of wildcards, or all the IP addresses.

**参数**

- **permission** — the Permission object to add.

**异常**

- **IllegalArgumentException** — if the permission is not a SocketPermission
- **SecurityException** — if this SocketPermissionCollection object has been marked readonly
