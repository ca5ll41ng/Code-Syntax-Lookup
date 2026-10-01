---
id: "java-en-function-java-lang-classfile-attribute-nesthostattribute"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.attribute.NestHostAttribute"
title: "NestHostAttribute"
directive: "type"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/NestHostAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NestHostAttribute

Models the `nestHost() NestHost` attribute (JVMS {@jvms
 4.7.28}), which indicates this class is a member of a nest and the host
 class of the nest.
 

 This attribute only appears on classes, and does not permit `allowMultiple multiple instances` in a class.  It has a
 data dependency on the `CP_REFS constant pool`.
 

 The attribute was introduced in the Java SE Platform version 11, major
 version `ClassFile#JAVA_11_VERSION`.

**参见**

- Attributes#nestHost()
- NestMembersAttribute
- Class#getNestHost()
- Class#isNestmateOf(Class)

> *Since 24*
