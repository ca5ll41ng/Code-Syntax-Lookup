---
id: "java-en-function-kerberosticket-getclient"
language: "java"
lang: "en"
category: "function"
name: "KerberosTicket.getClient"
signature: "public final KerberosPrincipal getClient()"
title: "KerberosTicket.getClient"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/KerberosTicket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KerberosTicket.getClient

```java
public final KerberosPrincipal getClient()
```

Returns the client principal associated with this ticket.

**返回**

- the client principal, or `null` if destroyed.
