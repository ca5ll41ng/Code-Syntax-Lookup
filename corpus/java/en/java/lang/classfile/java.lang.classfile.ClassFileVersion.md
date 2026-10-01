---
id: "java-en-function-java-lang-classfile-classfileversion"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.ClassFileVersion"
title: "ClassFileVersion"
directive: "type"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/ClassFileVersion.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassFileVersion

Models the minor and major version numbers of a `class` file (JVMS
 {@jvms 4.1}).  The `class` file version appears exactly once in each
 class, and is set to an unspecified default value if not explicitly provided.
 

 The major versions of `class` file format begins at `ClassFile#JAVA_1_VERSION` for Java Platform version 1.0.2, and is continuous
 up to `latestMajorVersion`.  In general, each major version
 defines a new supported `class` file format, modeled by `ClassFileFormatVersion`, and supports all previous formats.
 

 For major versions up to `ClassFile#JAVA_11_VERSION` for Java SE
 Platform 11, the minor version of any value is supported.  For major versions
 `ClassFile#JAVA_12_VERSION` for Java SE Platform version 12 and above,
 the minor version must be `0` or `ClassFile#PREVIEW_MINOR_VERSION`.
 The minor version `0` is always supported, and represents the format
 modeled by `ClassFileFormatVersion`.  The minor version `65535`
 indicates the `class` file uses preview features of the Java SE
 Platform release represented by the major version.  A Java Virtual Machine
 can only load such a `class` file if it has the same Java SE Platform
 version and the JVM has preview features enabled.

**参见**

- ClassModel#majorVersion()
- ClassModel#minorVersion()
- ClassFileFormatVersion

> *Since 24*
