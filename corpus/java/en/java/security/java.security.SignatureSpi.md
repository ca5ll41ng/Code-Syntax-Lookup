---
id: "java-en-function-java-security-signaturespi"
language: "java"
lang: "en"
category: "function"
name: "java.security.SignatureSpi"
title: "SignatureSpi"
directive: "type"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/SignatureSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SignatureSpi

This class defines the Service Provider Interface (**SPI**)
 for the `Signature` class, which is used to provide the
 functionality of a digital signature algorithm. Digital signatures are used
 for authentication and integrity assurance of digital data.

 

 All the abstract methods in this class must be implemented by each
 cryptographic service provider who wishes to supply the implementation
 of a particular signature algorithm.

**参见**

- Signature

> *Since 1.2*
