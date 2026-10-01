---
id: "java-en-function-signature-initverify"
language: "java"
lang: "en"
category: "function"
name: "Signature.initVerify"
signature: "public final void initVerify(PublicKey publicKey) throws InvalidKeyException"
title: "Signature.initVerify"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Signature.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Signature.initVerify

```java
public final void initVerify(PublicKey publicKey) throws InvalidKeyException
```

Initializes this object for verification. If this method is called
 again with a different argument, it negates the effect
 of this call.

**参数**

- **publicKey** — the public key of the identity whose signature is going to be verified.

**异常**

- **InvalidKeyException** — if the key is invalid.
