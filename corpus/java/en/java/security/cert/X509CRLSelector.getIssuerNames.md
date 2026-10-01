---
id: "java-en-function-x509crlselector-getissuernames"
language: "java"
lang: "en"
category: "function"
name: "X509CRLSelector.getIssuerNames"
signature: "public Collection<Object> getIssuerNames()"
title: "X509CRLSelector.getIssuerNames"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CRLSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CRLSelector.getIssuerNames

```java
public Collection<Object> getIssuerNames()
```

Returns a copy of the issuerNames criterion. The issuer distinguished
 name in the `X509CRL` must match at least one of the specified
 distinguished names. If the value returned is `null`, any
 issuer distinguished name will do.
 

 If the value returned is not `null`, it is a
 `Collection` of names. Each name is a `String`
 or a byte array representing a distinguished name (in
 RFC 2253 or
 ASN.1 DER encoded form, respectively).  Note that the
 `Collection` returned may contain duplicate names.
 

 If a name is specified as a byte array, it should contain a single DER
 encoded distinguished name, as defined in X.501. The ASN.1 notation for
 this structure is given in the documentation for
 `setIssuerNames setIssuerNames`.
 

 Note that a deep copy is performed on the `Collection` to
 protect against subsequent modifications.

      RFC 2253: Lightweight Directory Access Protocol (v3):
              UTF-8 String Representation of Distinguished Names

**返回**

- a `Collection` of names (or `null`)

**参见**

- #setIssuerNames
