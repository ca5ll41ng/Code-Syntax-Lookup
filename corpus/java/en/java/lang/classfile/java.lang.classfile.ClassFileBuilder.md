---
id: "java-en-function-java-lang-classfile-classfilebuilder"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.ClassFileBuilder"
title: "ClassFileBuilder"
directive: "type"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassFileBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassFileBuilder

A builder for a `CompoundElement`, which accepts the member elements
 to be integrated into the built structure.  Builders are usually passed as
 an argument to `Consumer` handlers, such as in `build`.  The handlers should deliver elements
 to a builder similar to how a `CompoundElement` traverses its member
 elements.
 

 The basic way a builder accepts elements is through `with`, which
 supports call chaining.  Concrete subtypes of builders usually define extra
 methods to define elements directly to the builder, such as `withFlags` or `aload`.
 

 Whether a member element can appear multiple times in a compound structure
 affects the behavior of the element in `ClassFileBuilder`s.  If an
 element can appear at most once but multiple instances are supplied to a
 `ClassFileBuilder`, the last supplied instance appears on the built
 structure.  If an element appears exactly once but no instance is supplied,
 an unspecified default value element may be used in that structure.
 

 Due to restrictions of the `class` file format, certain member elements
 that can be modeled by the API cannot be represented in the built structure
 under specific circumstances.  Passing such elements to the builder causes
 `IllegalArgumentException`.  Some `ClassFile.Option`s control
 whether such elements should be altered or dropped to produce valid `class` files.

**参数**

- **the** — member element type
- **the** — self type of this builder

**参见**

- CompoundElement
- ClassFileTransform

> *Since 24*
