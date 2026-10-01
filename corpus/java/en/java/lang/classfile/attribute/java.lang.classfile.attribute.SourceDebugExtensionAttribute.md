---
id: "java-en-function-java-lang-classfile-attribute-sourcedebugextensionattribute"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.attribute.SourceDebugExtensionAttribute"
title: "SourceDebugExtensionAttribute"
directive: "type"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/SourceDebugExtensionAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SourceDebugExtensionAttribute

Models the `sourceDebugExtension() SourceDebugExtension`
 attribute (JVMS {@jvms 4.7.11}), which stores arbitrary `#modified-utf-8 modified UTF-8` data.
 

 This attribute only appears on classes, and does not permit `allowMultiple multiple instances` in a class.  It has
 `STATELESS no data dependency`.
 

 The attribute was introduced in the Java SE Platform version 5.0, major
 version `ClassFile#JAVA_5_VERSION`.

**参见**

- Attributes#sourceDebugExtension()

> *Since 24*
