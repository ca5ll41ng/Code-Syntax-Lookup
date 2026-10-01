---
id: "java-en-function-servicepermission-implies"
language: "java"
lang: "en"
category: "function"
name: "ServicePermission.implies"
signature: "public boolean implies(Permission p)"
title: "ServicePermission.implies"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/ServicePermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ServicePermission.implies

```java
public boolean implies(Permission p)
```

Checks if this Kerberos service permission object "implies" the
 specified permission.
 

 More specifically, this method returns true if all the following
 are true (and returns false if any of them are not):
 
 
-  p is an instanceof `ServicePermission`,
 
-  p's actions are a proper subset of this
 `ServicePermission`'s actions,
 
-  p's name is equal to this `ServicePermission`'s name
 or this `ServicePermission`'s name is "*".

**参数**

- **p** — the permission to check against.

**返回**

- true if the specified permission is implied by this object, false if not.
