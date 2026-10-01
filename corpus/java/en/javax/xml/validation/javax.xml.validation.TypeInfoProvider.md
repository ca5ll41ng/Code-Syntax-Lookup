---
id: "java-en-function-javax-xml-validation-typeinfoprovider"
language: "java"
lang: "en"
category: "function"
name: "javax.xml.validation.TypeInfoProvider"
title: "TypeInfoProvider"
directive: "type"
module: "java.xml/javax.xml.validation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/validation/TypeInfoProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TypeInfoProvider

This class provides access to the type information determined
 by `ValidatorHandler`.

 

 Some schema languages, such as W3C XML Schema, encourages a validator
 to report the "type" it assigns to each attribute/element.
 Those applications who wish to access this type information can invoke
 methods defined on this "interface" to access such type information.

 

 Implementation of this "interface" can be obtained through the
 `getTypeInfoProvider` method.

**参见**

- org.w3c.dom.TypeInfo

> *Since 1.5*
