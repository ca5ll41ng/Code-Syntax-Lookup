---
id: "java-en-function-javax-security-auth-privatecredentialpermission"
language: "java"
lang: "en"
category: "function"
name: "javax.security.auth.PrivateCredentialPermission"
title: "PrivateCredentialPermission"
directive: "type"
module: "java.base/javax.security.auth"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/PrivateCredentialPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PrivateCredentialPermission

This class is used to protect access to private Credentials
 belonging to a particular `Subject`.  The `Subject`
 is represented by a Set of Principals.

 

 The target name of this `Permission` specifies
 a Credential class name, and a Set of Principals.
 The only valid value for this Permission's actions is, "read".
 The target name must abide by the following syntax:

 
```

      CredentialClass {PrincipalClass "PrincipalName"}*
 
```

> *Since 1.4*

> **⚠ Deprecated** — This permission cannot be used for controlling access to resources as the Security Manager is no longer supported.
