---
id: "java-en-function-kerberosticket-getserver"
language: "java"
lang: "en"
category: "function"
name: "KerberosTicket.getServer"
signature: "public final KerberosPrincipal getServer()"
title: "KerberosTicket.getServer"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/KerberosTicket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KerberosTicket.getServer

```java
public final KerberosPrincipal getServer()
```

Returns the service principal associated with this ticket.

**返回**

- the service principal, or `null` if destroyed.
