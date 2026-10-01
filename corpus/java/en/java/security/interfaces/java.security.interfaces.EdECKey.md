---
id: "java-en-function-java-security-interfaces-edeckey"
language: "java"
lang: "en"
category: "function"
name: "java.security.interfaces.EdECKey"
title: "EdECKey"
directive: "type"
module: "java.base/java.security.interfaces"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/interfaces/EdECKey.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EdECKey

An interface for an elliptic curve public/private key as defined by
 RFC 8032: Edwards-Curve
 Digital Signature Algorithm (EdDSA). These keys are distinct from the
 keys represented by `ECKey`, and they are intended for use with
 algorithms based on RFC 8032 such as the EdDSA `Signature` algorithm.
 This interface allows access to the algorithm parameters associated with
 the key.

      RFC 8032: Edwards-Curve Digital Signature Algorithm (EdDSA)

> *Since 15*
