---
id: "java-en-function-x509certificate-getserialnumber"
language: "java"
lang: "en"
category: "function"
name: "X509Certificate.getSerialNumber"
signature: "public abstract BigInteger getSerialNumber()"
title: "X509Certificate.getSerialNumber"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509Certificate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509Certificate.getSerialNumber

```java
public abstract BigInteger getSerialNumber()
```

Gets the `serialNumber` value from the certificate.
 The serial number is an integer assigned by the certification
 authority to each certificate. It must be unique for each
 certificate issued by a given CA (i.e., the issuer name and
 serial number identify a unique certificate).
 The ASN.1 definition for this is:
 
```

 serialNumber     CertificateSerialNumber

 CertificateSerialNumber  ::=  INTEGER
 
```

**返回**

- the serial number.
