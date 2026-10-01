---
id: "java-en-function-java-security-guardedobject"
language: "java"
lang: "en"
category: "function"
name: "java.security.GuardedObject"
title: "GuardedObject"
directive: "type"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/GuardedObject.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GuardedObject

A GuardedObject is an object that is used to protect access to
 another object.

 

A GuardedObject encapsulates a target object and a Guard object,
 such that access to the target object is possible
 only if the Guard object allows it.
 Once an object is encapsulated by a GuardedObject,
 access to that object is controlled by the `getObject`
 method, which invokes the
 `checkGuard` method on the Guard object that is
 guarding access. If access is not allowed,
 an exception is thrown.

**参见**

- Guard
- Permission

> *Since 1.2*
