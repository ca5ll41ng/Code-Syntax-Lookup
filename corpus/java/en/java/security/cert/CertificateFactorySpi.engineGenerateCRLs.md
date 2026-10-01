---
id: "java-en-function-certificatefactoryspi-enginegeneratecrls"
language: "java"
lang: "en"
category: "function"
name: "CertificateFactorySpi.engineGenerateCRLs"
signature: "public abstract Collection<? extends CRL> engineGenerateCRLs (InputStream inStream) throws CRLException"
title: "CertificateFactorySpi.engineGenerateCRLs"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertificateFactorySpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertificateFactorySpi.engineGenerateCRLs

```java
public abstract Collection<? extends CRL> engineGenerateCRLs (InputStream inStream) throws CRLException
```

Returns a (possibly empty) collection view of the CRLs read
 from the given input stream `inStream`.

 

In order to take advantage of the specialized CRL format
 supported by this certificate factory, each element in
 the returned collection view can be typecast to the corresponding
 CRL class. For example, if this certificate
 factory implements X.509 CRLs, the elements in the returned
 collection can be typecast to the `X509CRL` class.

 

In the case of a certificate factory for X.509 CRLs,
 `inStream` may contain a single DER-encoded CRL.
 In addition, `inStream` may contain a PKCS#7 CRL
 set. This is a PKCS#7 SignedData object, with the only
 significant field being crls. In particular, the
 signature and the contents are ignored. This format allows multiple
 CRLs to be downloaded at once. If no CRLs are present,
 an empty collection is returned.

 

Note that if the given input stream does not support
 `mark(int) mark` and
 `reset() reset`, this method will
 consume the entire input stream.

**参数**

- **inStream** — the input stream with the CRLs.

**返回**

- a (possibly empty) collection view of java.security.cert.CRL objects initialized with the data from the input stream.

**异常**

- **CRLException** — on parsing errors.
