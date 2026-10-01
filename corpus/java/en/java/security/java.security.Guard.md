---
id: "java-en-function-java-security-guard"
language: "java"
lang: "en"
category: "function"
name: "java.security.Guard"
title: "Guard"
directive: "type"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Guard.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Guard

This interface represents a guard, which is an object that is used
 to protect access to another object.

 

This interface contains a single method, `checkGuard`,
 with a single `object` argument. `checkGuard` is
 invoked (by the GuardedObject `getObject` method)
 to determine whether to allow access to the object.

**参见**

- GuardedObject

> *Since 1.2*
