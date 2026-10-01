---
id: "java-en-function-keypair-keypair"
language: "java"
lang: "en"
category: "function"
name: "KeyPair.KeyPair"
signature: "public KeyPair(PublicKey publicKey, PrivateKey privateKey)"
title: "KeyPair.KeyPair"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyPair.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyPair.KeyPair

```java
public KeyPair(PublicKey publicKey, PrivateKey privateKey)
```

Constructs a key pair from the given public key and private key.

 

Note that this constructor only stores references to the public
 and private key components in the generated key pair. This is safe,
 because `Key` objects are immutable.

**参数**

- **publicKey** — the public key.
- **privateKey** — the private key.
