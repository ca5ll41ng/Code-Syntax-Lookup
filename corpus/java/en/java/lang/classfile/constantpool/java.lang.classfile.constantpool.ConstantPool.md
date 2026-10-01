---
id: "java-en-function-java-lang-classfile-constantpool-constantpool"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.constantpool.ConstantPool"
title: "ConstantPool"
directive: "type"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/ConstantPool.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantPool

Provides read access to the constant pool and the bootstrap method table of a
 `class` file.

 Index in the Constant Pool
 The constant pool entries are accessed by index.  A valid index is in the
 range of `size`.  It is `width()
 unusable` if a `LongEntry` or `DoubleEntry` is at its previous
 index.

**参见**

- BootstrapMethodsAttribute

> *Since 24*
