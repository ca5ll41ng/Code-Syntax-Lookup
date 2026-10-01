---
id: "java-en-function-delegationpermission-newpermissioncollection"
language: "java"
lang: "en"
category: "function"
name: "DelegationPermission.newPermissionCollection"
signature: "public PermissionCollection newPermissionCollection()"
title: "DelegationPermission.newPermissionCollection"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/DelegationPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DelegationPermission.newPermissionCollection

```java
public PermissionCollection newPermissionCollection()
```

Returns a PermissionCollection object for storing
 DelegationPermission objects.
 

 DelegationPermission objects must be stored in a manner that
 allows them to be inserted into the collection in any order, but
 that also enables the PermissionCollection implies method to
 be implemented in an efficient (and consistent) manner.

**返回**

- a new PermissionCollection object suitable for storing DelegationPermissions.
