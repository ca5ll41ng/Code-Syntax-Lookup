---
id: "java-en-function-java-lang-module-moduledescriptor-builder"
language: "java"
lang: "en"
category: "function"
name: "java.lang.module.ModuleDescriptor.Builder"
title: "Builder"
directive: "type"
module: "java.base/java.lang.module"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/module/ModuleDescriptor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder

A builder for building `ModuleDescriptor` objects.

 

 `ModuleDescriptor` defines the `newModule newModule`,
 `newOpenModule newOpenModule`, and `newAutomaticModule
 newAutomaticModule` methods to create builders for building
 normal, open, and automatic modules. 

 

 The set of packages in the module are accumulated by the `Builder` as the `exports(String) exports`,
 `opens(String) opens`,
 `packages(Set) packages`,
 `provides(String,List) provides`, and
 `mainClass(String) mainClass` methods are
 invoked. 

 

 The module names, package names, and class names that are parameters
 specified to the builder methods are the module names, package names,
 and qualified names of classes (in named packages) as defined in the
 The Java Language Specification. 

 

 Example usage: 
 {@snippet :
     ModuleDescriptor descriptor = ModuleDescriptor.newModule("stats.core")
         .requires("java.base")
         .exports("org.acme.stats.core.clustering")
         .exports("org.acme.stats.core.regression")
         .packages(Set.of("org.acme.stats.core.internal"))
         .build();
 }

 components are added to the builder. The rationale for this is to detect
 errors as early as possible and not defer all validation to the
 `build build` method.

> *Since 9*
