---
id: "java-en-function-propertypermissioncollection-add"
language: "java"
lang: "en"
category: "function"
name: "PropertyPermissionCollection.add"
signature: "public void add(Permission permission)"
title: "PropertyPermissionCollection.add"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/PropertyPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PropertyPermissionCollection.add

```java
public void add(Permission permission)
```

Adds a permission to the PropertyPermissions. The key for the hash is
 the name.

**参数**

- **permission** — the Permission object to add.

**异常**

- **IllegalArgumentException** — if the permission is not a PropertyPermission
- **SecurityException** — if this PropertyPermissionCollection object has been marked readonly
