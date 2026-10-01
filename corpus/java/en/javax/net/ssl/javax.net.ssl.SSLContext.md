---
id: "java-en-function-javax-net-ssl-sslcontext"
language: "java"
lang: "en"
category: "function"
name: "javax.net.ssl.SSLContext"
title: "SSLContext"
directive: "type"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLContext

Instances of this class represent a secure socket protocol
 implementation which acts as a factory for secure socket
 factories or `SSLEngine`s. This class is initialized
 with an optional set of key and trust managers and source of
 secure random bytes.

 

 Every implementation of the Java platform is required to support the
 following standard `SSLContext` protocols:
 
 
- `TLSv1.2`
 
- `TLSv1.3`
 

 These protocols are described in the 
 SSLContext section of the
 Java Security Standard Algorithm Names Specification.
 Consult the release documentation for your implementation to see if any
 other protocols are supported.

> *Since 1.4*
