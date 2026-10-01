---
id: "java-en-function-java-security-cert-certpathparameters"
language: "java"
lang: "en"
category: "function"
name: "java.security.cert.CertPathParameters"
title: "CertPathParameters"
directive: "type"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertPathParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertPathParameters

A specification of certification path algorithm parameters.
 The purpose of this interface is to group (and provide type safety for)
 all `CertPath` parameter specifications. All
 `CertPath` parameter specifications must implement this
 interface.

**参见**

- CertPathValidator#validate(CertPath, CertPathParameters)
- CertPathBuilder#build(CertPathParameters)

> *Since 1.4*
