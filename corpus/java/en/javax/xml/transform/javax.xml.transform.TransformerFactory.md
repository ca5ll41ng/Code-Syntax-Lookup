---
id: "java-en-function-javax-xml-transform-transformerfactory"
language: "java"
lang: "en"
category: "function"
name: "javax.xml.transform.TransformerFactory"
title: "TransformerFactory"
directive: "type"
module: "java.xml/javax.xml.transform"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/TransformerFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TransformerFactory

A TransformerFactory instance can be used to create
 `javax.xml.transform.Transformer` and
 `javax.xml.transform.Templates` objects.

 

The system property that determines which Factory implementation
 to create is named `"javax.xml.transform.TransformerFactory"`.
 This property names a concrete subclass of the
 `TransformerFactory` abstract class. If the property is not
 defined, a platform default is be used.

> *Since 1.5*
