---
id: "java-en-function-javax-security-auth-kerberos-delegationpermission"
language: "java"
lang: "en"
category: "function"
name: "javax.security.auth.kerberos.DelegationPermission"
title: "DelegationPermission"
directive: "type"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/DelegationPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DelegationPermission

This class is for Kerberos delegation permissions.
 

 The target name of this `Permission` specifies a pair of
 kerberos service principals. The first is the subordinate service principal
 being entrusted to use the TGT. The second service principal designates
 the target service the subordinate service principal is to
 interact with on behalf of the initiating KerberosPrincipal. This
 latter service principal is specified to restrict the use of a
 proxiable ticket.

> *Since 1.4*

> **⚠ Deprecated** — This permission cannot be used for controlling access to resources as the Security Manager is no longer supported.
