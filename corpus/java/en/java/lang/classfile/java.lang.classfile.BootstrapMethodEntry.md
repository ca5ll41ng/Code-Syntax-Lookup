---
id: "java-en-function-java-lang-classfile-bootstrapmethodentry"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.BootstrapMethodEntry"
title: "BootstrapMethodEntry"
directive: "type"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/BootstrapMethodEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BootstrapMethodEntry

Models an entry in the bootstrap method table.  The bootstrap method table
 is stored in the `BootstrapMethodsAttribute BootstrapMethods`
 attribute, but is modeled by the `ConstantPool`, since the bootstrap
 method table is logically part of the constant pool.
 

 A bootstrap method entry is composite:
 {@snippet lang=text :
 // @link substring="BootstrapMethodEntry" target="ConstantPoolBuilder#bsmEntry(MethodHandleEntry, List)" :
 BootstrapMethodEntry(
     MethodHandleEntry bootstrapMethod, // @link substring="bootstrapMethod" target="#bootstrapMethod"
     List arguments // @link substring="arguments" target="#arguments()"
 )
 }

**参见**

- ConstantPoolBuilder#bsmEntry ConstantPoolBuilder::bsmEntry

> *Since 24*
