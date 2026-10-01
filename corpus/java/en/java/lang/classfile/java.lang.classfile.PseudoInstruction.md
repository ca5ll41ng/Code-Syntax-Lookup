---
id: "java-en-function-java-lang-classfile-pseudoinstruction"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.PseudoInstruction"
title: "PseudoInstruction"
directive: "type"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/PseudoInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PseudoInstruction

Models metadata about a `CodeModel`, derived from the `CodeAttribute Code` attribute itself or its attributes.
 

 Order is significant for some pseudo-instructions relative to `Instruction`s, such as `LabelTarget` or `LineNumber`.  Some
 pseudo-instructions can be omitted in reading and writing according to
 certain `ClassFile.Option`s.  These are specified in the corresponding
 modeling interfaces.

> *Since 24*
