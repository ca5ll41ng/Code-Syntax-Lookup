---
id: "java-en-function-x509certselector-setnameconstraints"
language: "java"
lang: "en"
category: "function"
name: "X509CertSelector.setNameConstraints"
signature: "public void setNameConstraints(byte[] bytes) throws IOException"
title: "X509CertSelector.setNameConstraints"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CertSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CertSelector.setNameConstraints

```java
public void setNameConstraints(byte[] bytes) throws IOException
```

Sets the name constraints criterion. The `X509Certificate`
 must have subject and subject alternative names that
 meet the specified name constraints.
 

 The name constraints are specified as a byte array. This byte array
 should contain the DER encoded form of the name constraints, as they
 would appear in the NameConstraints structure defined in RFC 5280
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

 

 Note that the byte array supplied here is cloned to protect against
 subsequent modifications.

**参数**

- **bytes** — a byte array containing the ASN.1 DER encoding of a NameConstraints extension to be used for checking name constraints. Only the value of the extension is included, not the OID or criticality flag. Can be `null`, in which case no name constraints check will be performed.

**异常**

- **IOException** — if a parsing error occurs

**参见**

- #getNameConstraints
