---
id: "java-en-function-javax-crypto-mac"
language: "java"
lang: "en"
category: "function"
name: "javax.crypto.Mac"
title: "Mac"
directive: "type"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/Mac.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Mac

This class provides the functionality of a "Message Authentication Code"
 (MAC) algorithm.

 

 A MAC provides a way to check
 the integrity of information transmitted over or stored in an unreliable
 medium, based on a secret key. Typically, message
 authentication codes are used between two parties that share a secret
 key in order to validate information transmitted between these
 parties.

 

 A MAC mechanism that is based on cryptographic hash functions is
 referred to as HMAC. HMAC can be used with any cryptographic hash function,
 e.g., SHA256 or SHA384, in combination with a secret shared key. HMAC is
 specified in RFC 2104.

 

 Every implementation of the Java platform is required to support
 the following standard `Mac` algorithms:
 
 
- `HmacSHA1`
 
- `HmacSHA256`
 
- `PBEWithHmacSHA256`
 

 These algorithms are described in the
 
 Mac section of the
 Java Security Standard Algorithm Names Specification.
 Consult the release documentation for your implementation to see if any
 other algorithms are supported.

> *Since 1.4*
