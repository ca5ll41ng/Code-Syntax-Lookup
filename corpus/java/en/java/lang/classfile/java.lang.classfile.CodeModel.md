---
id: "java-en-function-java-lang-classfile-codemodel"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.CodeModel"
title: "CodeModel"
directive: "type"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeModel.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeModel

Models the body of a method (the `Code` attribute).  A `Code`
 attribute is viewed as a `CompoundElement composition` of `CodeElement`s, which is the only way to access `Instruction`s; the
 order of elements of a code model is significant.
 

 A `CodeModel` is obtained from `code`, or in the
 traversal of the member elements of a method.
 

 `withCode` is the main way to build code models.  `transformCode` and `transforming` allow
 creating new `Code` attributes by selectively processing the original
 code elements and directing the results to a code builder.
 

 A `Code` attribute holds attributes, but they are usually not member
 elements, but are decomposed to `PseudoInstruction`, accessible
 according to `DeadLabelsOption`, `DebugElementsOption`, and
 `LineNumbersOption`.  `StackMapTableAttribute` can only be
 accessed via `AttributedElement explicit attribute reading`, as it
 is considered a derived property from the code body.

**参见**

- MethodModel#code()
- CodeTransform
- CodeAttribute

> *Since 24*
