---
id: "java-en-function-org-w3c-dom-document"
language: "java"
lang: "en"
category: "function"
name: "org.w3c.dom.Document"
title: "Document"
directive: "type"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Document.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Document

The Document interface represents the entire HTML or XML
 document. Conceptually, it is the root of the document tree, and provides
 the primary access to the document's data.
 

Since elements, text nodes, comments, processing instructions, etc.
 cannot exist outside the context of a Document, the
 Document interface also contains the factory methods needed
 to create these objects. The Node objects created have a
 ownerDocument attribute which associates them with the
 Document within whose context they were created.
 

See also the Document Object Model (DOM) Level 3 Core Specification.

> *Since 1.4, DOM Level 2*
