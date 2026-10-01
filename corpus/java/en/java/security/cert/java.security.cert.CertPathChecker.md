---
id: "java-en-function-java-security-cert-certpathchecker"
language: "java"
lang: "en"
category: "function"
name: "java.security.cert.CertPathChecker"
title: "CertPathChecker"
directive: "type"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertPathChecker.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertPathChecker

Performs one or more checks on each `Certificate` of a
 `CertPath`.

 

A `CertPathChecker` implementation is typically created to extend
 a certification path validation algorithm. For example, an implementation
 may check for and process a critical private extension of each certificate
 in a certification path.

> *Since 1.8*
