---
id: "java-en-function-java-lang-classfile-classbuilder"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.ClassBuilder"
title: "ClassBuilder"
directive: "type"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassBuilder

A builder for a `class` file.  `ClassFile` provides different
 `build` methods that accept handlers to configure such a builder;
 `build` suffices for basic usage, while
 `build` allows
 fine-grained control over `constantPool() the
 constant pool`.
 

 Refer to `ClassFileBuilder` for general guidance and caution around
 the use of builders for structures in the `class` file format.

**参见**

- ClassFile#build(ClassEntry, ConstantPoolBuilder, Consumer)
- ClassModel
- ClassTransform

> *Since 24*
