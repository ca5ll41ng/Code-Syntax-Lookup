---
id: "java-en-function-javax-security-auth-kerberos-servicepermission"
language: "java"
lang: "en"
category: "function"
name: "javax.security.auth.kerberos.ServicePermission"
title: "ServicePermission"
directive: "type"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/ServicePermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ServicePermission

A ServicePermission contains a service principal name and
 a list of actions which specify the context the credential can be
 used within.
 

 The service principal name is the canonical name of the
 `KerberosPrincipal` supplying the service, that is
 the KerberosPrincipal represents a Kerberos service
 principal. This name is treated in a case sensitive manner.
 An asterisk may appear by itself, to signify any service principal.
 

 The possible actions are:

 
```

    initiate -              allow the caller to use the credential to
                            initiate a security context with a service
                            principal.

    accept -                allow the caller to use the credential to
                            accept security context as a particular
                            principal.
 
```

> *Since 1.4*

> **⚠ Deprecated** — This permission cannot be used for controlling access to resources as the Security Manager is no longer supported.
