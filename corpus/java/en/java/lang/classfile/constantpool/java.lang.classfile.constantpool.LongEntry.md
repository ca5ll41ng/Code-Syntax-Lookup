---
id: "java-en-function-java-lang-classfile-constantpool-longentry"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.constantpool.LongEntry"
title: "LongEntry"
directive: "type"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/LongEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LongEntry

Models a `CONSTANT_Long_info` structure, or a `long` constant, in
 the constant pool of a `class` file.
 

 The use of a `LongEntry` is modeled by a `long`.  Conversions are
 through `longEntry` and `longValue`.
 

 A long entry has a `width() width` of `2`, making its
 subsequent constant pool index valid and unusable.

             Structures

**参见**

- ConstantPoolBuilder#longEntry ConstantPoolBuilder::longEntry

> *Since 24*
