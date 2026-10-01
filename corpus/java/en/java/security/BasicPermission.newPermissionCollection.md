---
id: "java-en-function-basicpermission-newpermissioncollection"
language: "java"
lang: "en"
category: "function"
name: "BasicPermission.newPermissionCollection"
signature: "public PermissionCollection newPermissionCollection()"
title: "BasicPermission.newPermissionCollection"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/BasicPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BasicPermission.newPermissionCollection

```java
public PermissionCollection newPermissionCollection()
```

Returns a new `PermissionCollection` object for storing
 `BasicPermission` objects.

 

`BasicPermission` objects must be stored in a manner
 that allows them to be inserted in any order, but that also enables the
 `implies` method
 to be implemented in an efficient (and consistent) manner.

**返回**

- a new `PermissionCollection` object suitable for storing `BasicPermission` objects.
