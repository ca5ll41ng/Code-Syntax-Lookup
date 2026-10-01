---
id: "java-en-function-kerberoscredmessage-getencoded"
language: "java"
lang: "en"
category: "function"
name: "KerberosCredMessage.getEncoded"
signature: "public byte[] getEncoded()"
title: "KerberosCredMessage.getEncoded"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/KerberosCredMessage.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KerberosCredMessage.getEncoded

```java
public byte[] getEncoded()
```

Returns the DER encoded form of the KRB_CRED message.

**返回**

- a newly allocated byte array that contains the encoded form

**异常**

- **IllegalStateException** — if the object is destroyed
