---
id: "java-en-function-java-lang-classfile-constantpool-constantdynamicentry"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.constantpool.ConstantDynamicEntry"
title: "ConstantDynamicEntry"
directive: "type"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/ConstantDynamicEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantDynamicEntry

Models a `CONSTANT_Dynamic_info` structure, representing a {@index
 "dynamically-computed constant"}, in the constant pool of a `class` file.
 

 The use of a `ConstantDynamicEntry` is modeled by a `DynamicConstantDesc`.  Conversions are through `asSymbol` and `constantDynamicEntry`.
 

 A dynamic constant entry is composite:
 {@snippet lang=text :
 // @link substring="ConstantDynamicEntry" target="ConstantPoolBuilder#constantDynamicEntry(BootstrapMethodEntry, NameAndTypeEntry)" :
 ConstantDynamicEntry(
     BootstrapMethodEntry bootstrap, // @link substring="bootstrap" target="#bootstrap()"
     NameAndTypeEntry nameAndType // @link substring="nameAndType" target="#nameAndType()"
 )
 }
 where `type` is a `typeSymbol()
 field descriptor` string.

 A dynamically-computed constant is frequently called a {@index "dynamic
 constant"}, or a {@index "condy"}, from the abbreviation of
 "constant dynamic".

**参见**

- ConstantPoolBuilder#constantDynamicEntry ConstantPoolBuilder::constantDynamicEntry
- DynamicConstantDesc
- java.lang.invoke##condycon Dynamically-computed constants

> *Since 24*
