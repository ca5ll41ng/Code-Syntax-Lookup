---
id: "java-en-function-kerberosticket-getencoded"
language: "java"
lang: "en"
category: "function"
name: "KerberosTicket.getEncoded"
signature: "public final byte[] getEncoded()"
title: "KerberosTicket.getEncoded"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/KerberosTicket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KerberosTicket.getEncoded

```java
public final byte[] getEncoded()
```

Returns an ASN.1 encoding of the entire ticket.

**返回**

- an ASN.1 encoding of the entire ticket. A new byte array is returned each time this method is called.

**异常**

- **IllegalStateException** — if this ticket is destroyed
