---
id: "java-en-function-java-lang-classfile-instruction-discontinuedinstruction"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.instruction.DiscontinuedInstruction"
title: "DiscontinuedInstruction"
directive: "type"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/DiscontinuedInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DiscontinuedInstruction

Marker interface for instruction discontinued from the `code` array of
 a `Code` attribute.  Delivered as a `CodeElement` when traversing
 the elements of a `CodeModel`.

 While most instructions have convenience factory methods in `CodeBuilder`, discontinued instructions can only be supplied to code builders
 explicitly with `with CodeBuilder::with` to discourage
 their use.

> *Since 24*
