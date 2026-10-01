---
id: "java-en-function-x509crl-verify"
language: "java"
lang: "en"
category: "function"
name: "X509CRL.verify"
signature: "public abstract void verify(PublicKey key) throws CRLException, NoSuchAlgorithmException, InvalidKeyException, NoSuchProviderException, SignatureException"
title: "X509CRL.verify"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CRL.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CRL.verify

```java
public abstract void verify(PublicKey key) throws CRLException, NoSuchAlgorithmException, InvalidKeyException, NoSuchProviderException, SignatureException
```

Verifies that this CRL was signed using the
 private key that corresponds to the given public key.

**参数**

- **key** — the PublicKey used to carry out the verification.

**异常**

- **NoSuchAlgorithmException** — on unsupported signature algorithms.
- **InvalidKeyException** — on incorrect key.
- **NoSuchProviderException** — if there's no default provider.
- **SignatureException** — on signature errors.
- **CRLException** — on encoding errors.
