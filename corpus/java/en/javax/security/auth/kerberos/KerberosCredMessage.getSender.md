---
id: "java-en-function-kerberoscredmessage-getsender"
language: "java"
lang: "en"
category: "function"
name: "KerberosCredMessage.getSender"
signature: "public KerberosPrincipal getSender()"
title: "KerberosCredMessage.getSender"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/KerberosCredMessage.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KerberosCredMessage.getSender

```java
public KerberosPrincipal getSender()
```

Returns the sender of this message.

**返回**

- the sender

**异常**

- **IllegalStateException** — if the object is destroyed
