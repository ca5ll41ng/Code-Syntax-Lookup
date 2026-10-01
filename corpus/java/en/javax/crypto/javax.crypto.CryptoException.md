---
id: "java-en-function-javax-crypto-cryptoexception"
language: "java"
lang: "en"
category: "function"
name: "javax.crypto.CryptoException"
title: "CryptoException"
directive: "type"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/CryptoException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CryptoException

Thrown to indicate a cryptographic failure during processing.

 

This exception represents a general cryptographic error. It is typically
 used for unrecoverable failures related to
 `java.security.GeneralSecurityException` in contexts where checked
 exceptions are not desired.

 

This exception is not intended to represent internal provider errors,
 which should be reported using `java.security.ProviderException`.

> *Since 28*
