---
id: "java-en-function-certificatefactory-generatecrl"
language: "java"
lang: "en"
category: "function"
name: "CertificateFactory.generateCRL"
signature: "public final CRL generateCRL(InputStream inStream) throws CRLException"
title: "CertificateFactory.generateCRL"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertificateFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertificateFactory.generateCRL

```java
public final CRL generateCRL(InputStream inStream) throws CRLException
```

Generates a certificate revocation list (CRL) object and initializes it
 with the data read from the input stream `inStream`.

 

In order to take advantage of the specialized CRL format
 supported by this certificate factory,
 the returned CRL object can be typecast to the corresponding
 CRL class. For example, if this certificate
 factory implements X.509 CRLs, the returned CRL object
 can be typecast to the `X509CRL` class.

 

Note that if the given input stream does not support
 `mark(int) mark` and
 `reset() reset`, this method will
 consume the entire input stream. Otherwise, each call to this
 method consumes one CRL and the read position of the input stream
 is positioned to the next available byte after the inherent
 end-of-CRL marker. If the data in the
 input stream does not contain an inherent end-of-CRL marker (other
 than EOF) and there is trailing data after the CRL is parsed, a
 `CRLException` is thrown.

**参数**

- **inStream** — an input stream with the CRL data.

**返回**

- a CRL object initialized with the data from the input stream.

**异常**

- **CRLException** — on parsing errors.
