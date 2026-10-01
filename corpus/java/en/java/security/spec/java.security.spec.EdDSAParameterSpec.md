---
id: "java-en-function-java-security-spec-eddsaparameterspec"
language: "java"
lang: "en"
category: "function"
name: "java.security.spec.EdDSAParameterSpec"
title: "EdDSAParameterSpec"
directive: "type"
module: "java.base/java.security.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/spec/EdDSAParameterSpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EdDSAParameterSpec

A class used to specify EdDSA signature and verification parameters. All
 algorithm modes in RFC 8032:
 Edwards-Curve Digital Signature Algorithm (EdDSA) can be specified using
 combinations of the settings in this class.

 
 
- If prehash is true, then the mode is Ed25519ph or Ed448ph
 
- Otherwise, if a context is present, the mode is Ed25519ctx or Ed448
 
- Otherwise, the mode is Ed25519 or Ed448
 

      RFC 8032: Edwards-Curve Digital Signature Algorithm (EdDSA)

> *Since 15*
