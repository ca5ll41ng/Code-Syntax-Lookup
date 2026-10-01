---
id: "java-en-function-x509certificate-verify"
language: "java"
lang: "en"
category: "function"
name: "X509Certificate.verify"
signature: "public void verify(PublicKey key, Provider sigProvider) throws CertificateException, NoSuchAlgorithmException, InvalidKeyException, SignatureException"
title: "X509Certificate.verify"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509Certificate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509Certificate.verify

```java
public void verify(PublicKey key, Provider sigProvider) throws CertificateException, NoSuchAlgorithmException, InvalidKeyException, SignatureException
```

Verifies that this certificate was signed using the
 private key that corresponds to the specified public key.
 This method uses the signature verification engine
 supplied by the specified provider. Note that the specified
 Provider object does not have to be registered in the provider list.

 This method was added to version 1.8 of the Java Platform Standard
 Edition. In order to maintain backwards compatibility with existing
 service providers, this method is not `abstract`
 and it provides a default implementation.

**参数**

- **key** — the PublicKey used to carry out the verification.
- **sigProvider** — the signature provider.

**异常**

- **NoSuchAlgorithmException** — on unsupported signature algorithms.
- **InvalidKeyException** — on incorrect key.
- **SignatureException** — on signature errors.
- **CertificateException** — on encoding errors.
- **UnsupportedOperationException** — if the method is not supported

> *Since 1.8*
