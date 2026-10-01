---
id: "java-en-function-java-security-privilegedactionexception"
language: "java"
lang: "en"
category: "function"
name: "java.security.PrivilegedActionException"
title: "PrivilegedActionException"
directive: "type"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/PrivilegedActionException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PrivilegedActionException

This exception is thrown by
 `doPrivileged(PrivilegedExceptionAction)` and
 `doPrivileged(PrivilegedExceptionAction,
 AccessControlContext context)` to indicate
 that the action being performed threw a checked exception.  The exception
 thrown by the action can be obtained by calling the
 `getException` method.  In effect, an
 `PrivilegedActionException` is a "wrapper"
 for an exception thrown by a privileged action.

**参见**

- PrivilegedExceptionAction
- AccessController#doPrivileged(PrivilegedExceptionAction)
- AccessController#doPrivileged(PrivilegedExceptionAction,AccessControlContext)

> *Since 1.2*
