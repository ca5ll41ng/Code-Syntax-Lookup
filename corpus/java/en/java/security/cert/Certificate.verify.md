---
id: "java-en-function-certificate-verify"
language: "java"
lang: "en"
category: "function"
name: "Certificate.verify"
signature: "public abstract void verify(PublicKey key) throws CertificateException, NoSuchAlgorithmException, InvalidKeyException, NoSuchProviderException, SignatureException"
title: "Certificate.verify"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/Certificate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Certificate.verify

```java
public abstract void verify(PublicKey key) throws CertificateException, NoSuchAlgorithmException, InvalidKeyException, NoSuchProviderException, SignatureException
```

Verifies that this certificate was signed using the
 private key that corresponds to the specified public key.

**参数**

- **key** — the PublicKey used to carry out the verification.

**异常**

- **NoSuchAlgorithmException** — on unsupported signature algorithms.
- **InvalidKeyException** — on incorrect key.
- **NoSuchProviderException** — if there's no default provider.
- **SignatureException** — on signature errors.
- **CertificateException** — on encoding errors.
