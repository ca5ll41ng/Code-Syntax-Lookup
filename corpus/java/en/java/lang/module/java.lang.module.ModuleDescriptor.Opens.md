---
id: "java-en-function-java-lang-module-moduledescriptor-opens"
language: "java"
lang: "en"
category: "function"
name: "java.lang.module.ModuleDescriptor.Opens"
title: "Opens"
directive: "type"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Opens

A package opened by a module, may be qualified or unqualified. 

 

 The opens directive in a module declaration declares a
 package to be open to allow all types in the package, and all their
 members, not just public types and their public members to be reflected
 on by APIs that support private access or a way to bypass or suppress
 default Java language access control checks.

**参见**

- ModuleDescriptor#opens()

> *Since 9*
