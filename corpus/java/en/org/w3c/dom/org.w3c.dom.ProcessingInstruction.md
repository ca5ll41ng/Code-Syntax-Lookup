---
id: "java-en-function-org-w3c-dom-processinginstruction"
language: "java"
lang: "en"
category: "function"
name: "org.w3c.dom.ProcessingInstruction"
title: "ProcessingInstruction"
directive: "type"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ProcessingInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProcessingInstruction

The ProcessingInstruction interface represents a "processing
 instruction", used in XML as a way to keep processor-specific information
 in the text of the document.
 

 No lexical check is done on the content of a processing instruction and
 it is therefore possible to have the character sequence
 "?&gt;" in the content, which is illegal a processing
 instruction per section 2.6 of [XML 1.0]. The
 presence of this character sequence must generate a fatal error during
 serialization.
 

See also the Document Object Model (DOM) Level 3 Core Specification.

> *Since 1.4, DOM Level 2*
