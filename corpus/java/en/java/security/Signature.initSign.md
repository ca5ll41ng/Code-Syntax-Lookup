---
id: "java-en-function-signature-initsign"
language: "java"
lang: "en"
category: "function"
name: "Signature.initSign"
signature: "public final void initSign(PrivateKey privateKey) throws InvalidKeyException"
title: "Signature.initSign"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Signature.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Signature.initSign

```java
public final void initSign(PrivateKey privateKey) throws InvalidKeyException
```

Initialize this object for signing. If this method is called
 again with a different argument, it negates the effect
 of this call.

**参数**

- **privateKey** — the private key of the identity whose signature is going to be generated.

**异常**

- **InvalidKeyException** — if the key is invalid.
