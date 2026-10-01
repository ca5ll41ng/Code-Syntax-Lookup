---
id: "java-en-function-javax-security-sasl-saslserverfactory"
language: "java"
lang: "en"
category: "function"
name: "javax.security.sasl.SaslServerFactory"
title: "SaslServerFactory"
directive: "type"
module: "java.security.sasl/javax.security.sasl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.sasl/javax/security/sasl/SaslServerFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SaslServerFactory

An interface for creating instances of `SaslServer`.
 A class that implements this interface
 must be thread-safe and handle multiple simultaneous
 requests. It must also have a public constructor that accepts no
 argument.

 This interface is not normally accessed directly by a server, which will use the
 `Sasl` static methods
 instead. However, a particular environment may provide and install a
 new or different `SaslServerFactory`.

**参见**

- SaslServer
- Sasl

> *Since 1.5*
