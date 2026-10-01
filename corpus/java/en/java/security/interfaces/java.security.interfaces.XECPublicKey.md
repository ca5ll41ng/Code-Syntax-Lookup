---
id: "java-en-function-java-security-interfaces-xecpublickey"
language: "java"
lang: "en"
category: "function"
name: "java.security.interfaces.XECPublicKey"
title: "XECPublicKey"
directive: "type"
module: "java.base/java.security.interfaces"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/interfaces/XECPublicKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XECPublicKey

An interface for an elliptic curve public key as defined by RFC 7748.
 These keys are distinct from the keys represented by `ECPublicKey`,
 and they are intended for use with algorithms based on RFC 7748 such as the
 XDH `KeyAgreement` algorithm.

 An XEC public key is a particular point on the curve, which is represented
 using only its u-coordinate as described in RFC 7748. A u-coordinate is an
 element of the field of integers modulo some value that is determined by
 the algorithm parameters. This field element is represented by a BigInteger
 which may hold any value. That is, the BigInteger is not restricted to the
 range of canonical field elements.

> *Since 11*
