---
id: "java-en-function-java-lang-classfile-constantpool-nameandtypeentry"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.constantpool.NameAndTypeEntry"
title: "NameAndTypeEntry"
directive: "type"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/NameAndTypeEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NameAndTypeEntry

Models a `CONSTANT_NameAndType_info` structure, representing a field or
 method, in the constant pool of a `class` file.
 

 The use of a `NameAndTypeEntry` is symbolically represented as a
 `String name`, and a `nameAndTypeEntry(String,
 ClassDesc) ClassDesc` or a `nameAndTypeEntry(String,
 MethodTypeDesc) MethodTypeDesc` `type`, depending on where this `NameAndTypeEntry` appears.  The accessors to the symbolic descriptors for the
 `type` is defined on a per-use-site basis, such as `typeSymbol` returning a `ClassDesc`, and `typeSymbol` returning a `MethodTypeDesc`.
 

 A name and type entry is composite:
 {@snippet lang=text :
 NameAndTypeEntry( // @link substring="NameAndTypeEntry" target="ConstantPoolBuilder#nameAndTypeEntry(Utf8Entry, Utf8Entry)"
     Utf8Entry name, // @link substring="name" target="#name()"
     Utf8Entry type  // @link substring="type" target="#type()"
 )
 }
 where `name` is an unqualified name, and `type` is a field or
 method descriptor string.

> *Since 24*
