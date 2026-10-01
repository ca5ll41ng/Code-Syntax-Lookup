---
id: "java-en-function-java-security-keystore-protectionparameter"
language: "java"
lang: "en"
category: "function"
name: "java.security.KeyStore.ProtectionParameter"
title: "ProtectionParameter"
directive: "type"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProtectionParameter

A marker interface for keystore protection parameters.

 

 The information stored in a `ProtectionParameter`
 object protects the contents of a keystore.
 For example, protection parameters may be used to check
 the integrity of keystore data, or to protect the
 confidentiality of sensitive keystore data
 (such as a `PrivateKey`).

> *Since 1.5*
