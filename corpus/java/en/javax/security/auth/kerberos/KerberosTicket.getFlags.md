---
id: "java-en-function-kerberosticket-getflags"
language: "java"
lang: "en"
category: "function"
name: "KerberosTicket.getFlags"
signature: "public final boolean[] getFlags()"
title: "KerberosTicket.getFlags"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/KerberosTicket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KerberosTicket.getFlags

```java
public final boolean[] getFlags()
```

Returns the flags associated with this ticket. Each element in the
 returned array indicates the value for the corresponding bit in the
 ASN.1 BitString that represents the ticket flags.

**返回**

- the flags associated with this ticket, or `null` if destroyed.
