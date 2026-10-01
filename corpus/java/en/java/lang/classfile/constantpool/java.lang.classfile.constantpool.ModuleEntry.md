---
id: "java-en-function-java-lang-classfile-constantpool-moduleentry"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.constantpool.ModuleEntry"
title: "ModuleEntry"
directive: "type"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/ModuleEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleEntry

Models a `CONSTANT_Module_info` structure, denoting a module, in the
 constant pool of a `class` file.
 

 The use of a `ModuleEntry` is modeled by a `ModuleDesc` that
 does not represent an unnamed module.  Conversions are through `moduleEntry` and `asSymbol`.
 

 A module entry is composite:
 {@snippet lang=text :
 // @link substring="ModuleEntry" target="ConstantPoolBuilder#moduleEntry(Utf8Entry)" :
 ModuleEntry(Utf8Entry name) // @link substring="name" target="#name()"
 }
 where `name` is an `name() encoded module name`
 and is not empty.

> *Since 24*
