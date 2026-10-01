---
id: "java-en-function-java-lang-classfile-constantpool-invokedynamicentry"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.constantpool.InvokeDynamicEntry"
title: "InvokeDynamicEntry"
directive: "type"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/InvokeDynamicEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InvokeDynamicEntry

Models a `CONSTANT_InvokeDynamic_info` structure, or the symbolic
 reference to a {@index "dynamically-computed call site"}, in the
 constant pool of a `class` file.
 

 The use of a `InvokeDynamicEntry` is modeled by a `DynamicCallSiteDesc` symbolic descriptor.  It can be obtained from `asSymbol() InvokeDynamicEntry::asSymbol` and converted back to a constant
 pool entry through `invokeDynamicEntry(DynamicCallSiteDesc)
 ConstantPoolBuilder::invokeDynamicEntry`.
 

 An invoke dynamic entry is composite:
 {@snippet lang=text :
 // @link substring="InvokeDynamicEntry" target="ConstantPoolBuilder#invokeDynamicEntry(BootstrapMethodEntry, NameAndTypeEntry)" :
 InvokeDynamicEntry(
     BootstrapMethodEntry bootstrap, // @link substring="bootstrap" target="#bootstrap()"
     NameAndTypeEntry nameAndType // @link substring="nameAndType" target="#nameAndType()"
 )
 }
 where the `type() type` in the `nameAndType` is a `typeSymbol() method descriptor` string.

 A dynamically-computed call site is frequently called a {@index "dynamic
 call site"}, or an {@index "indy"}, from the abbreviation of
 "invoke dynamic".

**参见**

- ConstantPoolBuilder#invokeDynamicEntry ConstantPoolBuilder::invokeDynamicEntry
- DynamicCallSiteDesc
- java.lang.invoke##indyinsn Dynamically-computed call sites

> *Since 24*
