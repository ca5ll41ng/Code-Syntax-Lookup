---
id: "java-en-function-java-lang-classfile-constantpool-methodrefentry"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.constantpool.MethodRefEntry"
title: "MethodRefEntry"
directive: "type"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/MethodRefEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodRefEntry

Models a `CONSTANT_MethodRef_info` structure, or a symbolic reference
 to a class method, in the constant pool of a `class` file.
 

 A class method reference entry is composite:
 {@snippet lang=text :
 // @link substring="MethodRefEntry" target="ConstantPoolBuilder#methodRefEntry(ClassEntry, NameAndTypeEntry)" :
 MethodRefEntry(
     ClassEntry owner, // @link substring="owner" target="#owner()"
     NameAndTypeEntry nameAndType // @link substring="nameAndType" target="#nameAndType()"
 )
 }
 where the type in the `NameAndTypeEntry` is a `typeSymbol()
 method descriptor` string.

**参见**

- ConstantPoolBuilder#methodRefEntry ConstantPoolBuilder::methodRefEntry

> *Since 24*
