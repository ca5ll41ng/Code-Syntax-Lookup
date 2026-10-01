---
id: "java-en-function-java-security-drbgparameters-instantiation"
language: "java"
lang: "en"
category: "function"
name: "java.security.DrbgParameters.Instantiation"
title: "Instantiation"
directive: "type"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/DrbgParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Instantiation

DRBG parameters for instantiation.
 

 When used in
 `getInstance`
 or one of the other similar `getInstance` calls that take a
 `SecureRandomParameters` parameter, it means the
 requested instantiate parameters the newly created `SecureRandom`
 object must minimally support. When used as the return value of the
 `getParameters` method, it means the effective
 instantiate parameters of the `SecureRandom` object.

> *Since 9*
