---
id: "java-en-function-java-lang-classfile-constantpool-fieldrefentry"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.constantpool.FieldRefEntry"
title: "FieldRefEntry"
directive: "type"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/FieldRefEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FieldRefEntry

Models a `CONSTANT_Fieldref_info` structure, or a symbolic reference
 to a field, in the constant pool of a `class` file.
 

 A field reference constant pool entry is composite:
 {@snippet lang=text :
 // @link substring="FieldRefEntry" target="ConstantPoolBuilder#fieldRefEntry(ClassEntry, NameAndTypeEntry)" :
 FieldRefEntry(
     ClassEntry owner, // @link substring="owner" target="#owner()"
     NameAndTypeEntry nameAndType // @link substring="nameAndType" target="#nameAndType()"
 )
 }
 where the `type` represents a `typeSymbol() field descriptor` string.

**参见**

- ConstantPoolBuilder#fieldRefEntry ConstantPoolBuilder::fieldRefEntry

> *Since 24*
