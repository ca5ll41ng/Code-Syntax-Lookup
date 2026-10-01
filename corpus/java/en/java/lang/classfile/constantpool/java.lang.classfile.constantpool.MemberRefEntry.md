---
id: "java-en-function-java-lang-classfile-constantpool-memberrefentry"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.constantpool.MemberRefEntry"
title: "MemberRefEntry"
directive: "type"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/MemberRefEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemberRefEntry

Superinterface modeling symbolic references to a member of a class or interface
 in the constant pool of a `class` file, which include references to
 `FieldRefEntry fields`, `MethodRefEntry class methods`,
 and `InterfaceMethodRefEntry interface methods`.
 

 Different types of symbolic references to a member of a class or interface
 bear structural similarities and share parts of the resolution processes, and
 they can sometimes appear in the same locations.  For example, both `MethodRefEntry` and `InterfaceMethodRefEntry` can appear in an `INVOKESTATIC invokestatic` instruction.
 

 A member reference entry is composite:
 {@snippet lang=text :
 MemberRefEntry(
     ClassEntry owner, // @link substring="owner" target="#owner()"
     NameAndTypeEntry nameAndType // @link substring="nameAndType" target="#nameAndType()"
 )
 }

> *Since 24*
