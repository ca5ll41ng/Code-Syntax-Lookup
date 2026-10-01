---
id: "java-en-function-java-lang-classfile-instruction-characterrange"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.instruction.CharacterRange"
title: "CharacterRange"
directive: "type"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/CharacterRange.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CharacterRange

A pseudo-instruction which models a single entry in the `CharacterRangeTableAttribute CharacterRangeTable` attribute.  Delivered as a
 `CodeElement` during traversal of the elements of a `CodeModel`,
 according to the setting of the `ClassFile.DebugElementsOption` option.
 

 A character range entry is composite:
 {@snippet lang=text :
 // @link substring="CharacterRange" target="#of":
 CharacterRange(
     Label startScope, // @link substring="startScope" target="#startScope"
     Label endScope, // @link substring="endScope" target="#endScope"
     int characterRangeStart, // @link substring="characterRangeStart" target="#characterRangeStart"
     int characterRangeEnd, // @link substring="characterRangeEnd" target="#characterRangeEnd"
     int flags // @link substring="flags" target="#flags"
 )
 }
 

 Another model, `CharacterRangeInfo`, also models a character range
 entry;  it has no dependency on a `CodeModel` and represents of bci
 values as `int`s instead of `Label`s, and is used as components
 of a `CharacterRangeTableAttribute`.

**参见**

- CharacterRangeInfo
- CodeBuilder#characterRange CodeBuilder::characterRange
- ClassFile.DebugElementsOption

> *Since 24*
