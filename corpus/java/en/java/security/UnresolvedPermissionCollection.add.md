---
id: "java-en-function-unresolvedpermissioncollection-add"
language: "java"
lang: "en"
category: "function"
name: "UnresolvedPermissionCollection.add"
signature: "public void add(Permission permission)"
title: "UnresolvedPermissionCollection.add"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/UnresolvedPermissionCollection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UnresolvedPermissionCollection.add

```java
public void add(Permission permission)
```

Adds a permission to this `UnresolvedPermissionCollection`.
 The key for the hash is the unresolved permission's type (class) name.

**参数**

- **permission** — the Permission object to add.
