---
id: "java-en-function-java-lang-invoke-constantcallsite"
language: "java"
lang: "en"
category: "function"
name: "java.lang.invoke.ConstantCallSite"
title: "ConstantCallSite"
directive: "type"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/ConstantCallSite.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantCallSite

A `ConstantCallSite` is a `CallSite` whose target is permanent, and can never be changed.
 An `invokedynamic` instruction linked to a `ConstantCallSite` is permanently
 bound to the call site's target.

> *Since 1.7*
