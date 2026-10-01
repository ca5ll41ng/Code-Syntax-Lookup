---
id: "java-en-function-java-security-policy"
language: "java"
lang: "en"
category: "function"
name: "java.security.Policy"
title: "Policy"
directive: "type"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Policy.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Policy

A `Policy` object was responsible for determining whether code
 executing in the Java runtime environment had permission to perform a
 security-sensitive operation. This feature no longer exists.

> *Since 1.2*

> **⚠ Deprecated** — This class was only useful in conjunction with `SecurityManager the Security Manager`, which is no longer supported. Installing a system-wide `Policy` object is no longer supported. The `setPolicy setPolicy` method has been changed to always throw `UnsupportedOperationException`. The `getPolicy getPolicy` method has been changed to always return a `Policy` object that grants no permissions. There is no replacement for the Security Manager or this class.
