---
id: "java-en-function-javax-security-auth-login-configurationspi"
language: "java"
lang: "en"
category: "function"
name: "javax.security.auth.login.ConfigurationSpi"
title: "ConfigurationSpi"
directive: "type"
module: "java.base/javax.security.auth.login"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/login/ConfigurationSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConfigurationSpi

This class defines the Service Provider Interface (**SPI**)
 for the `Configuration` class.
 All the abstract methods in this class must be implemented by each
 service provider who wishes to supply a Configuration implementation.

 

 Subclass implementations of this abstract class must provide
 a public constructor that takes a `Configuration.Parameters`
 object as an input parameter.  This constructor also must throw
 an IllegalArgumentException if it does not understand the
 `Configuration.Parameters` input.

> *Since 1.6*
