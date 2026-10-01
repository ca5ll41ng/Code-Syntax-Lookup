---
id: "java-en-function-javax-crypto-spec-secretkeyspec"
language: "java"
lang: "en"
category: "function"
name: "javax.crypto.spec.SecretKeySpec"
title: "SecretKeySpec"
directive: "type"
module: "java.base/javax.crypto.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/spec/SecretKeySpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecretKeySpec

This class specifies a secret key in a provider-independent fashion.

 

It can be used to construct a SecretKey from a byte array,
 without having to go through a (provider-based)
 SecretKeyFactory.

 

This class is only useful for raw secret keys that can be represented as
 a byte array and have no key parameters associated with them, e.g., DES or
 Triple DES keys.

**参见**

- javax.crypto.SecretKey
- javax.crypto.SecretKeyFactory

> *Since 1.4*
