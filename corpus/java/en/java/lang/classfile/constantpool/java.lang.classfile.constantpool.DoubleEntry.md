---
id: "java-en-function-java-lang-classfile-constantpool-doubleentry"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.constantpool.DoubleEntry"
title: "DoubleEntry"
directive: "type"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/DoubleEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DoubleEntry

Models a `CONSTANT_Double_info` structure, representing a `double` constant, in the constant pool of a `class` file.
 

 The use of a `DoubleEntry` is modeled by a `double`.  Conversions
 are through `doubleEntry` and `doubleValue`.
 In the conversions, all NaN values of the `double` may or may not be
 collapsed into a single `NaN "canonical" NaN value`.
 

 A double entry has a `width() width` of `2`, making its
 subsequent constant pool index valid and unusable.

             Structures

**参见**

- ConstantPoolBuilder#doubleEntry ConstantPoolBuilder::doubleEntry

> *Since 24*
