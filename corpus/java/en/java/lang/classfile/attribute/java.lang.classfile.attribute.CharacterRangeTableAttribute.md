---
id: "java-en-function-java-lang-classfile-attribute-characterrangetableattribute"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.attribute.CharacterRangeTableAttribute"
title: "CharacterRangeTableAttribute"
directive: "type"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/CharacterRangeTableAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CharacterRangeTableAttribute

Models the `characterRangeTable() CharacterRangeTable`
 attribute, which is a bidirectional mapping from ranges of positions in the
 source file to ranges of indices into the `code` array.  Its entries
 are delivered as `CharacterRange`s when traversing the elements of a
 `CodeModel`, toggled by `ClassFile.DebugElementsOption`.
 

 The `CharacterRangeTable` attribute consists of an array of `CharacterRangeInfo character range entries`.  The character range entries
 form a forest data structure: any two range entries are either disjoint, or
 if they overlap, then one entry must be enclosed within the other, both in
 `code` array indices and source file character positions.  The
 character range entries may appear in any order.
 

 This attribute only appears on `Code` attributes, permits multiple
 appearances but should only `allowMultiple()
 appear once` in a `Code` attribute.  It has a data dependency on
 `LABELS labels`.
 

 This attribute cannot be sent to a `CodeBuilder`; its entries can be
 constructed with `CharacterRange`, resulting in at most one
 attribute instance in the built `Code` attribute.
 

 This attribute is not predefined in the Java SE Platform.  This is a
 JDK-specific nonstandard attribute produced by the reference implementation
 of the system Java compiler, defined by the `jdk.compiler` module.

**参见**

- Attributes#characterRangeTable()
- CompilationIDAttribute
- SourceIDAttribute

> *Since 24*
