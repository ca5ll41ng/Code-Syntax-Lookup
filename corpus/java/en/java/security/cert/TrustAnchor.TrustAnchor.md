---
id: "java-en-function-trustanchor-trustanchor"
language: "java"
lang: "en"
category: "function"
name: "TrustAnchor.TrustAnchor"
signature: "public TrustAnchor(X509Certificate trustedCert, byte[] nameConstraints)"
title: "TrustAnchor.TrustAnchor"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/TrustAnchor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TrustAnchor.TrustAnchor

```java
public TrustAnchor(X509Certificate trustedCert, byte[] nameConstraints)
```

Creates an instance of `TrustAnchor` with the specified
 `X509Certificate` and optional name constraints, which
 are intended to be used as additional constraints when validating
 an X.509 certification path.
 

 The name constraints are specified as a byte array. This byte array
 should contain the DER encoded form of the name constraints, as they
 would appear in the NameConstraints structure defined in
 RFC 5280
 and X.509. The ASN.1 definition of this structure appears below.

 
```
`NameConstraints ::= SEQUENCE {
       permittedSubtrees       [0]     GeneralSubtrees OPTIONAL,
       excludedSubtrees        [1]     GeneralSubtrees OPTIONAL `

  GeneralSubtrees ::= SEQUENCE SIZE (1..MAX) OF GeneralSubtree

  GeneralSubtree ::= SEQUENCE {
       base                    GeneralName,
       minimum         [0]     BaseDistance DEFAULT 0,
       maximum         [1]     BaseDistance OPTIONAL }

  BaseDistance ::= INTEGER (0..MAX)

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
 }
```

 

 Note that the name constraints byte array supplied is cloned to protect
 against subsequent modifications.

      RFC 5280: Internet X.509 Public Key Infrastructure Certificate
              and Certificate Revocation List (CRL) Profile

**参数**

- **trustedCert** — a trusted `X509Certificate`
- **nameConstraints** — a byte array containing the ASN.1 DER encoding of a NameConstraints extension to be used for checking name constraints. Only the value of the extension is included, not the OID or criticality flag. Specify `null` to omit the parameter.

**异常**

- **IllegalArgumentException** — if the name constraints cannot be decoded
- **NullPointerException** — if the specified `X509Certificate` is `null`
