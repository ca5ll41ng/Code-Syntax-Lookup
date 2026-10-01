---
id: "java-en-function-document-createelement"
language: "java"
lang: "en"
category: "function"
name: "Document.createElement"
signature: "public Element createElement(String tagName) throws DOMException"
title: "Document.createElement"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Document.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Document.createElement

```java
public Element createElement(String tagName) throws DOMException
```

Creates an element of the type specified. Note that the instance
 returned implements the Element interface, so attributes
 can be specified directly on the returned object.
 
In addition, if there are known attributes with default values,
 Attr nodes representing them are automatically created
 and attached to the element.
 
To create an element with a qualified name and namespace URI, use
 the createElementNS method.

**参数**

- **tagName** — The name of the element type to instantiate. For XML, this is case-sensitive, otherwise it depends on the case-sensitivity of the markup language in use. In that case, the name is mapped to the canonical form of that markup by the DOM implementation.

**返回**

- A new Element object with the nodeName attribute set to tagName, and localName, prefix, and namespaceURI set to null.

**异常**

- **DOMException** — INVALID_CHARACTER_ERR: Raised if the specified name is not an XML name according to the XML version in use specified in the Document.xmlVersion attribute.
