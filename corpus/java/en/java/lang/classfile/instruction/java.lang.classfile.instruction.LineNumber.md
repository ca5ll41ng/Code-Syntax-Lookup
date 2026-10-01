---
id: "java-en-function-java-lang-classfile-instruction-linenumber"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.instruction.LineNumber"
title: "LineNumber"
directive: "type"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/LineNumber.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LineNumber

A pseudo-instruction which indicates the code for a given line number starts
 after the current position in a `CodeAttribute Code` attribute.  This
 models a single entry in the `LineNumberTableAttribute LineNumberTable`
 attribute.  Delivered as a `CodeElement` during traversal of the
 elements of a `CodeModel`, according to the setting of the `ClassFile.LineNumbersOption` option.
 

 A line number entry is composite:
 {@snippet lang=text :
 // @link substring="LineNumber" target="#of" :
 LineNumber(int line) // @link substring="int line" target="#line"
 }
 

 Another model, `LineNumberInfo`, also models a line number entry; it
 has no dependency on a `CodeModel` and represents of bci values as
 `int`s instead of order of pseudo-instructions in the elements of a
 `CodeModel`, and is used as components of a `LineNumberTableAttribute`.

 Line numbers are represented with custom pseudo-instructions to avoid using
 labels, which usually indicate branching targets for the control flow.

**参见**

- LineNumberInfo
- CodeBuilder#lineNumber CodeBuilder::lineNumber
- ClassFile.LineNumbersOption

> *Since 24*
