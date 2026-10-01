---
id: "java-en-function-x509crlselector-setissuernames"
language: "java"
lang: "en"
category: "function"
name: "X509CRLSelector.setIssuerNames"
signature: "public void setIssuerNames(Collection<?> names) throws IOException"
title: "X509CRLSelector.setIssuerNames"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CRLSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CRLSelector.setIssuerNames

```java
public void setIssuerNames(Collection<?> names) throws IOException
```

**Note:** use `setIssuers` instead
 or only specify the byte array form of distinguished names when using
 this method. See `addIssuerName` for more information.
 

 Sets the issuerNames criterion. The issuer distinguished name in the
 `X509CRL` must match at least one of the specified
 distinguished names. If `null`, any issuer distinguished name
 will do.
 

 This method allows the caller to specify, with a single method call,
 the complete set of issuer names which `X509CRLs` may contain.
 The specified value replaces the previous value for the issuerNames
 criterion.
 

 The `names` parameter (if not `null`) is a
 `Collection` of names. Each name is a `String`
 or a byte array representing a distinguished name (in
 RFC 2253 or
 ASN.1 DER encoded form, respectively). If `null` is supplied
 as the value for this argument, no issuerNames check will be performed.
 

 Note that the `names` parameter can contain duplicate
 distinguished names, but they may be removed from the
 `Collection` of names returned by the
 `getIssuerNames getIssuerNames` method.
 

 If a name is specified as a byte array, it should contain a single DER
 encoded distinguished name, as defined in X.501. The ASN.1 notation for
 this structure is as follows.
 
```
`Name ::= CHOICE {
   RDNSequence `

 RDNSequence ::= SEQUENCE OF RelativeDistinguishedName

 RelativeDistinguishedName ::=
   SET SIZE (1 .. MAX) OF AttributeTypeAndValue

 AttributeTypeAndValue ::= SEQUENCE {
   type     AttributeType,
   value    AttributeValue }

 AttributeType ::= OBJECT IDENTIFIER

 AttributeValue ::= ANY DEFINED BY AttributeType
 ....
 DirectoryString ::= CHOICE {
       teletexString           TeletexString (SIZE (1..MAX)),
       printableString         PrintableString (SIZE (1..MAX)),
       universalString         UniversalString (SIZE (1..MAX)),
       utf8String              UTF8String (SIZE (1.. MAX)),
       bmpString               BMPString (SIZE (1..MAX)) }
 }
```

 

 Note that a deep copy is performed on the `Collection` to
 protect against subsequent modifications.

      RFC 2253: Lightweight Directory Access Protocol (v3):
              UTF-8 String Representation of Distinguished Names

**参数**

- **names** — a `Collection` of names (or `null`)

**异常**

- **IOException** — if a parsing error occurs

**参见**

- #getIssuerNames
