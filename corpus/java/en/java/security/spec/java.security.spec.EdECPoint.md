---
id: "java-en-function-java-security-spec-edecpoint"
language: "java"
lang: "en"
category: "function"
name: "java.security.spec.EdECPoint"
title: "EdECPoint"
directive: "type"
module: "java.base/java.security.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/spec/EdECPoint.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EdECPoint

An elliptic curve point used to specify keys as defined by
 RFC 8032: Edwards-Curve
 Digital Signature Algorithm (EdDSA). These points are distinct from the
 points represented by `ECPoint`, and they are intended for use with
 algorithms based on RFC 8032 such as the EdDSA `Signature` algorithm.
 

 An EdEC point is specified by its y-coordinate value and a boolean that
 indicates whether the x-coordinate is odd. The y-coordinate is an
 element of the field of integers modulo some value p that is determined by
 the algorithm parameters. This field element is represented by a
 `BigInteger`, and implementations that consume objects of this class
 may reject integer values which are not in the range [0, p).

      RFC 8032: Edwards-Curve Digital Signature Algorithm (EdDSA)

> *Since 15*
