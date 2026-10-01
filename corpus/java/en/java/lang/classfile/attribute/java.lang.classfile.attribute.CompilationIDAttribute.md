---
id: "java-en-function-java-lang-classfile-attribute-compilationidattribute"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.attribute.CompilationIDAttribute"
title: "CompilationIDAttribute"
directive: "type"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/CompilationIDAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompilationIDAttribute

Models the `compilationId() CompilationID` attribute, which
 records the compilation time of the `class` file.
 

 This attribute only appears on classes, and does not permit `allowMultiple multiple instances` in a class.  It has a
 data dependency on the `CP_REFS constant pool`.
 

 This attribute is not predefined in the Java SE Platform.  This is a
 JDK-specific nonstandard attribute produced by the reference implementation
 of the system Java compiler, defined by the `jdk.compiler` module.

**参见**

- Attributes#compilationId()
- CharacterRangeTableAttribute
- SourceIDAttribute

> *Since 24*
