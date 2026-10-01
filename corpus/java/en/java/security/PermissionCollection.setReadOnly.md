---
id: "java-en-function-permissioncollection-setreadonly"
language: "java"
lang: "en"
category: "function"
name: "PermissionCollection.setReadOnly"
signature: "public void setReadOnly()"
title: "PermissionCollection.setReadOnly"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/PermissionCollection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PermissionCollection.setReadOnly

```java
public void setReadOnly()
```

Marks this `PermissionCollection` object as "readonly". After
 a `PermissionCollection` object
 is marked as readonly, no new `Permission` objects
 can be added to it using `add`.
