---
id: "java-en-function-protectiondomain-implies"
language: "java"
lang: "en"
category: "function"
name: "ProtectionDomain.implies"
signature: "public boolean implies(Permission perm)"
title: "ProtectionDomain.implies"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/ProtectionDomain.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProtectionDomain.implies

```java
public boolean implies(Permission perm)
```

Check and see if this `ProtectionDomain` implies the permissions
 expressed in the `Permission` object.
 

 The set of permissions evaluated is a function of whether the
 `ProtectionDomain` was constructed with a static set of permissions
 or it was bound to a dynamically mapped set of permissions.
 

 If the `staticPermissionsOnly` method returns
 `true`, then the permission will only be checked against the
 `PermissionCollection` supplied at construction.
 

 Otherwise, the permission will be checked against the combination
 of the `PermissionCollection` supplied at construction and
 the current policy.

 no longer supported. The `getPolicy current policy`
 is always a `Policy` object that grants no permissions.

**参数**

- **perm** — the `Permission` object to check.

**返回**

- `true` if `perm` is implied by this `ProtectionDomain`.
