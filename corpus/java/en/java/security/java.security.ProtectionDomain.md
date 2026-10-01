---
id: "java-en-function-java-security-protectiondomain"
language: "java"
lang: "en"
category: "function"
name: "java.security.ProtectionDomain"
title: "ProtectionDomain"
directive: "type"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/ProtectionDomain.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProtectionDomain

The `ProtectionDomain` class encapsulates the characteristics of a
 domain, which encloses a set of classes whose instances are granted a set
 of permissions.
 

 A static set of permissions can be bound to a `ProtectionDomain`
 when it is constructed; such permissions are granted to the domain
 regardless of the policy in force. However, to support dynamic security
 policies, a `ProtectionDomain` can also be constructed such that it
 is dynamically mapped to a set of permissions by the current policy.

 no longer supported. The `getPolicy current policy`
 is always a `Policy` object that grants no permissions.

> *Since 1.2*
