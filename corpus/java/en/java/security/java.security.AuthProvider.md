---
id: "java-en-function-java-security-authprovider"
language: "java"
lang: "en"
category: "function"
name: "java.security.AuthProvider"
title: "AuthProvider"
directive: "type"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/AuthProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AuthProvider

This class defines login and logout methods for a provider.

 

 While callers may invoke `login` directly,
 the provider may also invoke `login` on behalf of callers
 if it determines that a login must be performed
 prior to certain operations.

> *Since 1.5*
