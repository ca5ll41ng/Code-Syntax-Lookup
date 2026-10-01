---
id: "java-en-function-permissioncollection-tostring"
language: "java"
lang: "en"
category: "function"
name: "PermissionCollection.toString"
signature: "public String toString()"
title: "PermissionCollection.toString"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/PermissionCollection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PermissionCollection.toString

```java
public String toString()
```

Returns a string describing this `PermissionCollection` object,
 providing information about all the permissions it contains.
 The format is:
 
```

 super.toString() (
   // enumerate all the Permission
   // objects and call toString() on them,
   // one per line..
 )
```

 `super.toString` is a call to the `toString`
 method of this
 object's superclass, which is `Object`. The result is
 this collection's type name followed by this object's
 hashcode, thus enabling clients to differentiate different
 `PermissionCollection` objects, even if they contain the
 same permissions.

**返回**

- information about this `PermissionCollection` object, as described above.
