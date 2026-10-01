---
id: "java-en-function-java-lang-classfile-attribute-codeattribute"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.attribute.CodeAttribute"
title: "CodeAttribute"
directive: "type"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/CodeAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeAttribute

Models the `code() Code` attribute (JVMS {@jvms 4.7.3}),
 which contains the bytecode of this method.
 

 This attribute only appears on methods, and does not permit `allowMultiple multiple instances` in a method.  It has a
 data dependency on the `CP_REFS constant pool`.
 

 This attribute was introduced in the Java Platform version 1.0.2, major
 version `ClassFile#JAVA_1_VERSION`.

 `CodeAttribute` models properties of a `Code` attribute read
 from `class` files.  General `class` file transformation should
 process and traverse a `CodeModel` in the traversal of a `MethodModel`, to support transformation of `Code` attributes currently
 being built.

**参见**

- Attributes#code()
- CodeModel

> *Since 24*
