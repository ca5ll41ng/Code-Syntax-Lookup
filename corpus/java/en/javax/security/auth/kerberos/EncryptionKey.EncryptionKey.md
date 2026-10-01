---
id: "java-en-function-encryptionkey-encryptionkey"
language: "java"
lang: "en"
category: "function"
name: "EncryptionKey.EncryptionKey"
signature: "public EncryptionKey(byte[] keyBytes, int keyType)"
title: "EncryptionKey.EncryptionKey"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/EncryptionKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EncryptionKey.EncryptionKey

```java
public EncryptionKey(byte[] keyBytes, int keyType)
```

Constructs an `EncryptionKey` from the given bytes and
 the key type.
 

 The contents of the byte array are copied; subsequent modification of
 the byte array does not affect the newly created key.

**参数**

- **keyBytes** — the key material for the key
- **keyType** — the key type for the key as defined by the Kerberos protocol specification.

**异常**

- **NullPointerException** — if keyBytes is null
