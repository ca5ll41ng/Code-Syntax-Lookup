---
id: "java-en-function-basicpermissioncollection-implies"
language: "java"
lang: "en"
category: "function"
name: "BasicPermissionCollection.implies"
signature: "public boolean implies(Permission permission)"
title: "BasicPermissionCollection.implies"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/BasicPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BasicPermissionCollection.implies

```java
public boolean implies(Permission permission)
```

Check and see if this set of permissions implies the permissions
 expressed in "permission".

**参数**

- **permission** — the Permission object to compare

**返回**

- `true` if "permission" is a proper subset of a permission in the set, `false` if not.
