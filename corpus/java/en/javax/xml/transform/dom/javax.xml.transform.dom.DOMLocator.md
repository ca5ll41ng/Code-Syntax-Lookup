---
id: "java-en-function-javax-xml-transform-dom-domlocator"
language: "java"
lang: "en"
category: "function"
name: "javax.xml.transform.dom.DOMLocator"
title: "DOMLocator"
directive: "type"
module: "java.xml/javax.xml.transform.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/dom/DOMLocator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DOMLocator

Indicates the position of a node in a source DOM, intended
 primarily for error reporting.  To use a DOMLocator, the receiver of an
 error must downcast the `javax.xml.transform.SourceLocator`
 object returned by an exception. A `javax.xml.transform.Transformer`
 may use this object for purposes other than error reporting, for instance,
 to indicate the source node that originated a result node.

> *Since 1.4*
