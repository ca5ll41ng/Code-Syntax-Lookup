---
id: "java-en-function-permission-newpermissioncollection"
language: "java"
lang: "en"
category: "function"
name: "Permission.newPermissionCollection"
signature: "public PermissionCollection newPermissionCollection()"
title: "Permission.newPermissionCollection"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Permission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Permission.newPermissionCollection

```java
public PermissionCollection newPermissionCollection()
```

Returns an empty `PermissionCollection` for a given
 `Permission` object, or `null` if
 one is not defined. Subclasses of class `Permission` should
 override this if they need to store their permissions in a particular
 `PermissionCollection` object in order to provide the correct
 semantics when the `PermissionCollection.implies` method is called.
 If `null` is returned,
 then the caller of this method is free to store permissions of this
 type in any `PermissionCollection` they choose (one that uses
 a Hashtable, one that uses a Vector, etc.).

**返回**

- a new `PermissionCollection` object for this type of `Permission`, or `null` if one is not defined.
