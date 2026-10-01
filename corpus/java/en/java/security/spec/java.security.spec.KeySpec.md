---
id: "java-en-function-java-security-spec-keyspec"
language: "java"
lang: "en"
category: "function"
name: "java.security.spec.KeySpec"
title: "KeySpec"
directive: "type"
module: "java.base/java.security.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/spec/KeySpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeySpec

A (transparent) specification of the key material
 that constitutes a cryptographic key.

 

If the key is stored on a hardware device, its
 specification may contain information that helps identify the key on the
 device.

 

 A key may be specified in an algorithm-specific way, or in an
 algorithm-independent encoding format (such as ASN.1).
 For example, a DSA private key may be specified by its components
 `x`, `p`, `q`, and `g`
 (see `DSAPrivateKeySpec`), or it may be
 specified using its DER encoding
 (see `PKCS8EncodedKeySpec`).

 

 This interface contains no methods or constants. Its only purpose
 is to group (and provide type safety for) all key specifications.
 All key specifications must implement this interface.

**参见**

- java.security.Key
- java.security.KeyFactory
- EncodedKeySpec
- X509EncodedKeySpec
- PKCS8EncodedKeySpec
- DSAPrivateKeySpec
- DSAPublicKeySpec

> *Since 1.2*
