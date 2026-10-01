---
id: "java-en-function-org-w3c-dom-ls-lsserializerfilter"
language: "java"
lang: "en"
category: "function"
name: "org.w3c.dom.ls.LSSerializerFilter"
title: "LSSerializerFilter"
directive: "type"
module: "java.xml/org.w3c.dom.ls"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ls/LSSerializerFilter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LSSerializerFilter

LSSerializerFilters provide applications the ability to
 examine nodes as they are being serialized and decide what nodes should
 be serialized or not. The LSSerializerFilter interface is
 based on the NodeFilter interface defined in [DOM Level 2 Traversal and      Range]
 .
 

 Document, DocumentType,
 DocumentFragment, Notation, Entity
 , and children of Attr nodes are not passed to the filter.
 The child nodes of an EntityReference node are only passed
 to the filter if the EntityReference node is skipped by the
 method LSParserFilter.acceptNode().
 

 When serializing an Element, the element is passed to the
 filter before any of its attributes are passed to the filter. Namespace
 declaration attributes, and default attributes (except in the case when "
 discard-default-content" is set to false), are never passed
 to the filter.
 

 The result of any attempt to modify a node passed to a
 LSSerializerFilter is implementation dependent.
 

 DOM applications must not raise exceptions in a filter. The effect of
 throwing exceptions from a filter is DOM implementation dependent.
 

 For efficiency, a node passed to the filter may not be the same as the
 one that is actually in the tree. And the actual node (node object
 identity) may be reused during the process of filtering and serializing a
 document.
 

See also the Document Object Model (DOM) Level 3 Load
and Save Specification.

> *Since 1.5*
