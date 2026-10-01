---
id: "java-en-function-java-lang-classfile-constantpool-methodhandleentry"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.constantpool.MethodHandleEntry"
title: "MethodHandleEntry"
directive: "type"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/MethodHandleEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandleEntry

Models a `CONSTANT_MethodHandle_info` structure, or a symbolic
 reference to a `MethodHandle method handle`, in the constant pool
 of a `class` file.  The method handle directly accesses an accessible
 method, field, or constructor.
 

 The use of a `MethodHandleEntry` is modeled by a `DirectMethodHandleDesc`.  Conversions are through `methodHandleEntry` and `asSymbol`.
 

 A method handle entry is composite:
 {@snippet lang=text :
 // @link substring="MethodHandleEntry" target="ConstantPoolBuilder#methodHandleEntry(int, MemberRefEntry)" :
 MethodHandleEntry(
     int refKind, // @link substring="refKind" target="#kind()"
     MemberRefEntry reference // @link substring="reference" target="#reference()"
 )
 }
 where `refKind` is in the range `[1, 9]`.

**参见**

- ConstantPoolBuilder#methodHandleEntry ConstantPoolBuilder::methodHandleEntry

> *Since 24*
