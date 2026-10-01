---
id: "java-en-function-certificatefactory-generatecertificate"
language: "java"
lang: "en"
category: "function"
name: "CertificateFactory.generateCertificate"
signature: "public final Certificate generateCertificate(InputStream inStream) throws CertificateException"
title: "CertificateFactory.generateCertificate"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertificateFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertificateFactory.generateCertificate

```java
public final Certificate generateCertificate(InputStream inStream) throws CertificateException
```

Generates a certificate object and initializes it with
 the data read from the input stream `inStream`.

 

In order to take advantage of the specialized certificate format
 supported by this certificate factory,
 the returned certificate object can be typecast to the corresponding
 certificate class. For example, if this certificate
 factory implements X.509 certificates, the returned certificate object
 can be typecast to the `X509Certificate` class.

 

In the case of a certificate factory for X.509 certificates, the
 certificate provided in `inStream` must be DER-encoded and
 may be supplied in binary or printable (Base64) encoding. If the
 certificate is provided in Base64 encoding, it must be bounded at
 the beginning by -----BEGIN CERTIFICATE-----, and must be bounded at
 the end by -----END CERTIFICATE-----.

 

Note that if the given input stream does not support
 `mark(int) mark` and
 `reset() reset`, this method will
 consume the entire input stream. Otherwise, each call to this
 method consumes one certificate and the read position of the
 input stream is positioned to the next available byte after
 the inherent end-of-certificate marker. If the data in the input stream
 does not contain an inherent end-of-certificate marker (other
 than EOF) and there is trailing data after the certificate is parsed, a
 `CertificateException` is thrown.

**参数**

- **inStream** — an input stream with the certificate data.

**返回**

- a certificate object initialized with the data from the input stream.

**异常**

- **CertificateException** — on parsing errors.
