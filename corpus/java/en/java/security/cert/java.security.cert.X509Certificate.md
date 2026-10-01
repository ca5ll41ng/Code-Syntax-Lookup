---
id: "java-en-function-java-security-cert-x509certificate"
language: "java"
lang: "en"
category: "function"
name: "java.security.cert.X509Certificate"
title: "X509Certificate"
directive: "type"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509Certificate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509Certificate

Abstract class for X.509 certificates. This provides a standard
 way to access all the attributes of an X.509 certificate.
 

 In June of 1996, the basic X.509 v3 format was completed by
 ISO/IEC and ANSI X9, which is described below in ASN.1:
 
```

 Certificate  ::=  SEQUENCE  {
     tbsCertificate       TBSCertificate,
     signatureAlgorithm   AlgorithmIdentifier,
     signature            BIT STRING  }
 
```

 

 These certificates are widely used to support authentication and
 other functionality in Internet security systems. Common applications
 include Privacy Enhanced Mail (PEM), Transport Layer Security (SSL),
 code signing for trusted software distribution, and Secure Electronic
 Transactions (SET).
 

 These certificates are managed and vouched for by Certificate
 Authorities (CAs). CAs are services which create certificates by
 placing data in the X.509 standard format and then digitally signing
 that data. CAs act as trusted third parties, making introductions
 between principals who have no direct knowledge of each other.
 CA certificates are either signed by themselves, or by some other
 CA such as a "root" CA.
 

 More information can be found in
 RFC 5280: Internet X.509
 Public Key Infrastructure Certificate and CRL Profile.
 

 The ASN.1 definition of `tbsCertificate` is:
 
```

 TBSCertificate  ::=  SEQUENCE  {
     version         [0]  EXPLICIT Version DEFAULT v1,
     serialNumber         CertificateSerialNumber,
     signature            AlgorithmIdentifier,
     issuer               Name,
     validity             Validity,
     subject              Name,
     subjectPublicKeyInfo SubjectPublicKeyInfo,
     issuerUniqueID  [1]  IMPLICIT UniqueIdentifier OPTIONAL,
                          -- If present, version must be v2 or v3
     subjectUniqueID [2]  IMPLICIT UniqueIdentifier OPTIONAL,
                          -- If present, version must be v2 or v3
     extensions      [3]  EXPLICIT Extensions OPTIONAL
                          -- If present, version must be v3
     }
 
```

 

 Certificates are instantiated using a certificate factory. The following is
 an example of how to instantiate an X.509 certificate:
 
```

 try (InputStream inStream = new FileInputStream("fileName-of-cert")) {
     CertificateFactory cf = CertificateFactory.getInstance("X.509");
     X509Certificate cert = (X509Certificate)cf.generateCertificate(inStream);
 }
 
```

      RFC 5280: Internet X.509 Public Key Infrastructure Certificate
              and Certificate Revocation List (CRL) Profile

**参见**

- Certificate
- CertificateFactory
- X509Extension

> *Since 1.2*
