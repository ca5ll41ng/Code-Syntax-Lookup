---
id: "java-en-function-kerberosticket-isinitial"
language: "java"
lang: "en"
category: "function"
name: "KerberosTicket.isInitial"
signature: "public final boolean isInitial()"
title: "KerberosTicket.isInitial"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/KerberosTicket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KerberosTicket.isInitial

```java
public final boolean isInitial()
```

Determines if this ticket was issued using the Kerberos AS-Exchange
 protocol, and not issued based on some ticket-granting ticket.

**返回**

- true if this ticket was issued using the Kerberos AS-Exchange protocol, or false if not issued this way or destroyed.
