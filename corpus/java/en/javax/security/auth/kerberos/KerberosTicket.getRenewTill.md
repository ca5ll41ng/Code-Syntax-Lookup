---
id: "java-en-function-kerberosticket-getrenewtill"
language: "java"
lang: "en"
category: "function"
name: "KerberosTicket.getRenewTill"
signature: "public final java.util.Date getRenewTill()"
title: "KerberosTicket.getRenewTill"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/KerberosTicket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KerberosTicket.getRenewTill

```java
public final java.util.Date getRenewTill()
```

Returns the latest expiration time for this ticket, including all
 renewals. This will return a null value for non-renewable tickets.

**返回**

- the latest expiration time for this ticket, or `null` if destroyed.
