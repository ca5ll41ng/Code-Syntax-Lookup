---
id: "java-en-function-kerberoscredmessage-kerberoscredmessage"
language: "java"
lang: "en"
category: "function"
name: "KerberosCredMessage.KerberosCredMessage"
signature: "public KerberosCredMessage(KerberosPrincipal sender, KerberosPrincipal recipient, byte[] message)"
title: "KerberosCredMessage.KerberosCredMessage"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/KerberosCredMessage.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KerberosCredMessage.KerberosCredMessage

```java
public KerberosCredMessage(KerberosPrincipal sender, KerberosPrincipal recipient, byte[] message)
```

Constructs a `KerberosCredMessage` object.
 

 The contents of the `message` argument are copied; subsequent
 modification of the byte array does not affect the newly created object.

**参数**

- **sender** — the sender of the message
- **recipient** — the recipient of the message
- **message** — the DER encoded KRB_CRED message

**异常**

- **NullPointerException** — if any of sender, recipient or message is null
