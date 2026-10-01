---
id: "java-en-function-java-security-privilegedexceptionaction"
language: "java"
lang: "en"
category: "function"
name: "java.security.PrivilegedExceptionAction"
title: "PrivilegedExceptionAction"
directive: "type"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/PrivilegedExceptionAction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PrivilegedExceptionAction

A computation to be performed that throws one or more checked exceptions.
 The computation is performed by invoking
 `AccessController.doPrivileged` on the
 `PrivilegedExceptionAction` object.  This interface is
 used only for computations that throw checked exceptions;
 computations that do not throw
 checked exceptions should use `PrivilegedAction` instead.

**参数**

- **the** — type of the result of running the computation

**参见**

- AccessController
- AccessController#doPrivileged(PrivilegedExceptionAction)
- AccessController#doPrivileged(PrivilegedExceptionAction, AccessControlContext)
- PrivilegedAction

> *Since 1.2*
