---
id: "java-en-function-java-security-spec-xecprivatekeyspec"
language: "java"
lang: "en"
category: "function"
name: "java.security.spec.XECPrivateKeySpec"
title: "XECPrivateKeySpec"
directive: "type"
module: "java.base/java.security.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/spec/XECPrivateKeySpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XECPrivateKeySpec

A class representing elliptic curve private keys as defined in RFC 7748,
 including the curve and other algorithm parameters. The private key is
 represented as an encoded scalar value. The decoding procedure defined in
 the RFC includes an operation that forces certain bits of the key to either
 1 or 0. This operation is known as "pruning" or "clamping" the private key.
 All arrays in this spec are unpruned, and implementations will need to prune
 the array before using it in any numerical operations.

> *Since 11*
