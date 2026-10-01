---
id: "java-en-function-javax-net-ssl-sslpermission"
language: "java"
lang: "en"
category: "function"
name: "javax.net.ssl.SSLPermission"
title: "SSLPermission"
directive: "type"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLPermission

This class is for various network permissions.
 An SSLPermission contains a name (also referred to as a "target name") but
 no actions list; you either have the named permission
 or you don't.
 

 The target name is the name of the network permission. The naming
 convention follows the  hierarchical property naming convention.
 Also, an asterisk
 may appear at the end of the name, following a ".", or by itself, to
 signify a wildcard match. For example: "foo.*" and "*" signify a wildcard
 match, while "*foo" and "a*b" do not.

**参见**

- java.security.BasicPermission
- java.security.Permission
- java.security.Permissions
- java.security.PermissionCollection
- java.lang.SecurityManager

> *Since 1.4*

> **⚠ Deprecated** — This permission cannot be used for controlling access to resources as the Security Manager is no longer supported.
