---
id: "java-en-function-java-security-provider"
language: "java"
lang: "en"
category: "function"
name: "java.security.Provider"
title: "Provider"
directive: "type"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Provider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Provider

This class represents a "provider" for the
 Java Security API, where a provider implements some or all parts of
 Java Security. Services that a provider may implement include:

 

 
- Algorithms (such as DSA, RSA, or SHA-256).

 
- Key generation, conversion, and management facilities (such as for
 algorithm-specific keys).

 

 

Some provider implementations may encounter unrecoverable internal
 errors during their operation, for example a failure to communicate with a
 security token. A `ProviderException` should be used to indicate
 such errors.

 

Please note that a provider can be used to implement any security
 service in Java that uses a pluggable architecture with a choice
 of implementations that fit underneath.

 

The service type `Provider` is reserved for use by the
 security framework. Services of this type cannot be added, removed,
 or modified by applications.
 The following attributes are automatically placed in each Provider object:
 
 **Attributes Automatically Placed in a Provider Object**
 
 NameValue
 
 
 `Provider.id name`
     `String.valueOf(provider.getName())`
 `Provider.id version`
     `String.valueOf(provider.getVersionStr())`
 `Provider.id info`
     `String.valueOf(provider.getInfo())`
 `Provider.id className`
     `provider.getClass().getName()`
 
 

 

Each provider has a name and a version string. A provider normally
 identifies itself with a file named `java.security.Provider`
 in the resource directory `META-INF/services`.
 Security providers are looked up via the `ServiceLoader` mechanism
 using the `getSystemClassLoader application class loader`.

 

Providers may be configured such that they are automatically
 installed and made available at runtime via the
 `getProviders` method.
 The mechanism for configuring and installing security providers is
 implementation-specific.

 The JDK implementation supports static registration of the security
 providers via the `conf/security/java.security` file in the Java
 installation directory. These providers are automatically installed by
 the JDK runtime, see `security_guide_jca_provider
 The Provider Class`
 in the Java Cryptography Architecture (JCA) Reference Guide
 for information about how a particular type of provider, the cryptographic
 service provider, works and is installed.

> *Since 1.1*
