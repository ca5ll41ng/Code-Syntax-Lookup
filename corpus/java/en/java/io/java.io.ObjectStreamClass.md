---
id: "java-en-function-java-io-objectstreamclass"
language: "java"
lang: "en"
category: "function"
name: "java.io.ObjectStreamClass"
title: "ObjectStreamClass"
directive: "type"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectStreamClass.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectStreamClass

Serialization's descriptor for classes.  It contains the name and
 serialVersionUID of the class.  The ObjectStreamClass for a specific class
 loaded in this Java VM can be found/created using the lookup method.

 

The algorithm to compute the SerialVersionUID is described in
 
    Java Object Serialization Specification, Section 4.6, "Stream Unique Identifiers".

**参见**

- ObjectStreamField
- Java Object Serialization Specification, Section 4, "Class Descriptors"

> *Since 1.1*
