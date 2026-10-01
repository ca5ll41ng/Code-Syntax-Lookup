---
id: "java-en-function-java-lang-classfile-constantpool-annotationconstantvalueentry"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.constantpool.AnnotationConstantValueEntry"
title: "AnnotationConstantValueEntry"
directive: "type"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/AnnotationConstantValueEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AnnotationConstantValueEntry

Marker interface for constant pool entries that can represent constant values
 associated with elements of annotations.  They are also the only entries that
 do not refer to other constant pool entries.

 An annotation constant value entry alone is not sufficient to determine
 the annotation constant; for example, an `IntegerEntry` of `1`
 can mean `true` in `AnnotationValue.OfBoolean` or `1`
 in `AnnotationValue.OfInt`.

**参见**

- AnnotationValue.OfConstant

> *Since 24*
