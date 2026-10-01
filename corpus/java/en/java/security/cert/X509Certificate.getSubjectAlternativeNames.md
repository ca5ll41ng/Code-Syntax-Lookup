---
id: "java-en-function-x509certificate-getsubjectalternativenames"
language: "java"
lang: "en"
category: "function"
name: "X509Certificate.getSubjectAlternativeNames"
signature: "public Collection<List<?>> getSubjectAlternativeNames() throws CertificateParsingException"
title: "X509Certificate.getSubjectAlternativeNames"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509Certificate.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509Certificate.getSubjectAlternativeNames

```java
public Collection<List<?>> getSubjectAlternativeNames() throws CertificateParsingException
```

Gets an immutable collection of subject alternative names from the
 `SubjectAltName` extension, (OID = 2.5.29.17).
 

 The ASN.1 definition of the `SubjectAltName` extension is:
 
```

 SubjectAltName ::= GeneralNames

 GeneralNames :: = SEQUENCE SIZE (1..MAX) OF GeneralName

 GeneralName ::= CHOICE {
      otherName                       [0]     OtherName,
      rfc822Name                      [1]     IA5String,
      dNSName                         [2]     IA5String,
      x400Address                     [3]     ORAddress,
      directoryName                   [4]     Name,
      ediPartyName                    [5]     EDIPartyName,
      uniformResourceIdentifier       [6]     IA5String,
      iPAddress                       [7]     OCTET STRING,
      registeredID                    [8]     OBJECT IDENTIFIER}

 OtherName ::= SEQUENCE {
      type-id    OBJECT IDENTIFIER,
      value      [0] EXPLICIT ANY DEFINED BY type-id }
 
```

 

 If this certificate does not contain a `SubjectAltName`
 extension, `null` is returned. Otherwise, a
 `Collection` is returned with an entry representing each
 `GeneralName` included in the extension. Each entry is a
 `List` whose first entry is an `Integer`
 (the name type, 0-8) and whose second entry is a `String`
 or a byte array (the name, in string or ASN.1 DER encoded form,
 respectively). More entries may exist depending on the name type.
 

 RFC 822, DNS, and URI
 names are returned as `String`s,
 using the well-established string formats for those types (subject to
 the restrictions included in RFC 5280). IPv4 address names are
 returned using dotted quad notation. IPv6 address names are returned
 in the form "a1:a2:...:a8", where a1-a8 are hexadecimal values
 representing the eight 16-bit pieces of the address. OID names are
 returned as `String`s represented as a series of nonnegative
 integers separated by periods. Directory names (distinguished names)
 are returned in 
 RFC 2253 string format. No standard string format is defined for
 X.400 names or EDI party names. They are returned as byte arrays
 containing the ASN.1 DER encoded form of the name. otherNames are also
 returned as byte arrays containing the ASN.1 DER encoded form of the
 name. A third entry may also be present in the list containing the
 `type-id` of the otherName in string form, and a fourth entry
 containing its `value` as either a string (if the value is
 a valid supported character string) or a byte array containing the
 ASN.1 DER encoded form of the value without the context-specific
 constructed tag with number 0.
 

 Note that the `Collection` returned may contain more
 than one name of the same type. Also, note that the returned
 `Collection` is immutable and any entries containing byte
 arrays are cloned to protect against subsequent modifications.
 

 This method was added to version 1.4 of the Java 2 Platform Standard
 Edition. In order to maintain backwards compatibility with existing
 service providers, this method is not `abstract`
 and it provides a default implementation. Subclasses
 should override this method with a correct implementation.

 otherName entries.

      RFC 2253: Lightweight Directory Access Protocol (v3):
              UTF-8 String Representation of Distinguished Names
      RFC 822: STANDARD FOR THE FORMAT OF ARPA INTERNET TEXT MESSAGES

**返回**

- an immutable `Collection` of subject alternative names (or `null`)

**异常**

- **CertificateParsingException** — if the extension cannot be decoded

> *Since 1.4*
