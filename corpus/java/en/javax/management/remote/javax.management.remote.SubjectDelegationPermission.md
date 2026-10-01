---
id: "java-en-function-javax-management-remote-subjectdelegationpermission"
language: "java"
lang: "en"
category: "function"
name: "javax.management.remote.SubjectDelegationPermission"
title: "SubjectDelegationPermission"
directive: "type"
module: "java.management/javax.management.remote"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/remote/SubjectDelegationPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SubjectDelegationPermission

Permission required by an authentication identity to perform
 operations on behalf of an authorization identity.

 

A SubjectDelegationPermission contains a name (also referred
 to as a "target name") but no actions list; you either have the
 named permission or you don't.

 

The target name is the name of the authorization principal
 classname followed by a period and the authorization principal
 name, that is
 "PrincipalClassName.PrincipalName".

 

An asterisk may appear by itself, or if immediately preceded
 by a "." may appear at the end of the target name, to signify a
 wildcard match.

 

For example, "*", "javax.management.remote.JMXPrincipal.*" and
 "javax.management.remote.JMXPrincipal.delegate" are valid target
 names. The first one denotes any principal name from any principal
 class, the second one denotes any principal name of the concrete
 principal class javax.management.remote.JMXPrincipal
 and the third one denotes a concrete principal name
 delegate of the concrete principal class
 javax.management.remote.JMXPrincipal.

 This permission cannot be used for controlling access to resources
 as the Security Manager is no longer supported.
 Consequently this class is deprecated for removal in a future release.

> *Since 1.5*

> **⚠ Deprecated** — This class was only useful in conjunction with the Security Manager, which is no longer supported. There is no replacement for this class.
