---
id: "java-en-function-java-lang-classfile-constantpool-interfacemethodrefentry"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.constantpool.InterfaceMethodRefEntry"
title: "InterfaceMethodRefEntry"
directive: "type"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/InterfaceMethodRefEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InterfaceMethodRefEntry

Models a `CONSTANT_InterfaceMethodRef_info` structure, or a symbolic
 reference to an interface method, in the constant pool of a `class`
 file.
 

 An interface method reference entry is composite:
 {@snippet lang=text :
 // @link substring="InterfaceMethodRefEntry" target="ConstantPoolBuilder#interfaceMethodRefEntry(ClassEntry, NameAndTypeEntry)" :
 InterfaceMethodRefEntry(
     ClassEntry owner, // @link substring="owner" target="#owner()"
     NameAndTypeEntry nameAndType // @link substring="nameAndType" target="#nameAndType()"
 )
 }
 where the `type() type` in the `nameAndType` is a `typeSymbol() method descriptor` string.

**参见**

- ConstantPoolBuilder#interfaceMethodRefEntry ConstantPoolBuilder::interfaceMethodRefEntry

> *Since 24*
