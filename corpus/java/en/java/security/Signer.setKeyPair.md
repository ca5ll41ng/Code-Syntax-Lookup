---
id: "java-en-function-signer-setkeypair"
language: "java"
lang: "en"
category: "function"
name: "Signer.setKeyPair"
signature: "public final void setKeyPair(KeyPair pair) throws InvalidParameterException, KeyException"
title: "Signer.setKeyPair"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Signer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Signer.setKeyPair

```java
public final void setKeyPair(KeyPair pair) throws InvalidParameterException, KeyException
```

Sets the key pair (public key and private key) for this `Signer`.

**参数**

- **pair** — an initialized key pair.

**异常**

- **InvalidParameterException** — if the key pair is not properly initialized.
- **KeyException** — if the key pair cannot be set for any other reason.
