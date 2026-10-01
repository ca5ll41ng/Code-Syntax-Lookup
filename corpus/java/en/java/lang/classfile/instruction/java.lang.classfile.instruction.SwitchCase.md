---
id: "java-en-function-java-lang-classfile-instruction-switchcase"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.instruction.SwitchCase"
title: "SwitchCase"
directive: "type"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/SwitchCase.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SwitchCase

Models a single case in a `LookupSwitchInstruction lookupswitch` or
 `TableSwitchInstruction tableswitch` instruction.
 

 A switch case is composite:
 {@snippet lang=text :
 // @link substring="SwitchCase" target="#of" :
 SwitchCase(
     int caseValue, // @link substring="caseValue" target="#caseValue"
     Label target // @link substring="target" target="#target"
 )
 }

**参见**

- LookupSwitchInstruction
- TableSwitchInstruction

> *Since 24*
