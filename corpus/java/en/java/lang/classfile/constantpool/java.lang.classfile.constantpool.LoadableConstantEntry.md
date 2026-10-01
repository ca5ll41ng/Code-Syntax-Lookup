---
id: "java-en-function-java-lang-classfile-constantpool-loadableconstantentry"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.constantpool.LoadableConstantEntry"
title: "LoadableConstantEntry"
directive: "type"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/LoadableConstantEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LoadableConstantEntry

Marker interface for constant pool entries suitable for loading via the
 `ConstantInstruction.LoadConstantInstruction ldc` instructions.
 

 The use of a `LoadableConstantEntry` is modeled by a `ConstantDesc`.
 Conversions are through `loadableConstantEntry`
 and `constantValue`.

**参见**

- CodeBuilder#ldc(LoadableConstantEntry)

> *Since 24*
