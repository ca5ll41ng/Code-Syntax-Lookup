---
id: "java-en-function-java-lang-classfile-constantpool-stringentry"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.constantpool.StringEntry"
title: "StringEntry"
directive: "type"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/StringEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StringEntry

Models a `CONSTANT_String_info` structure, or a string constant, in the
 constant pool of a `class` file.
 

 The use of a `StringEntry` is represented by a `String`.
 Conversions are through `stringEntry` and
 `stringValue`.
 

 A string entry is composite:
 {@snippet lang=text :
 // @link substring="StringEntry" target="ConstantPoolBuilder#stringEntry(Utf8Entry)" :
 StringEntry(Utf8Entry utf8) // @link substring="utf8" target="#utf8()"
 }

> *Since 24*
