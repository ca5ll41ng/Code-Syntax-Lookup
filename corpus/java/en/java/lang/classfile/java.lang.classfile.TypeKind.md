---
id: "java-en-function-java-lang-classfile-typekind"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.TypeKind"
title: "TypeKind"
directive: "type"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/TypeKind.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TypeKind

Describes the data types Java Virtual Machine operates on.  This omits `returnAddress` (JVMS {@jvms 2.3.3}) and includes `VOID void` (JVMS
 {@jvms 4.3.3}), which appears as a method return type.
 

 The {@index returnAddress} type is only used by discontinued
 `DiscontinuedInstruction.JsrInstruction jump subroutine` and
 `DiscontinuedInstruction.RetInstruction return from subroutine`
 instructions.  Jump subroutine instructions push `returnAddress` to the
 operand stack; `StoreInstruction astore` instructions store `returnAddress` from the operand stack to local variables; return from
 subroutine instructions load `returnAddress` from local variables.

 Computational Type
 In the `class` file format, local variables (JVMS {@jvms 2.6.1}),
 and the operand stack (JVMS {@jvms 2.6.2}) of the Java Virtual Machine,
 `BOOLEAN boolean`, `BYTE byte`, `CHAR char`,
 `SHORT short` types do not exist and are `asLoadable() represented` by the `INT int` computational type.
 `INT int`, `FLOAT float`, `REFERENCE reference`,
 `returnAddress`, `LONG long`, and `DOUBLE doule`
 are the computational types of the Java Virtual Machine.

> *Since 24*
