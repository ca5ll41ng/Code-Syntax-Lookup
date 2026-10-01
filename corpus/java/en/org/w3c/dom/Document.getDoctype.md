---
id: "java-en-function-document-getdoctype"
language: "java"
lang: "en"
category: "function"
name: "Document.getDoctype"
signature: "public DocumentType getDoctype()"
title: "Document.getDoctype"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Document.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Document.getDoctype

```java
public DocumentType getDoctype()
```

The Document Type Declaration (see DocumentType)
 associated with this document. For XML documents without a document
 type declaration this returns null. For HTML documents,
 a DocumentType object may be returned, independently of
 the presence or absence of document type declaration in the HTML
 document.
 
This provides direct access to the DocumentType node,
 child node of this Document. This node can be set at
 document creation time and later changed through the use of child
 nodes manipulation methods, such as Node.insertBefore,
 or Node.replaceChild. Note, however, that while some
 implementations may instantiate different types of
 Document objects supporting additional features than the
 "Core", such as "HTML" [DOM Level 2 HTML]
 , based on the DocumentType specified at creation time,
 changing it afterwards is very unlikely to result in a change of the
 features supported.

> *Since 1.4, DOM Level 3*
