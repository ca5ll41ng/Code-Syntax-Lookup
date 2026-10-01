---
id: "java-en-function-filepermission-newpermissioncollection"
language: "java"
lang: "en"
category: "function"
name: "FilePermission.newPermissionCollection"
signature: "public PermissionCollection newPermissionCollection()"
title: "FilePermission.newPermissionCollection"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/FilePermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FilePermission.newPermissionCollection

```java
public PermissionCollection newPermissionCollection()
```

Returns a new PermissionCollection object for storing FilePermission
 objects.
 

 FilePermission objects must be stored in a manner that allows them
 to be inserted into the collection in any order, but that also enables the
 PermissionCollection `implies`
 method to be implemented in an efficient (and consistent) manner.

 

For example, if you have two FilePermissions:
 
 
-   `"/tmp/-", "read"`
 
-   `"/tmp/scratch/foo", "write"`
 

 

and you are calling the `implies` method with the FilePermission:

 
```

     "/tmp/scratch/foo", "read,write",
 
```

 then the `implies` function must
 take into account both the "/tmp/-" and "/tmp/scratch/foo"
 permissions, so the effective permission is "read,write",
 and `implies` returns true. The "implies" semantics for
 FilePermissions are handled properly by the PermissionCollection object
 returned by this `newPermissionCollection` method.

**返回**

- a new PermissionCollection object suitable for storing FilePermissions.
