---
id: "java-en-function-java-security-interfaces-edecprivatekey"
language: "java"
lang: "en"
category: "function"
name: "java.security.interfaces.EdECPrivateKey"
title: "EdECPrivateKey"
directive: "type"
module: "java.base/java.security.interfaces"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/interfaces/EdECPrivateKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EdECPrivateKey

An interface for an elliptic curve private key as defined by
 RFC 8032: Edwards-Curve
 Digital Signature Algorithm (EdDSA). These keys are distinct from the
 keys represented by `ECPrivateKey`, and they are intended for use
 with algorithms based on RFC 8032 such as the EdDSA `Signature`
 algorithm.
 

 An Edwards-Curve private key is a bit string. This interface only supports bit
 string lengths that are a multiple of 8, and the key is represented using
 a byte array.

      RFC 8032: Edwards-Curve Digital Signature Algorithm (EdDSA)

> *Since 15*
