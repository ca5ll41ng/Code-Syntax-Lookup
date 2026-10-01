---
id: "java-en-function-java-security-securitypermission"
language: "java"
lang: "en"
category: "function"
name: "java.security.SecurityPermission"
title: "SecurityPermission"
directive: "type"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/SecurityPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecurityPermission

This class is for security permissions. A `SecurityPermission`
 contains a name (also referred to as a "target name") but no actions list;
 you either have the named permission or you don't.
 

 The target name is the name of a security configuration parameter.

**参见**

- java.security.BasicPermission
- java.security.Permission
- java.security.Permissions
- java.security.PermissionCollection
- java.lang.SecurityManager

> *Since 1.2*

> **⚠ Deprecated** — This permission cannot be used for controlling access to resources as the Security Manager is no longer supported.
