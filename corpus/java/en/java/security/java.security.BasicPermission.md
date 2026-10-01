---
id: "java-en-function-java-security-basicpermission"
language: "java"
lang: "en"
category: "function"
name: "java.security.BasicPermission"
title: "BasicPermission"
directive: "type"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/BasicPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BasicPermission

The `BasicPermission` class extends the `Permission` class, and
 can be used as the base class for permissions that want to
 follow the same naming convention as `BasicPermission`.
 

 The name for a `BasicPermission` is the name of the given permission
 (for example, "exit",
 "setFactory", "print.queueJob", etc.). The naming
 convention follows the  hierarchical property naming convention.
 An asterisk may appear by itself, or if immediately preceded by a "."
 may appear at the end of the name, to signify a wildcard match.
 For example, "*" and "java.*" signify a wildcard match, while "*java", "a*b",
 and "java*" do not.
 

 The action string (inherited from `Permission`) is unused.
 Thus, `BasicPermission` is commonly used as the base class for
 "named" permissions
 (ones that contain a name but no actions list; you either have the
 named permission or you don't.)
 Subclasses may implement actions on top of `BasicPermission`,
 if desired.

**参见**

- java.security.Permission
- java.security.Permissions
- java.security.PermissionCollection
- java.lang.SecurityManager

> *Since 1.2*
