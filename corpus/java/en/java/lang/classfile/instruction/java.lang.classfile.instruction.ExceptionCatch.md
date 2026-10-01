---
id: "java-en-function-java-lang-classfile-instruction-exceptioncatch"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.instruction.ExceptionCatch"
title: "ExceptionCatch"
directive: "type"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/ExceptionCatch.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ExceptionCatch

A pseudo-instruction modeling an entry in the `exception_table` array
 of a `CodeAttribute Code` attribute.  Catch (JVMS {@jvms 3.12}) and
 finally (JVMS {@jvms 3.14}) blocks in Java source code compile to exception
 table entries.  The order of exception table entries is significant: when an
 exception is thrown in a method, execution branches to the first matching
 exception handler if such a handler exists (JVMS {@jvms 2.10}). Delivered as
 a `CodeElement` when traversing the contents of a `CodeModel`.
 

 An exception table entry is composite:
 {@snippet lang=text :
 // @link substring="ExceptionCatch" target="#of(Label, Label, Label, Optional)" :
 ExceptionCatch(
     Label handler, // @link substring="handler" target="#handler"
     Label tryStart, // @link substring="tryStart" target="#tryStart"
     Label tryEnd, // @link substring="tryEnd" target="#tryEnd"
     Optional catchType // @link substring="catchType" target="#catchType"
 )
 }

**参见**

- CodeBuilder#exceptionCatch CodeBuilder::exceptionCatch
- CodeAttribute#exceptionHandlers()

> *Since 24*
