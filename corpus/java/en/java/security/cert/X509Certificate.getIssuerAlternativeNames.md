---
id: "java-en-function-x509certificate-getissueralternativenames"
language: "java"
lang: "en"
category: "function"
name: "X509Certificate.getIssuerAlternativeNames"
signature: "public Collection<List<?>> getIssuerAlternativeNames() throws CertificateParsingException"
title: "X509Certificate.getIssuerAlternativeNames"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509Certificate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509Certificate.getIssuerAlternativeNames

```java
public Collection<List<?>> getIssuerAlternativeNames() throws CertificateParsingException
```

Gets an immutable collection of issuer alternative names from the
 `IssuerAltName` extension, (OID = 2.5.29.18).
 

 The ASN.1 definition of the `IssuerAltName` extension is:
 
```

 IssuerAltName ::= GeneralNames
 
```

 The ASN.1 definition of `GeneralNames` is defined
 in `getSubjectAlternativeNames getSubjectAlternativeNames`.
 

 If this certificate does not contain an `IssuerAltName`
 extension, `null` is returned. Otherwise, a
 `Collection` is returned with an entry representing each
 `GeneralName` included in the extension. Each entry is a
 `List` whose first entry is an `Integer`
 (the name type, 0-8) and whose second entry is a `String`
 or a byte array (the name, in string or ASN.1 DER encoded form,
 respectively).  More entries may exist depending on the name type.
 For more details about the formats used for each
 name type, see the `getSubjectAlternativeNames` method.
 

 Note that the `Collection` returned may contain more
 than one name of the same type. Also, note that the returned
 `Collection` is immutable and any entries containing byte
 arrays are cloned to protect against subsequent modifications.
 

 This method was added to version 1.4 of the Java 2 Platform Standard
 Edition. In order to maintain backwards compatibility with existing
 service providers, this method is not `abstract`
 and it provides a default implementation. Subclasses
 should override this method with a correct implementation.

**返回**

- an immutable `Collection` of issuer alternative names (or `null`)

**异常**

- **CertificateParsingException** — if the extension cannot be decoded

> *Since 1.4*
