---
id: "java-en-function-java-security-privilegedaction"
language: "java"
lang: "en"
category: "function"
name: "java.security.PrivilegedAction"
title: "PrivilegedAction"
directive: "type"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/PrivilegedAction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PrivilegedAction

A computation to be performed by invoking
 `AccessController.doPrivileged` on the
 `PrivilegedAction` object.  This interface is used only for
 computations that do not throw checked exceptions; computations that
 throw checked exceptions must use `PrivilegedExceptionAction`
 instead.

**参数**

- **the** — type of the result of running the computation

**参见**

- AccessController
- AccessController#doPrivileged(PrivilegedAction)
- PrivilegedExceptionAction

> *Since 1.2*
