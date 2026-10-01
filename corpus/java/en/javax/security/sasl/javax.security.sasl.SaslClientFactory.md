---
id: "java-en-function-javax-security-sasl-saslclientfactory"
language: "java"
lang: "en"
category: "function"
name: "javax.security.sasl.SaslClientFactory"
title: "SaslClientFactory"
directive: "type"
module: "java.security.sasl/javax.security.sasl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.sasl/javax/security/sasl/SaslClientFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SaslClientFactory

An interface for creating instances of `SaslClient`.
 A class that implements this interface
 must be thread-safe and handle multiple simultaneous
 requests. It must also have a public constructor that accepts no
 argument.

 This interface is not normally accessed directly by a client, which will use the
 `Sasl` static methods
 instead. However, a particular environment may provide and install a
 new or different `SaslClientFactory`.

**参见**

- SaslClient
- Sasl

> *Since 1.5*
