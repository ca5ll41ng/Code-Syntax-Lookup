---
id: "java-en-function-javax-security-auth-refreshable"
language: "java"
lang: "en"
category: "function"
name: "javax.security.auth.Refreshable"
title: "Refreshable"
directive: "type"
module: "java.base/javax.security.auth"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/Refreshable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Refreshable

Objects such as credentials may optionally implement this
 interface to provide the capability to refresh itself.
 For example, a credential with a particular time-restricted lifespan
 may implement this interface to allow callers to refresh the time period
 for which it is valid.

**参见**

- javax.security.auth.Subject

> *Since 1.4*
