---
id: "java-en-function-permissioncollection-isreadonly"
language: "java"
lang: "en"
category: "function"
name: "PermissionCollection.isReadOnly"
signature: "public boolean isReadOnly()"
title: "PermissionCollection.isReadOnly"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/PermissionCollection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PermissionCollection.isReadOnly

```java
public boolean isReadOnly()
```

Returns `true` if this `PermissionCollection` object is
 marked as readonly. If it is readonly, no new `Permission`
 objects can be added to it using `add`.

 

By default, the object is not readonly. It can be set to
 readonly by a call to `setReadOnly`.

**返回**

- `true` if this `PermissionCollection` object is marked as readonly, `false` otherwise.
