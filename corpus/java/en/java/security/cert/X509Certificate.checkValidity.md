---
id: "java-en-function-x509certificate-checkvalidity"
language: "java"
lang: "en"
category: "function"
name: "X509Certificate.checkValidity"
signature: "public abstract void checkValidity() throws CertificateExpiredException, CertificateNotYetValidException"
title: "X509Certificate.checkValidity"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509Certificate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509Certificate.checkValidity

```java
public abstract void checkValidity() throws CertificateExpiredException, CertificateNotYetValidException
```

Checks that the certificate is currently valid. It is if
 the current date and time are within the validity period given in the
 certificate.
 

 The validity period consists of two date/time values:
 the first and last dates (and times) on which the certificate
 is valid. It is defined in
 ASN.1 as:
 
```

 validity             Validity

 Validity ::= SEQUENCE {
     notBefore      CertificateValidityDate,
     notAfter       CertificateValidityDate }

 CertificateValidityDate ::= CHOICE {
     utcTime        UTCTime,
     generalTime    GeneralizedTime }
 
```

**异常**

- **CertificateExpiredException** — if the certificate has expired.
- **CertificateNotYetValidException** — if the certificate is not yet valid.
