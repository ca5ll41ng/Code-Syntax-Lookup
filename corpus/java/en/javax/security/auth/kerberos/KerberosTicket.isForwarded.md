---
id: "java-en-function-kerberosticket-isforwarded"
language: "java"
lang: "en"
category: "function"
name: "KerberosTicket.isForwarded"
signature: "public final boolean isForwarded()"
title: "KerberosTicket.isForwarded"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/KerberosTicket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KerberosTicket.isForwarded

```java
public final boolean isForwarded()
```

Determines if this ticket had been forwarded or was issued based on
 authentication involving a forwarded ticket-granting ticket.

**返回**

- true if this ticket had been forwarded or was issued based on authentication involving a forwarded ticket-granting ticket, or false otherwise or destroyed.
