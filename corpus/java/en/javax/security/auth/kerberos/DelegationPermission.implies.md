---
id: "java-en-function-delegationpermission-implies"
language: "java"
lang: "en"
category: "function"
name: "DelegationPermission.implies"
signature: "public boolean implies(Permission p)"
title: "DelegationPermission.implies"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/DelegationPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DelegationPermission.implies

```java
public boolean implies(Permission p)
```

Checks if this Kerberos delegation permission object "implies" the
 specified permission.
 

 This method returns true if this `DelegationPermission`
 is equal to `p`, and returns false otherwise.

**参数**

- **p** — the permission to check against.

**返回**

- true if the specified permission is implied by this object, false if not.
