---
id: "java-en-function-java-lang-classfile-constantpool-dynamicconstantpoolentry"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.constantpool.DynamicConstantPoolEntry"
title: "DynamicConstantPoolEntry"
directive: "type"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/DynamicConstantPoolEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DynamicConstantPoolEntry

Superinterface modeling dynamically-computed constant pool entries, which
 include `ConstantDynamicEntry` and `InvokeDynamicEntry`, in the
 constant pool of a `class` file.
 

 Different types of dynamically-computed constant pool entries bear structural
 similarities, but they appear in distinct locations.  As a result, their uses
 are represented by different symbolic descriptors, specific to each subtype.
 

 A dynamic constant entry is composite:
 {@snippet lang=text :
 DynamicConstantPoolEntry(
     BootstrapMethodEntry bootstrap, // @link substring="bootstrap" target="#bootstrap()"
     NameAndTypeEntry nameAndType // @link substring="nameAndType" target="#nameAndType()"
 )
 }

**参见**

- java.lang.invoke##jvm_mods Dynamic resolution of call sites and constants

> *Since 24*
