---
id: "java-en-function-permissions-implies"
language: "java"
lang: "en"
category: "function"
name: "Permissions.implies"
signature: "public boolean implies(Permission permission)"
title: "Permissions.implies"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Permissions.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Permissions.implies

```java
public boolean implies(Permission permission)
```

Checks to see if this object's `PermissionCollection` for
 permissions of the specified permission's class implies the permissions
 expressed in the permission object. Returns `true` if the
 combination of permissions in the appropriate
 `PermissionCollection` (e.g., a `FilePermissionCollection`
 for a `FilePermission`) together imply the specified permission.

 

For example, suppose there is a `FilePermissionCollection`
 in this `Permissions` object, and it contains one
 `FilePermission` that specifies "read" access for all files
 in all subdirectories of the "/tmp" directory, and another
 `FilePermission` that specifies "write" access for all files
 in the "/tmp/scratch/foo" directory. Then if the `implies` method
 is called with a permission specifying both "read" and "write" access
 to files in the "/tmp/scratch/foo" directory, `true` is
 returned.

 

Additionally, if this `PermissionCollection` contains the
 `AllPermission`, this method will always return `true`.

**参数**

- **permission** — the `Permission` object to check.

**返回**

- `true` if "permission" is implied by the permissions in the `PermissionCollection` it belongs to, `false` if not.
