---
id: "java-en-function-java-security-messagedigestspi"
language: "java"
lang: "en"
category: "function"
name: "java.security.MessageDigestSpi"
title: "MessageDigestSpi"
directive: "type"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/MessageDigestSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MessageDigestSpi

This class defines the Service Provider Interface (**SPI**)
 for the `MessageDigest` class, which provides the functionality
 of a message digest algorithm, such as MD5 or SHA. Message digests are
 secure one-way hash functions that take arbitrary-sized data and output a
 fixed-length hash value.

 

 All the abstract methods in this class must be implemented by a
 cryptographic service provider who wishes to supply the implementation
 of a particular message digest algorithm.

 

 Implementations are free to implement the Cloneable interface.

**参见**

- MessageDigest

> *Since 1.2*
