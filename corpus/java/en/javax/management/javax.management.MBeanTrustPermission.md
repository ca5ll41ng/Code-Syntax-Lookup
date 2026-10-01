---
id: "java-en-function-javax-management-mbeantrustpermission"
language: "java"
lang: "en"
category: "function"
name: "javax.management.MBeanTrustPermission"
title: "MBeanTrustPermission"
directive: "type"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanTrustPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanTrustPermission

This permission represents "trust" in a signer or codebase.
 

 MBeanTrustPermission contains a target name but no actions list.
 A single target name, "register", is defined for this permission.
 The target "*" is also allowed, permitting "register" and any future
 targets that may be defined.
 Only the null value or the empty string are allowed for the action
 to allow the policy object to create the permissions specified in
 the policy file.

 This permission cannot be used for controlling access to resources
 as the Security Manager is no longer supported.
 Consequently this class is deprecated for removal in a future release.

> *Since 1.5*

> **⚠ Deprecated** — This class was only useful in conjunction with the Security Manager, which is no longer supported. There is no replacement for this class.
