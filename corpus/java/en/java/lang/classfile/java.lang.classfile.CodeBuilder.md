---
id: "java-en-function-java-lang-classfile-codebuilder"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.CodeBuilder"
title: "CodeBuilder"
directive: "type"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder

A builder for `CodeModel Code` attributes (method bodies).  `withCode` is the basic way to obtain a code builder; `withMethodBody` is a shortcut.  There are also derived code
 builders from `block`, which handles code blocks and `transforming`, which runs transforms on existing handlers, both of which
 requires a code builder to be available first.
 

 Refer to `ClassFileBuilder` for general guidance and caution around
 the use of builders for structures in the `class` file format.  Unlike
 in other builders, the order of member elements in a code builder is
 significant: they affect the resulting bytecode.  Many Class-File API options
 affect code builders: `DeadCodeOption` and `ShortJumpsOption`
 affect the resulting bytecode, and `DeadLabelsOption`, `DebugElementsOption`, `LineNumbersOption`, `StackMapsOption`, and
 `AttributesProcessingOption` affect the resulting attributes on the
 built `Code` attribute, that some elements sent to a code builder is
 otherwise ignored.

 Instruction Factories
 `CodeBuilder` provides convenience methods to create instructions (See
 JVMS {@jvms 6.5} Instructions) by their mnemonic, taking necessary operands.
 
 
- Instructions that encode their operands in their opcode, such as `aload_`, share their factories with their generic version like `aload aload`. Note that some constant instructions, such as `iconst_1
 iconst_1`, do not have generic versions, and thus have their own factories.
 
- Instructions that accept wide operands, such as `ldc2_w` or `wide`, share their factories with their regular version like `ldc`.
 Note that `goto_w goto_w` has its own factory to avoid `ShortJumpsOption short jumps`.
 
- The `goto`, `instanceof`, `new`, and `return`
 instructions' factories are named `goto_ goto_`, `instanceOf
 instanceOf`, `new_ new_`, and `return_() return_` respectively,
 due to clashes with keywords in the Java programming language.
 
- Factories are not provided for instructions `JSR jsr`,
 `JSR_W jsr_w`, `RET ret`, and `RET_W
 wide ret`, which cannot appear in class files with major version `ClassFile#JAVA_7_VERSION` or higher. (JVMS {@jvms 4.9.1})  They can still be
 provided via `with`.

**参见**

- MethodBuilder#withCode
- CodeModel
- CodeTransform

> *Since 24*
