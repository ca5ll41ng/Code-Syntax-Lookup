---
id: "java-en-function-java-security-interfaces-xecprivatekey"
language: "java"
lang: "en"
category: "function"
name: "java.security.interfaces.XECPrivateKey"
title: "XECPrivateKey"
directive: "type"
module: "java.base/java.security.interfaces"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/interfaces/XECPrivateKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XECPrivateKey

An interface for an elliptic curve private key as defined by RFC 7748.
 These keys are distinct from the keys represented by `ECPrivateKey`,
 and they are intended for use with algorithms based on RFC 7748 such as the
 XDH `KeyAgreement` algorithm.

 An XEC private key is an encoded scalar value as described in RFC 7748.
 The decoding procedure defined in this RFC includes an operation that forces
 certain bits of the key to either 1 or 0. This operation is known as
 "pruning" or "clamping" the private key. Arrays returned by this interface
 are unpruned, and implementations will need to prune the array before
 using it in any numerical operations.

> *Since 11*
