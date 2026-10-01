---
id: "java-en-function-privatecredentialpermission-newpermissioncollection"
language: "java"
lang: "en"
category: "function"
name: "PrivateCredentialPermission.newPermissionCollection"
signature: "public PermissionCollection newPermissionCollection()"
title: "PrivateCredentialPermission.newPermissionCollection"
directive: "method"
module: "java.base/javax.security.auth"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/PrivateCredentialPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PrivateCredentialPermission.newPermissionCollection

```java
public PermissionCollection newPermissionCollection()
```

Return a homogeneous collection of PrivateCredentialPermissions
 in a `PermissionCollection`.
 No such `PermissionCollection` is defined,
 so this method always returns `null`.

**返回**

- null in all cases.
