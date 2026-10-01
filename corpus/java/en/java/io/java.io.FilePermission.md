---
id: "java-en-function-java-io-filepermission"
language: "java"
lang: "en"
category: "function"
name: "java.io.FilePermission"
title: "FilePermission"
directive: "type"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/FilePermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FilePermission

This class represents access to a file or directory.  A FilePermission consists
 of a pathname and a set of actions valid for that pathname.
 

 Pathname is the pathname of the file or directory granted the specified
 actions. A pathname that ends in "/*" (where "/" is
 the file separator character, `File.separatorChar`) indicates
 all the files and directories contained in that directory. A pathname
 that ends with "/-" indicates (recursively) all files
 and subdirectories contained in that directory. Such a pathname is called
 a wildcard pathname. Otherwise, it's a simple pathname.
 

 A pathname consisting of the special token "<>"
 matches **any** file.
 

 Note: A pathname consisting of a single "*" indicates all the files
 in the current directory, while a pathname consisting of a single "-"
 indicates all the files in the current directory and
 (recursively) all files and subdirectories contained in the current
 directory.
 

 The actions are passed to the constructor in a string containing
 a list of one or more comma-separated keywords. The possible keywords are
 "read", "write", "execute", "delete", and "readlink".
 

 The actions string is converted to lowercase before processing.

**参见**

- java.security.Permission
- java.security.Permissions
- java.security.PermissionCollection

> *Since 1.2*

> **⚠ Deprecated** — This permission cannot be used for controlling access to resources as the Security Manager is no longer supported.
