---
id: "java-en-function-javax-security-cert-x509certificate"
language: "java"
lang: "en"
category: "function"
name: "javax.security.cert.X509Certificate"
title: "X509Certificate"
directive: "type"
module: "java.base/javax.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/cert/X509Certificate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509Certificate

Abstract class for X.509 v1 certificates. This provides a standard
 way to access all the version 1 attributes of an X.509 certificate.
 Attributes that are specific to X.509 v2 or v3 are not available
 through this interface. Future API evolution will provide full access to
 complete X.509 v3 attributes.
 

 The basic X.509 format was defined by
 ISO/IEC and ANSI X9 and is described below in ASN.1:
 
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
     }
 
```

 

 Here is sample code to instantiate an X.509 certificate:
 
```

 InputStream inStream = new FileInputStream("fileName-of-cert");
 X509Certificate cert = X509Certificate.getInstance(inStream);
 inStream.close();
 
```

 OR
 
```

 byte[] certData = &lt;certificate read from a file, say&gt;
 X509Certificate cert = X509Certificate.getInstance(certData);
 
```

 

 In either case, the code that instantiates an X.509 certificate
 consults the value of the `cert.provider.x509v1` security property
 to locate the actual implementation or instantiates a default implementation.
 

 The `cert.provider.x509v1` property is set to a default
 implementation for X.509 such as:
 
```

 cert.provider.x509v1=com.sun.security.cert.internal.x509.X509V1CertImpl
 
```

 

 The value of this `cert.provider.x509v1` property has to be
 changed to instantiate another implementation. If this security
 property is not set, a default implementation will be used.
 Currently, due to possible security restrictions on access to
 Security properties, this value is looked up and cached at class
 initialization time and will fallback on a default implementation if
 the Security property is not accessible.

 

Note: The classes in the package `javax.security.cert`
 exist for compatibility with earlier versions of the
 Java Secure Sockets Extension (JSSE). New applications should instead
 use the standard Java SE certificate classes located in
 `java.security.cert`.

**参见**

- Certificate
- java.security.cert.X509Extension
- java.security.Security security properties

> *Since 1.4*

> **⚠ Deprecated** — Use the classes in `java.security.cert` instead.
