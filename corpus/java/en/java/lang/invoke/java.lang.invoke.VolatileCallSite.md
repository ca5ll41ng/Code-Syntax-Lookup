---
id: "java-en-function-java-lang-invoke-volatilecallsite"
language: "java"
lang: "en"
category: "function"
name: "java.lang.invoke.VolatileCallSite"
title: "VolatileCallSite"
directive: "type"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/VolatileCallSite.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# VolatileCallSite

A `VolatileCallSite` is a `CallSite` whose target acts like a volatile variable.
 An `invokedynamic` instruction linked to a `VolatileCallSite` sees updates
 to its call site target immediately, even if the update occurs in another thread.
 There may be a performance penalty for such tight coupling between threads.
 

 Unlike `MutableCallSite`, there is no
 `syncAll syncAll operation` on volatile
 call sites, since every write to a volatile variable is implicitly
 synchronized with reader threads.
 

 In other respects, a `VolatileCallSite` is interchangeable
 with `MutableCallSite`.

**参见**

- MutableCallSite

> *Since 1.7*
