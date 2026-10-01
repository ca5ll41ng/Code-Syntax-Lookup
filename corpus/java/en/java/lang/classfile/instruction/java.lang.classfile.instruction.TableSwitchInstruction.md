---
id: "java-en-function-java-lang-classfile-instruction-tableswitchinstruction"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.instruction.TableSwitchInstruction"
title: "TableSwitchInstruction"
directive: "type"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/TableSwitchInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TableSwitchInstruction

Models a `TABLESWITCH tableswitch` instruction in the `code` array of a
 `Code` attribute.  Delivered as a `CodeElement` when traversing
 the elements of a `CodeModel`.
 

 A table switch instruction is composite:
 {@snippet lang=text :
 // @link substring="TableSwitchInstruction" target="#of" :
 TableSwitchInstruction(
     int lowValue, // @link substring="int lowValue" target="#lowValue"
     int highValue, // @link substring="int highValue" target="#highValue"
     Label defaultTarget, // @link substring="defaultTarget" target="#defaultTarget"
     List cases // @link substring="cases" target="#cases()"
 )
 }
 

 When read from `class` files, the `cases` may omit cases that
 duplicate the default target.  The list is sorted ascending by the `caseValue() caseValue`.
 

 When writing to `class` file, the order in the `cases` list does
 not matter, as there is only one valid order in the physical representation
 of table switch entries.  Treatment of elements in `cases` whose value
 is less than `lowValue` or greater than `highValue`, and elements
 whose value duplicates that of another, is not specified.

**参见**

- Opcode.Kind#TABLE_SWITCH
- CodeBuilder#tableswitch CodeBuilder::tableswitch

> *Since 24*
