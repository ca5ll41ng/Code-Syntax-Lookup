---
id: "java-en-function-java-lang-classfile-constantpool-classentry"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.constantpool.ClassEntry"
title: "ClassEntry"
directive: "type"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/ClassEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassEntry

Models a `CONSTANT_Class_info` structure, representing a reference
 type, in the constant pool of a `class` file.
 

 The use of a `ClassEntry` is modeled by a `ClassDesc` that is not
 primitive.  Conversions are through `classEntry(
 ClassDesc)` and `asSymbol`.
 

 A `ClassEntry` is composite:
 {@snippet lang=text :
 // @link substring="ClassEntry" target="ConstantPoolBuilder#classEntry(Utf8Entry)" :
 ClassEntry(Utf8Entry name) // @link substring="name" target="#name"
 }
 where `name` represents:
 
 
- The internal form of a binary name (JVMS {@jvms 4.2.1}), if and only if
 this `ClassEntry` represents a class or interface, such as `java/lang/String` for the `String` class.
 
- A field descriptor string (JVMS {@jvms 4.3.2}) representing an array type,
 if and only if this `ClassEntry` represents an array type, such as
 `[I` for the `int[]` type, or `[Ljava/lang/String;` for the
 `String[]` type.
 

 A field descriptor string for an array type can be distinguished by its
 leading `'['` character.

 The internal form of a binary name, where all occurrences of `.` in the
 name are replaced by `/`, is informally known as an {@index
 "internal name"}.  This concept also applies to package names in
 addition to class and interface names.

**参见**

- ConstantPoolBuilder#classEntry ConstantPoolBuilder::classEntry
- ClassDesc

> *Since 24*
