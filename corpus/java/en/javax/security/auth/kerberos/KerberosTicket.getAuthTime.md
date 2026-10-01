---
id: "java-en-function-kerberosticket-getauthtime"
language: "java"
lang: "en"
category: "function"
name: "KerberosTicket.getAuthTime"
signature: "public final java.util.Date getAuthTime()"
title: "KerberosTicket.getAuthTime"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/KerberosTicket.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KerberosTicket.getAuthTime

```java
public final java.util.Date getAuthTime()
```

Returns the time that the client was authenticated.

**返回**

- the time that the client was authenticated or `null` if the field is not set or this ticket is destroyed.
