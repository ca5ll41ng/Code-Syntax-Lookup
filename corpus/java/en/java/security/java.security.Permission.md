---
id: "java-en-function-java-security-permission"
language: "java"
lang: "en"
category: "function"
name: "java.security.Permission"
title: "Permission"
directive: "type"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Permission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Permission

Abstract class for representing access to a system resource.
 All permissions have a name (whose interpretation depends on the subclass),
 as well as abstract functions for defining the semantics of the
 particular Permission subclass.

 

Most `Permission` objects also include an "actions" list that
 tells the actions that are permitted for the object.  For example,
 for a `java.io.FilePermission` object, the permission name is
 the pathname of a file (or directory), and the actions list
 (such as "read, write") specifies which actions are granted for the
 specified file (or for files in the specified directory).
 The actions list is optional for `Permission` objects, such as
 `java.lang.RuntimePermission`,
 that don't need such a list; you either have the named permission (such
 as "system.exit") or you don't.

 

An important method that must be implemented by each subclass is
 the `implies` method to compare Permissions. Basically,
 "permission p1 implies permission p2" means that
 if one is granted permission p1, one is naturally granted permission p2.
 Thus, this is not an equality test, but rather more of a
 subset test.

 

 `Permission` objects are similar to `String` objects
 in that they are immutable once they have been created. Subclasses should not
 provide methods that can change the state of a permission
 once it has been created.

**参见**

- Permissions
- PermissionCollection

> *Since 1.2*
