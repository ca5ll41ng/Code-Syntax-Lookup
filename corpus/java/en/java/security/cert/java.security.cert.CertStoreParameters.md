---
id: "java-en-function-java-security-cert-certstoreparameters"
language: "java"
lang: "en"
category: "function"
name: "java.security.cert.CertStoreParameters"
title: "CertStoreParameters"
directive: "type"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertStoreParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertStoreParameters

A specification of `CertStore` parameters.
 

 The purpose of this interface is to group (and provide type safety for)
 all `CertStore` parameter specifications. All
 `CertStore` parameter specifications must implement this
 interface.
 

 Typically, a `CertStoreParameters` object is passed as a parameter
 to one of the `getInstance CertStore.getInstance` methods.
 The `getInstance` method returns a `CertStore` that
 is used for retrieving `Certificate`s and `CRL`s. The
 `CertStore` that is returned is initialized with the specified
 parameters. The type of parameters needed may vary between different types
 of `CertStore`s.

**参见**

- CertStore#getInstance

> *Since 1.4*
