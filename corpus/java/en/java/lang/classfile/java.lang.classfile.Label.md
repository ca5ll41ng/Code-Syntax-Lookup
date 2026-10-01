---
id: "java-en-function-java-lang-classfile-label"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.Label"
title: "Label"
directive: "type"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/Label.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Label

A marker for a position within the instructions of a method body.  The
 position is a cursor position in the list of instructions, similar to that
 of a `ListIterator`.

 Reading Labels
 Labels read from `class` files represent positions in the `code`
 array of a `CodeAttribute Code` attribute.  It is associated with a
 {@index bci} (bytecode index), also known as {@index pc}
 (program counter), the index into the `code` array; the actual cursor
 position is immediately before the given index, so a label at the beginning
 of the instructions has bci `0`, and a label at the end of the
 instructions has bci `codeLength codeLength() + 1`.  The
 bci can be inspected through `labelToBci
 CodeAttribute::labelToBci`.
 

 In generic `CodeModel`s, a label may not have a bci value; the position
 of a label can be found by searching for the corresponding `LabelTarget`
 within that model.

 Writing Labels
 Many models in `java.lang.classfile` refer to labels.  To write a
 label, a label must be obtained, it must be bound to a `CodeBuilder`.
 

 To obtain a label:
 
 
- Use a label read from other models.
 
- Use pre-defined labels from a `CodeBuilder`, such as `startLabel() CodeBuilder::startLabel`, `endLabel
     CodeBuilder::endLabel`, or `breakLabel
     BlockCodeBuilder::breakLabel`.  They are already bound.
 
- Create labels with `newLabel CodeBuilder::newLabel` or
     `newBoundLabel CodeBuilder::newBoundLabel`.
 

 

 A label must be bound exactly once in the `CodeBuilder` where it is
 used; otherwise, writing fails.  To bind an unbound label:
 
 
- Send a read `LabelTarget` to a `CodeBuilder`.
 
- Use `labelBinding CodeBuilder::labelBinding`.
 

 Note that a label read from another model is not automatically bound in a
 `CodeBuilder`; they are separate entities and the label is bound to
 different positions in them.

**参见**

- CodeAttribute#labelToBci CodeAttribute::labelToBci
- CodeBuilder#newLabel CodeBuilder::newLabel
- CodeBuilder#labelBinding CodeBuilder::labelBinding

> *Since 24*
