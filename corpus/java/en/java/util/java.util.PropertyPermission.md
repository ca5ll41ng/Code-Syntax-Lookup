---
id: "java-en-function-java-util-propertypermission"
language: "java"
lang: "en"
category: "function"
name: "java.util.PropertyPermission"
title: "PropertyPermission"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/PropertyPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PropertyPermission

This class is for property permissions.

 

 The name is the name of the property ("java.home",
 "os.name", etc). The naming
 convention follows the  hierarchical property naming convention.
 Also, an asterisk
 may appear at the end of the name, following a ".", or by itself, to
 signify a wildcard match. For example: "java.*" and "*" signify a wildcard
 match, while "*java" and "a*b" do not.
 

 The actions are passed to the constructor in a string containing
 a list of one or more comma-separated keywords. The possible keywords are
 "read" and "write".
 

 The actions string is converted to lowercase before processing.

**参见**

- java.security.BasicPermission
- java.security.Permission
- java.security.Permissions
- java.security.PermissionCollection
- java.lang.SecurityManager

> *Since 1.2*

> **⚠ Deprecated** — This permission cannot be used for controlling access to resources as the Security Manager is no longer supported.
