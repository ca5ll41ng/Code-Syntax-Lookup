---
id: "java-en-function-java-lang-classfile-instruction-labeltarget"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.instruction.LabelTarget"
title: "LabelTarget"
directive: "type"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/LabelTarget.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LabelTarget

A pseudo-instruction which indicates that the specified label corresponds to
 the current position in the `Code` attribute.  Delivered as a `CodeElement` during traversal of the elements of a `CodeModel`.
 

 This can be used to inspect the target position of labels across `CodeTransform transformations`, as `labelToBci bci`
 is not stable.
 

 When passed to a `CodeBuilder`, this pseudo-instruction sets the
 specified label to be bound at the current position in the builder.
 

 By design, `LabelTarget` cannot be created by users and can only be
 read from a code model.  Use `labelBinding
 CodeBuilder::labelBinding` to bind arbitrary labels to a `CodeBuilder`.
 

 For a `CodeBuilder cob`, a `LabelTarget lt`, these two calls are
 equivalent:
 {@snippet lang=java :
 cob.with(lt); // @link substring="with" target="CodeBuilder#with"
 // @link substring="labelBinding" target="CodeBuilder#labelBinding" :
 cob.labelBinding(lt.label()); // @link regex="label(?=\()" target="#label"
 }

**参见**

- Label
- CodeBuilder#labelBinding CodeBuilder::labelBinding

> *Since 24*
