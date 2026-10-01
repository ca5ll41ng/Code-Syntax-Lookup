---
id: "java-en-function-java-security-spec-xecpublickeyspec"
language: "java"
lang: "en"
category: "function"
name: "java.security.spec.XECPublicKeySpec"
title: "XECPublicKeySpec"
directive: "type"
module: "java.base/java.security.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/spec/XECPublicKeySpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XECPublicKeySpec

A class representing elliptic curve public keys as defined in RFC 7748,
 including the curve and other algorithm parameters. The public key is a
 particular point on the curve, which is represented using only its
 u-coordinate. A u-coordinate is an element of the field of integers modulo
 some value that is determined by the algorithm parameters. This field
 element is represented by a BigInteger which may hold any value. That is,
 the BigInteger is not restricted to the range of canonical field elements.

> *Since 11*
