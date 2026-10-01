---
id: "java-en-function-javax-net-ssl-trustmanagerfactory"
language: "java"
lang: "en"
category: "function"
name: "javax.net.ssl.TrustManagerFactory"
title: "TrustManagerFactory"
directive: "type"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/TrustManagerFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TrustManagerFactory

This class acts as a factory for trust managers based on a
 source of trust material. Each trust manager manages a specific
 type of trust material for use by secure sockets. The trust
 material is based on a KeyStore and/or provider-specific sources.

 

 Every implementation of the Java platform is required to support the
 following standard `TrustManagerFactory` algorithm:
 
 
- `PKIX`
 

 This algorithm is described in the 
 TrustManagerFactory section of the
 Java Security Standard Algorithm Names Specification.
 Consult the release documentation for your implementation to see if any
 other algorithms are supported.

**参见**

- TrustManager

> *Since 1.4*
