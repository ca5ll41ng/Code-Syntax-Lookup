---
id: "java-en-function-javax-crypto-kdfparameters"
language: "java"
lang: "en"
category: "function"
name: "javax.crypto.KDFParameters"
title: "KDFParameters"
directive: "type"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/KDFParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KDFParameters

A specification of Key Derivation Function (`KDF`) parameters.
 

 The purpose of this interface is to group (and provide type safety for) all
 `KDF` parameter specifications. All `KDF` parameter
 specifications must implement this interface.
 

 When supplied, the
 `getInstance(String, KDFParameters) KDF.getInstance` methods return
 a `KDF` that is initialized with the specified parameters.
 

 The `KDFParameters` used for initialization are returned by
 `getParameters` and may contain additional default or random
 parameter values used by the underlying KDF implementation.

**参见**

- KDF#getInstance(String, KDFParameters)
- KDF#getParameters()
- KDF

> *Since 25*
