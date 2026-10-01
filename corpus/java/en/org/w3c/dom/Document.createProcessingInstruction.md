---
id: "java-en-function-document-createprocessinginstruction"
language: "java"
lang: "en"
category: "function"
name: "Document.createProcessingInstruction"
signature: "public ProcessingInstruction createProcessingInstruction(String target, String data) throws DOMException"
title: "Document.createProcessingInstruction"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Document.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Document.createProcessingInstruction

```java
public ProcessingInstruction createProcessingInstruction(String target, String data) throws DOMException
```

Creates a ProcessingInstruction node given the specified
 name and data strings.

**参数**

- **target** — The target part of the processing instruction.Unlike Document.createElementNS or Document.createAttributeNS, no namespace well-formed checking is done on the target name. Applications should invoke Document.normalizeDocument() with the parameter " namespaces" set to true in order to ensure that the target name is namespace well-formed.
- **data** — The data for the node.

**返回**

- The new ProcessingInstruction object.

**异常**

- **DOMException** — INVALID_CHARACTER_ERR: Raised if the specified target is not an XML name according to the XML version in use specified in the Document.xmlVersion attribute.  NOT_SUPPORTED_ERR: Raised if this document is an HTML document.
