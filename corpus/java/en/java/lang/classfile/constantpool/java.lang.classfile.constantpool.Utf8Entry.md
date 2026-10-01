---
id: "java-en-function-java-lang-classfile-constantpool-utf8entry"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.constantpool.Utf8Entry"
title: "Utf8Entry"
directive: "type"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/Utf8Entry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Utf8Entry

Models a `CONSTANT_UTF8_info` constant, representing strings, in the
 constant pool of a `class` file.  This describes strings in the
 `#modified-utf-8 Modified UTF-8` format.
 

 The use of a `Utf8Entry` is represented by a `String`.
 Conversions are through `utf8Entry` and
 `stringValue`.
 

 Some uses of `Utf8Entry` represent field or method `descriptorString() descriptor strings`, symbolically
 represented as `ClassDesc` or `MethodTypeDesc`, depending on
 where a `Utf8Entry` appear.  Entries representing such uses are created
 with `utf8Entry` and `utf8Entry`, and they can be converted to
 symbolic descriptors on a per-use-site basis, such as in `classSymbol` and `methodTypeSymbol`.
 

 Unlike most constant pool entries, a UTF-8 entry is of flexible length: it is
 represented as an array structure, with an `u2` for the data length in
 bytes, followed by that number of bytes of Modified UTF-8 data.  It can
 represent at most 65535 bytes of data due to the physical restrictions of
 `#u2 u2`.

**参见**

- DataInput##modified-utf-8 Modified UTF-8

> *Since 24*
