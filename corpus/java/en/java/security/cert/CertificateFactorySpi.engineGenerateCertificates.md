---
id: "java-en-function-certificatefactoryspi-enginegeneratecertificates"
language: "java"
lang: "en"
category: "function"
name: "CertificateFactorySpi.engineGenerateCertificates"
signature: "public abstract Collection<? extends Certificate> engineGenerateCertificates(InputStream inStream) throws CertificateException"
title: "CertificateFactorySpi.engineGenerateCertificates"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertificateFactorySpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertificateFactorySpi.engineGenerateCertificates

```java
public abstract Collection<? extends Certificate> engineGenerateCertificates(InputStream inStream) throws CertificateException
```

Returns a (possibly empty) collection view of the certificates read
 from the given input stream `inStream`.

 

In order to take advantage of the specialized certificate format
 supported by this certificate factory, each element in
 the returned collection view can be typecast to the corresponding
 certificate class. For example, if this certificate
 factory implements X.509 certificates, the elements in the returned
 collection can be typecast to the `X509Certificate` class.

 

In the case of a certificate factory for X.509 certificates,
 `inStream` may contain a single DER-encoded certificate
 in the formats described for
 `generateCertificate(java.io.InputStream)
 generateCertificate`.
 In addition, `inStream` may contain a PKCS#7 certificate
 chain. This is a PKCS#7 SignedData object, with the only
 significant field being certificates. In particular, the
 signature and the contents are ignored. This format allows multiple
 certificates to be downloaded at once. If no certificates are present,
 an empty collection is returned.

 

Note that if the given input stream does not support
 `mark(int) mark` and
 `reset() reset`, this method will
 consume the entire input stream.

**参数**

- **inStream** — the input stream with the certificates.

**返回**

- a (possibly empty) collection view of java.security.cert.Certificate objects initialized with the data from the input stream.

**异常**

- **CertificateException** — on parsing errors.
