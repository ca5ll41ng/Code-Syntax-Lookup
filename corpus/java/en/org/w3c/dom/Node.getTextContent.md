---
id: "java-en-function-node-gettextcontent"
language: "java"
lang: "en"
category: "function"
name: "Node.getTextContent"
signature: "public String getTextContent() throws DOMException"
title: "Node.getTextContent"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Node.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Node.getTextContent

```java
public String getTextContent() throws DOMException
```

This attribute returns the text content of this node and its
 descendants. When it is defined to be null, setting it
 has no effect. On setting, any possible children this node may have
 are removed and, if it the new string is not empty or
 null, replaced by a single Text node
 containing the string this attribute is set to.
 
 On getting, no serialization is performed, the returned string
 does not contain any markup. No whitespace normalization is performed
 and the returned string does not contain the white spaces in element
 content (see the attribute
 Text.isElementContentWhitespace). Similarly, on setting,
 no parsing is performed either, the input string is taken as pure
 textual content.
 
The string returned is made of the text content of this node
 depending on its type, as defined below:
 
 Node/Content table
 
 
 Node type
 Content
 
 
 
 
 
 ELEMENT_NODE, ATTRIBUTE_NODE, ENTITY_NODE, ENTITY_REFERENCE_NODE,
 DOCUMENT_FRAGMENT_NODE
 concatenation of the textContent
 attribute value of every child node, excluding COMMENT_NODE and
 PROCESSING_INSTRUCTION_NODE nodes. This is the empty string if the
 node has no children.
 
 
 TEXT_NODE, CDATA_SECTION_NODE, COMMENT_NODE,
 PROCESSING_INSTRUCTION_NODE
 nodeValue
 
 
 DOCUMENT_NODE,
 DOCUMENT_TYPE_NODE, NOTATION_NODE
 null

**异常**

- **DOMException** — DOMSTRING_SIZE_ERR: Raised when it would return more characters than fit in a DOMString variable on the implementation platform.

> *Since 1.5, DOM Level 3*
