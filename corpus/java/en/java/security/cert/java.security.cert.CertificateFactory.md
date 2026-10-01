---
id: "java-en-function-java-security-cert-certificatefactory"
language: "java"
lang: "en"
category: "function"
name: "java.security.cert.CertificateFactory"
title: "CertificateFactory"
directive: "type"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertificateFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertificateFactory

This class defines the functionality of a certificate factory, which is
 used to generate certificate, certification path (`CertPath`)
 and certificate revocation list (CRL) objects from their encodings.

 

For encodings consisting of multiple certificates, use
 `generateCertificates` when you want to
 parse a collection of possibly unrelated certificates. Otherwise,
 use `generateCertPath` when you want to generate
 a `CertPath` (a certificate chain) and subsequently
 validate it with a `CertPathValidator`.

 

A certificate factory for X.509 must return certificates that are an
 instance of `java.security.cert.X509Certificate`, and CRLs
 that are an instance of `java.security.cert.X509CRL`.

 

The following example reads a file with Base64 encoded certificates,
 which are each bounded at the beginning by -----BEGIN CERTIFICATE-----, and
 bounded at the end by -----END CERTIFICATE-----. We convert the
 `FileInputStream` (which does not support `mark`
 and `reset`) to a `BufferedInputStream` (which
 supports those methods), so that each call to
 `generateCertificate` consumes only one certificate, and the
 read position of the input stream is positioned to the next certificate in
 the file:

 
```
`FileInputStream fis = new FileInputStream(filename);
 BufferedInputStream bis = new BufferedInputStream(fis);

 CertificateFactory cf = CertificateFactory.getInstance("X.509");

 while (bis.available() > 0) {
    Certificate cert = cf.generateCertificate(bis);
    System.out.println(cert.toString());
 `
 }
```

 

The following example parses a PKCS#7-formatted certificate reply stored
 in a file and extracts all the certificates from it:

 
```

 FileInputStream fis = new FileInputStream(filename);
 CertificateFactory cf = CertificateFactory.getInstance("X.509");
 Collection c = cf.generateCertificates(fis);
 Iterator i = c.iterator();
 while (i.hasNext()) {
    Certificate cert = (Certificate)i.next();
    System.out.println(cert);
 }
 
```

 

 Every implementation of the Java platform is required to support the
 following standard `CertificateFactory` type:
 
 
- `X.509`
 

 and the following standard `CertPath` encodings:
 
 
- `PKCS7`
 
- `PkiPath`
 

 The type and encodings are described in the 
 CertificateFactory section and the 
 CertPath Encodings section of the
 Java Security Standard Algorithm Names Specification.
 Consult the release documentation for your implementation to see if any
 other types or encodings are supported.

**参见**

- Certificate
- X509Certificate
- CertPath
- CRL
- X509CRL

> *Since 1.2*
