---
id: "java-en-function-java-security-interfaces-edecpublickey"
language: "java"
lang: "en"
category: "function"
name: "java.security.interfaces.EdECPublicKey"
title: "EdECPublicKey"
directive: "type"
module: "java.base/java.security.interfaces"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/interfaces/EdECPublicKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EdECPublicKey

An interface for an elliptic curve public key as defined by
 RFC 8032: Edwards-Curve
 Digital Signature Algorithm (EdDSA). These keys are distinct from the
 keys represented by `ECPublicKey`, and they are intended for use with
 algorithms based on RFC 8032 such as the EdDSA `Signature` algorithm.
 

 An Edwards-Curve public key is a point on the curve, which is represented using an
 EdECPoint.

      RFC 8032: Edwards-Curve Digital Signature Algorithm (EdDSA)

> *Since 15*
