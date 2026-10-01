---
id: "java-en-function-javax-xml-transform-transformer"
language: "java"
lang: "en"
category: "function"
name: "javax.xml.transform.Transformer"
title: "Transformer"
directive: "type"
module: "java.xml/javax.xml.transform"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/Transformer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Transformer

An instance of this abstract class can transform a
 source tree into a result tree.

 

An instance of this class can be obtained with the
 `newTransformer TransformerFactory.newTransformer`
 method. This instance may then be used to process XML from a
 variety of sources and write the transformation output to a
 variety of sinks.

 

An object of this class may not be used in multiple threads
 running concurrently.  Different Transformers may be used
 concurrently by different threads.

 

A Transformer may be used multiple times.  Parameters and
 output properties are preserved across transformations.

> *Since 1.4*
