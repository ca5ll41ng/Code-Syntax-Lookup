---
id: "java-en-function-kerberosticket-getsessionkeytype"
language: "java"
lang: "en"
category: "function"
name: "KerberosTicket.getSessionKeyType"
signature: "public final int getSessionKeyType()"
title: "KerberosTicket.getSessionKeyType"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/KerberosTicket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KerberosTicket.getSessionKeyType

```java
public final int getSessionKeyType()
```

Returns the key type of the session key associated with this
 ticket as defined by the Kerberos Protocol Specification.

**返回**

- the key type of the session key associated with this ticket.

**异常**

- **IllegalStateException** — if this ticket is destroyed

**参见**

- #getSessionKey()
