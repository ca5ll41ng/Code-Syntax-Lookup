---
id: "java-en-function-encryptionkey-getencoded"
language: "java"
lang: "en"
category: "function"
name: "EncryptionKey.getEncoded"
signature: "public byte[] getEncoded()"
title: "EncryptionKey.getEncoded"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/EncryptionKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EncryptionKey.getEncoded

```java
public byte[] getEncoded()
```

Returns the key material of this key.

**返回**

- a newly allocated byte array that contains the key material

**异常**

- **IllegalStateException** — if the key is destroyed
