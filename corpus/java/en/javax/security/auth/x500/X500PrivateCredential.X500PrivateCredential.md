---
id: "java-en-function-x500privatecredential-x500privatecredential"
language: "java"
lang: "en"
category: "function"
name: "X500PrivateCredential.X500PrivateCredential"
signature: "public X500PrivateCredential(X509Certificate cert, PrivateKey key)"
title: "X500PrivateCredential.X500PrivateCredential"
directive: "method"
module: "java.base/javax.security.auth.x500"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/x500/X500PrivateCredential.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X500PrivateCredential.X500PrivateCredential

```java
public X500PrivateCredential(X509Certificate cert, PrivateKey key)
```

Creates an X500PrivateCredential that associates an X.509 certificate,
 a private key and the KeyStore alias.

**参数**

- **cert** — X509Certificate
- **key** — PrivateKey for the certificate

**异常**

- **IllegalArgumentException** — if either `cert` or `key` is null
