---
id: "java-en-function-java-lang-runtimepermission"
language: "java"
lang: "en"
category: "function"
name: "java.lang.RuntimePermission"
title: "RuntimePermission"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/RuntimePermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RuntimePermission

This class is for runtime permissions. A `RuntimePermission`
 contains a name (also referred to as a "target name") but no actions
 list; you either have the named permission or you don't.
 

 The target name is the name of the runtime permission. The naming convention
 follows the hierarchical property naming convention, typically the reverse
 domain name notation, to avoid name clashes.
 An asterisk may appear at the end of the name, following a ".",
 or by itself, to signify a wildcard match. For example: "loadLibrary.*"
 and "*" signify a wildcard match, while "*loadLibrary" and "a*b" do not.

**参见**

- java.security.BasicPermission
- java.security.Permission
- java.security.Permissions
- java.security.PermissionCollection
- java.lang.SecurityManager

> *Since 1.2*

> **⚠ Deprecated** — This permission cannot be used for controlling access to resources as the Security Manager is no longer supported.
