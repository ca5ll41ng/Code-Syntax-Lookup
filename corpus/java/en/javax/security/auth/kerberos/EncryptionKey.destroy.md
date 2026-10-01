---
id: "java-en-function-encryptionkey-destroy"
language: "java"
lang: "en"
category: "function"
name: "EncryptionKey.destroy"
signature: "public void destroy() throws DestroyFailedException"
title: "EncryptionKey.destroy"
directive: "method"
module: "java.security.jgss/javax.security.auth.kerberos"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/javax/security/auth/kerberos/EncryptionKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EncryptionKey.destroy

```java
public void destroy() throws DestroyFailedException
```

Destroys this key by clearing out the key material of this key.

**异常**

- **DestroyFailedException** — if some error occurs while destroying this key.
