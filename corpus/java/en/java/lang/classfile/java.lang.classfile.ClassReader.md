---
id: "java-en-function-java-lang-classfile-classreader"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.ClassReader"
title: "ClassReader"
directive: "type"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassReader

Advanced `class` file reading support for `AttributeMapper`s.
 Supports reading arbitrary offsets within a `class` file and reading
 data of various numeric types (e.g., `u2`, `u4`) in addition to
 constant pool access.
 

 All numeric values in the `class` file format are `BIG_ENDIAN big endian`.
 

 Unless otherwise specified, all out-of-bounds access result in an `IllegalArgumentException` to indicate the `class` file data is
 malformed.  Since the `class` file data is arbitrary, users should
 sanity-check the structural integrity of the data before attempting to
 interpret the potentially malformed data.

**参见**

- AttributeMapper#readAttribute(AttributedElement, ClassReader, int)

> *Since 24*
