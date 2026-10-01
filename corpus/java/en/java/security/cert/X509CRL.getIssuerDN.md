---
id: "java-en-function-x509crl-getissuerdn"
language: "java"
lang: "en"
category: "function"
name: "X509CRL.getIssuerDN"
signature: "public abstract Principal getIssuerDN()"
title: "X509CRL.getIssuerDN"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/X509CRL.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509CRL.getIssuerDN

```java
public abstract Principal getIssuerDN()
```

Gets the `issuer` (issuer distinguished name) value from
 the CRL. The issuer name identifies the entity that signed (and
 issued) the CRL.

 

The issuer name field contains an
 X.500 distinguished name (DN).
 The ASN.1 definition for this is:
 
```

 issuer    Name

 Name ::= CHOICE { RDNSequence }
 RDNSequence ::= SEQUENCE OF RelativeDistinguishedName
 RelativeDistinguishedName ::=
     SET OF AttributeValueAssertion

 AttributeValueAssertion ::= SEQUENCE {
                               AttributeType,
                               AttributeValue }
 AttributeType ::= OBJECT IDENTIFIER
 AttributeValue ::= ANY
 
```

 The `Name` describes a hierarchical name composed of
 attributes,
 such as country name, and corresponding values, such as US.
 The type of the `AttributeValue` component is determined by
 the `AttributeType`; in general it will be a
 `directoryString`. A `directoryString` is usually
 one of `PrintableString`,
 `TeletexString` or `UniversalString`.

**返回**

- a Principal whose name is the issuer distinguished name.

> **⚠ Deprecated** — Use `getIssuerX500Principal` instead. This method returns the `issuer` as an implementation specific `Principal` object, which should not be relied upon by portable code.
