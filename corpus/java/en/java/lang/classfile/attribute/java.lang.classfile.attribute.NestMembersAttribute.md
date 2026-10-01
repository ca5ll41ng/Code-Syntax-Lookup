---
id: "java-en-function-java-lang-classfile-attribute-nestmembersattribute"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.attribute.NestMembersAttribute"
title: "NestMembersAttribute"
directive: "type"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/NestMembersAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NestMembersAttribute

Models the `nestMembers() NestMembers` attribute (JVMS
 {@jvms 4.7.29}), which indicates that this class is the host of a nest
 and the other nest members.
 

 This attribute only appears on classes, and does not permit `allowMultiple multiple instances` in a class.  It has a
 data dependency on the `CP_REFS constant pool`.
 

 The attribute was introduced in the Java SE Platform version 11, major
 version `ClassFile#JAVA_11_VERSION`.

**参见**

- Attributes#nestMembers()
- NestHostAttribute
- Class#getNestMembers()
- Class#isNestmateOf(Class)

> *Since 24*
