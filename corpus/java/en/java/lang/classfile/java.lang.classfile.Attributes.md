---
id: "java-en-function-java-lang-classfile-attributes"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.Attributes"
title: "Attributes"
directive: "type"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/Attributes.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Attributes

Attribute mappers for predefined (JVMS {@jvms 4.7}) and JDK-specific
 nonstandard attributes.
 

 Unless otherwise specified, each mapper returned by methods in this class:
 
 
- is predefined in the JVMS instead of JDK-specific;
 
- does not permit `allowMultiple() multiple
 attribute instances` in the same structure;
 
- the attribute has a `stability() data
 dependency` on the `CP_REFS constant pool`.

**参见**

- AttributeMapper
- java.lang.classfile.attribute

> *Since 24*
