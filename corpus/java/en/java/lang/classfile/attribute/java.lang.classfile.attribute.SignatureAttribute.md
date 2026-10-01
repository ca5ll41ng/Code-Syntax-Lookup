---
id: "java-en-function-java-lang-classfile-attribute-signatureattribute"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.attribute.SignatureAttribute"
title: "SignatureAttribute"
directive: "type"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/SignatureAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SignatureAttribute

Models the `signature() Signature` attribute (JVMS {@jvms
 4.7.9}), which indicates the generic signature of this structure.
 

 This attribute appears on classes, fields, methods, and record components,
 and does not permit `allowMultiple multiple
 instances` in one structure.  It has a data dependency on the `CP_REFS constant pool`.
 

 The attribute was introduced in the Java SE Platform version 5.0, major
 version `ClassFile#JAVA_5_VERSION`.

**参见**

- Signature
- ClassSignature
- MethodSignature

> *Since 24*
