---
id: "java-en-function-kerberosticket-getsessionkey"
language: "java"
lang: "en"
category: "function"
name: "KerberosTicket.getSessionKey"
signature: "public final SecretKey getSessionKey()"
title: "KerberosTicket.getSessionKey"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/KerberosTicket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KerberosTicket.getSessionKey

```java
public final SecretKey getSessionKey()
```

Returns the session key associated with this ticket. The return value
 is always a `EncryptionKey` object.

**返回**

- the session key.

**异常**

- **IllegalStateException** — if this ticket is destroyed
