---
id: "java-en-function-java-lang-classfile-constantpool-methodtypeentry"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.constantpool.MethodTypeEntry"
title: "MethodTypeEntry"
directive: "type"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/MethodTypeEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodTypeEntry

Models a `CONSTANT_MethodType_info` structure, or a symbolic reference
 to a method type, in the constant pool of a `class` file.
 

 The use of a `MethodTypeEntry` is modeled by a `MethodTypeDesc`.
 Conversions are through `methodTypeEntry`
 and `asSymbol`.
 

 A method type entry is composite:
 {@snippet lang=text :
 // @link substring="MethodTypeEntry" target="ConstantPoolBuilder#methodTypeEntry(Utf8Entry)" :
 MethodTypeEntry(Utf8Entry descriptor) // @link substring="descriptor" target="#descriptor()"
 }
 where `descriptor` is a `asSymbol() method descriptor`
 string.

> *Since 24*
