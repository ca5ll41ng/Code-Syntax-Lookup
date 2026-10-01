---
id: "java-en-function-servicepermission-servicepermission"
language: "java"
lang: "en"
category: "function"
name: "ServicePermission.ServicePermission"
signature: "public ServicePermission(String servicePrincipal, String action)"
title: "ServicePermission.ServicePermission"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/ServicePermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ServicePermission.ServicePermission

```java
public ServicePermission(String servicePrincipal, String action)
```

Create a new `ServicePermission`
 with the specified `servicePrincipal`
 and `action`.

**参数**

- **servicePrincipal** — the name of the service principal. An asterisk may appear by itself, to signify any service principal.
- **action** — the action string
