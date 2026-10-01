---
id: "java-en-function-socketpermission-newpermissioncollection"
language: "java"
lang: "en"
category: "function"
name: "SocketPermission.newPermissionCollection"
signature: "public PermissionCollection newPermissionCollection()"
title: "SocketPermission.newPermissionCollection"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/SocketPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketPermission.newPermissionCollection

```java
public PermissionCollection newPermissionCollection()
```

Returns a new PermissionCollection object for storing SocketPermission
 objects.
 

 SocketPermission objects must be stored in a manner that allows them
 to be inserted into the collection in any order, but that also enables the
 PermissionCollection `implies`
 method to be implemented in an efficient (and consistent) manner.

**返回**

- a new PermissionCollection object suitable for storing SocketPermissions.
