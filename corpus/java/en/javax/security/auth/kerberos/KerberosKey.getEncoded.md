---
id: "java-en-function-kerberoskey-getencoded"
language: "java"
lang: "en"
category: "function"
name: "KerberosKey.getEncoded"
signature: "public final byte[] getEncoded()"
title: "KerberosKey.getEncoded"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/KerberosKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KerberosKey.getEncoded

```java
public final byte[] getEncoded()
```

Returns the key material of this secret key.

**返回**

- the key material

**异常**

- **IllegalStateException** — if the key is destroyed
