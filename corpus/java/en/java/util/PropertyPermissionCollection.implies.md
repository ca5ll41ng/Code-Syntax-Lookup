---
id: "java-en-function-propertypermissioncollection-implies"
language: "java"
lang: "en"
category: "function"
name: "PropertyPermissionCollection.implies"
signature: "public boolean implies(Permission permission)"
title: "PropertyPermissionCollection.implies"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/PropertyPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PropertyPermissionCollection.implies

```java
public boolean implies(Permission permission)
```

Check and see if this set of permissions implies the permissions
 expressed in "permission".

**参数**

- **permission** — the Permission object to compare

**返回**

- true if "permission" is a proper subset of a permission in the set, false if not.
