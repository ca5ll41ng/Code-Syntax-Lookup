---
id: "java-en-function-x509certificate-getextendedkeyusage"
language: "java"
lang: "en"
category: "function"
name: "X509Certificate.getExtendedKeyUsage"
signature: "public List<String> getExtendedKeyUsage() throws CertificateParsingException"
title: "X509Certificate.getExtendedKeyUsage"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509Certificate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509Certificate.getExtendedKeyUsage

```java
public List<String> getExtendedKeyUsage() throws CertificateParsingException
```

Gets an unmodifiable list of Strings representing the OBJECT
 IDENTIFIERs of the `ExtKeyUsageSyntax` field of the
 extended key usage extension, (OID = 2.5.29.37).  It indicates
 one or more purposes for which the certified public key may be
 used, in addition to or in place of the basic purposes
 indicated in the key usage extension field.  The ASN.1
 definition for this is:
 
```

 ExtKeyUsageSyntax ::= SEQUENCE SIZE (1..MAX) OF KeyPurposeId

 KeyPurposeId ::= OBJECT IDENTIFIER
 
```

 Key purposes may be defined by any organization with a
 need. Object identifiers used to identify key purposes shall be
 assigned in accordance with IANA or ITU-T Rec. X.660 |
 ISO/IEC/ITU 9834-1.
 

 This method was added to version 1.4 of the Java 2 Platform Standard
 Edition. In order to maintain backwards compatibility with existing
 service providers, this method is not `abstract`
 and it provides a default implementation. Subclasses
 should override this method with a correct implementation.

**返回**

- the ExtendedKeyUsage extension of this certificate, as an unmodifiable list of object identifiers represented as Strings. Returns null if this certificate does not contain an ExtendedKeyUsage extension.

**异常**

- **CertificateParsingException** — if the extension cannot be decoded

> *Since 1.4*
