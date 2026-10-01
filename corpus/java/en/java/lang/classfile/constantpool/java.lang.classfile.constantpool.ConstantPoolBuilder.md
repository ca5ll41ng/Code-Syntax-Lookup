---
id: "java-en-function-java-lang-classfile-constantpool-constantpoolbuilder"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.constantpool.ConstantPoolBuilder"
title: "ConstantPoolBuilder"
directive: "type"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/ConstantPoolBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConstantPoolBuilder

Builder for the constant pool of a `class` file.  Provides read and
 write access to the constant pool that is `constantPool()
 being built`.  Writing is append-only (the index of new entries monotonically
 increase) and idempotent (entry-bearing methods will return an existing entry
 if there is a suitable one).
 

 For `class` file building, an overload of `build(
 ClassEntry, ConstantPoolBuilder, Consumer) ClassFile::build` takes a
 `ConstantPoolBuilder`.  For `class` file transformations via
 `transformClass ClassFile::transformClass`, the `ClassFile.ConstantPoolSharingOption` controls how the constant pool builder
 of the resulting `class` is created.

 Alien Constant Pool Entries
 In `class` file building and constant pool building, some constant pool
 entries supplied may be `canWriteDirect(ConstantPool) alien`
 to this constant pool builder of the active class file builder.  For example,
 `classEntry` may be called with an
 alien UTF8 entry.  Alien entries will be converted to a pool entry in
 this constant pool builder, reusing equivalent entries or adding new entries
 if there is none.  As a result, all pool entries returned by entry-bearing
 methods in this constant pool builder belong to this constant pool.
 

 Some `ClassFileBuilder` methods may have their outputs adjusted if they
 receive pool entries alien to `constantPool
 their constant pools`.  For example, if an `ofLoad
 ldc_w` instruction with an alien entry is written to a `CodeBuilder`,
 the `CodeBuilder` may emit a functionally equivalent `ldc`
 instruction instead, if the converted entry can be encoded in such an
 instruction.
 

 To avoid the conversion of alien constant pool entries, such as for the
 accuracy of the generated `class` file, users can always supply
 constant pool entries obtained by calling the constant pool builder
 entry-bearing methods of the constant pools associated with the `ClassFileBuilder`.  Otherwise, the conversions have no impact on the
 behaviors of the generated `class` files.

**参见**

- ClassFileBuilder#constantPool()

> *Since 24*
