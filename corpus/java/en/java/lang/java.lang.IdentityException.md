---
id: "java-en-function-java-lang-identityexception"
language: "java"
lang: "en"
category: "function"
name: "java.lang.IdentityException"
title: "IdentityException"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/IdentityException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IdentityException

Thrown when an identity object is required but a value object is supplied.
 

 Identity objects are required for synchronization and locking.
 Value-based
 objects do not have identity and cannot be used for synchronization, locking,
 or any type of `java.lang.ref.Reference`.

> *Since 28*
