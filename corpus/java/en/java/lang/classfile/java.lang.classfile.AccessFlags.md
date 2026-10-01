---
id: "java-en-function-java-lang-classfile-accessflags"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.AccessFlags"
title: "AccessFlags"
directive: "type"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/AccessFlags.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AccessFlags

Models the access flags for a class, method, or field.  The access flags
 appears exactly once in each class, method, or field; a `ClassBuilder` and a `FieldBuilder` chooses an unspecified default value
 if access flags are not provided, and a `MethodBuilder` is always
 created with access flags.
 

 `AccessFlags` cannot be created via a factory method directly; it can
 be created with `withFlags` methods on the respective builders.
 

 A `MethodBuilder` throws an `IllegalArgumentException` if it is
 supplied an `AccessFlags` object that changes the preexisting
 `ACC_STATIC ACC_STATIC` flag of the builder, because the
 access flag change may invalidate previously supplied data to the builder.

 The access flags of classes, methods, and fields are modeled as a standalone
 object to support streaming as elements for `ClassFileTransform`.
 Other access flags are not elements of a `CompoundElement` and thus not
 modeled by `AccessFlags`; they provide their own `flagsMask`,
 `flags`, and `has` methods.

**参见**

- ClassModel#flags()
- FieldModel#flags()
- MethodModel#flags()
- ClassBuilder#withFlags
- FieldBuilder#withFlags
- MethodBuilder#withFlags

> *Since 24*
