---
id: "java-en-function-java-security-interfaces-xeckey"
language: "java"
lang: "en"
category: "function"
name: "java.security.interfaces.XECKey"
title: "XECKey"
directive: "type"
module: "java.base/java.security.interfaces"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/interfaces/XECKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XECKey

An interface for an elliptic curve public/private key as defined by
 RFC 7748. These keys are distinct from the keys represented by
 `ECKey`, and they are intended for use with algorithms based on RFC
 7748 such as the XDH `KeyAgreement` algorithm. This interface allows
 access to the algorithm parameters associated with the key.

> *Since 11*
