---
id: "java-en-function-java-lang-bootstrapmethoderror"
language: "java"
lang: "en"
category: "function"
name: "java.lang.BootstrapMethodError"
title: "BootstrapMethodError"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/BootstrapMethodError.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BootstrapMethodError

Thrown to indicate that an `invokedynamic` instruction or a dynamic
 constant failed to resolve its bootstrap method and arguments,
 or for `invokedynamic` instruction the bootstrap method has failed to
 provide a
 `java.lang.invoke.CallSite call site` with a
 `getTarget target`
 of the correct `type() method type`,
 or for a dynamic constant the bootstrap method has failed to provide a
 constant value of the required type.

> *Since 1.7*
