---
id: "java-en-function-javax-crypto-spec-pbekeyspec"
language: "java"
lang: "en"
category: "function"
name: "javax.crypto.spec.PBEKeySpec"
title: "PBEKeySpec"
directive: "type"
module: "java.base/javax.crypto.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/spec/PBEKeySpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PBEKeySpec

A user-chosen password that can be used with password-based encryption
 (PBE).

 

The password can be viewed as some kind of raw key material, from which
 the encryption mechanism that uses it derives a cryptographic key.

 

Different PBE mechanisms may consume different bits of each password
 character. For example, the PBE mechanism defined in
 
 PKCS #5 looks at only the low order 8 bits of each character, whereas
 PKCS #12 looks at all 16 bits of each character.

 

You convert the password characters to a PBE key by creating an
 instance of the appropriate secret key factory. For example, a secret key
 factory for PKCS #5 will construct a PBE key from only the low order 8 bits
 of each password character, whereas a secret key factory for PKCS #12 will
 take all 16 bits of each character.

 

Also note that this class stores passwords as char arrays instead of
 String objects (which would seem more logical), because the
 String class is immutable and there is no way to overwrite its
 internal value when the password stored in it is no longer needed. Hence,
 this class requests the password as a char array, so it can be overwritten
 when done.

      RFC 2898: PKCS #5: Password-Based Cryptography Specification Version 2.0

**参见**

- javax.crypto.SecretKeyFactory
- PBEParameterSpec

> *Since 1.4*
