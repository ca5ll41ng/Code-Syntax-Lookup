---
id: "java-en-function-java-lang-runtime-switchbootstraps"
language: "java"
lang: "en"
category: "function"
name: "java.lang.runtime.SwitchBootstraps"
title: "SwitchBootstraps"
directive: "type"
module: "java.base/java.lang.runtime"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/runtime/SwitchBootstraps.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SwitchBootstraps

Bootstrap methods for linking `invokedynamic` call sites that implement
 the selection functionality of the `switch` statement.  The bootstraps
 take additional static arguments corresponding to the `case` labels
 of the `switch`, implicitly numbered sequentially from `[0..N)`.

> *Since 21*
