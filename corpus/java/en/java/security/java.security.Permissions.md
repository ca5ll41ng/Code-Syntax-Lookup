---
id: "java-en-function-java-security-permissions"
language: "java"
lang: "en"
category: "function"
name: "java.security.Permissions"
title: "Permissions"
directive: "type"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Permissions.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Permissions

This class represents a heterogeneous collection of permissions.
 That is, it contains different types of `Permission` objects,
 organized into `PermissionCollection` objects. For example, if any
 `java.io.FilePermission` objects are added to an instance of
 this class, they are all stored in a single `PermissionCollection`.
 It is the `PermissionCollection` returned by a call to
 the `newPermissionCollection` method in the `FilePermission`
 class. Similarly, any `java.lang.RuntimePermission` objects are
 stored in the `PermissionCollection` returned by a call to the
 `newPermissionCollection` method in the `RuntimePermission`
 class. Thus, this class represents a collection of
 `PermissionCollection` objects.

 

When the `add` method is called to add a `Permission`, the
 `Permission` is stored in the appropriate `PermissionCollection`.
 If no such collection exists yet, the `Permission` object's class is
 determined and the `newPermissionCollection` method is called on that
 class to create the `PermissionCollection` and add it to the
 `Permissions` object. If `newPermissionCollection` returns
 `null`, then a default `PermissionCollection` that uses a
 hashtable will be created and used. Each hashtable entry stores a
 `Permission` object as both the key and the value.

 

 Enumerations returned via the `elements` method are
 not fail-fast.  Modifications to a collection should not be
 performed while enumerating over that collection.

**参见**

- Permission
- PermissionCollection
- AllPermission

> *Since 1.2*
