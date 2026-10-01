---
id: "java-en-function-java-lang-classfile-constantpool-floatentry"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.constantpool.FloatEntry"
title: "FloatEntry"
directive: "type"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/FloatEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FloatEntry

Models a `CONSTANT_Float_info` structure, or a `float` constant,
 in the constant pool of a `class` file.
 

 The use of a `FloatEntry` is modeled by a `float`.  Conversions
 are through `floatEntry` and `floatValue`.
 In the conversions, all NaN values of the `float` may or may not be
 collapsed into a single `NaN "canonical" NaN value`.

             Structures

**参见**

- ConstantPoolBuilder#floatEntry ConstantPoolBuilder::floatEntry

> *Since 24*
