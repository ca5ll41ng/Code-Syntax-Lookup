---
id: "java-en-function-javax-crypto-spec-rc5parameterspec"
language: "java"
lang: "en"
category: "function"
name: "javax.crypto.spec.RC5ParameterSpec"
title: "RC5ParameterSpec"
directive: "type"
module: "java.base/javax.crypto.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/spec/RC5ParameterSpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RC5ParameterSpec

This class specifies the parameters used with the
 RC5
 algorithm.

 

 The parameters consist of a version number, a rounds count, a word
 size, and optionally an initialization vector (IV) (only in feedback mode).

 

 This class can be used to initialize a `Cipher` object that
 implements the RC5 algorithm.

      RFC 2040: The RC5, RC5-CBC, RC5-CBC-Pad, and RC5-CTS Algorithms

> *Since 1.4*
