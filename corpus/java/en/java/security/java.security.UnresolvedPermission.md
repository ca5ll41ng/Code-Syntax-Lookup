---
id: "java-en-function-java-security-unresolvedpermission"
language: "java"
lang: "en"
category: "function"
name: "java.security.UnresolvedPermission"
title: "UnresolvedPermission"
directive: "type"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/UnresolvedPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UnresolvedPermission

The `UnresolvedPermission` class used to hold Permissions that were
 "unresolved" when the `Policy` was initialized. Installing a
 system-wide `Policy` object is no longer supported.

**参见**

- java.security.Permission
- java.security.Permissions
- java.security.PermissionCollection
- java.security.Policy

> *Since 1.2*

> **⚠ Deprecated** — This permission cannot be used for controlling access to resources as the Security Manager is no longer supported.
