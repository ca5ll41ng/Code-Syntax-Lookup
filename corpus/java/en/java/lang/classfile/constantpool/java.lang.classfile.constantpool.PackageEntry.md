---
id: "java-en-function-java-lang-classfile-constantpool-packageentry"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.constantpool.PackageEntry"
title: "PackageEntry"
directive: "type"
module: "java.base/java.lang.classfile.constantpool"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/constantpool/PackageEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PackageEntry

Models a `CONSTANT_Package_info`, representing a package, in the
 constant pool of a `class` file.
 

 The use of a `PackageEntry` is represented by a `PackageDesc`
 that does not represent an unnamed package.  Conversions are through
 `packageEntry` and
 `asSymbol`.
 

 A package entry is composite:
 {@snippet lang=text :
 // @link substring="PackageEntry" target="ConstantPoolBuilder#packageEntry(Utf8Entry)" :
 PackageEntry(Utf8Entry name) // @link substring="name" target="#name()"
 }
 where `name` is the `#internalname internal form`
 of a binary package name and is not empty.

> *Since 24*
