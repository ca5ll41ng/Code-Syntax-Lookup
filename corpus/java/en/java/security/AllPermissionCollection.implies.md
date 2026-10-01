---
id: "java-en-function-allpermissioncollection-implies"
language: "java"
lang: "en"
category: "function"
name: "AllPermissionCollection.implies"
signature: "public boolean implies(Permission permission)"
title: "AllPermissionCollection.implies"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/AllPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AllPermissionCollection.implies

```java
public boolean implies(Permission permission)
```

Check and see if this set of permissions implies the permissions
 expressed in "permission".

**参数**

- **permission** — the `Permission` object to compare

**返回**

- always returns `true`.
