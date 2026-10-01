---
id: "java-en-function-java-lang-classfile-bufwriter"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.BufWriter"
title: "BufWriter"
directive: "type"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/BufWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BufWriter

Advanced `class` file writing support for `AttributeMapper`s.
 Supports writing portions of a `class` file to a growable buffer, such
 as writing various numerical types (e.g., `u2`, `u4`), to the end
 of the buffer, as well as to create constant pool entries.
 

 All numeric values in the `class` file format are `BIG_ENDIAN big endian`.  Writing larger numeric values to smaller
 numeric values are always done with truncation, that the least significant
 bytes are kept and the other bytes are silently dropped.  As a result,
 numeric value writing methods can write both signed and unsigned values, and
 users should validate their values before writing if silent dropping of most
 significant bytes is not the intended behavior.

**参见**

- AttributeMapper#writeAttribute(BufWriter, Attribute)

> *Since 24*
