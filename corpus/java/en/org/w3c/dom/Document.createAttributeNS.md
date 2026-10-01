---
id: "java-en-function-document-createattributens"
language: "java"
lang: "en"
category: "function"
name: "Document.createAttributeNS"
signature: "public Attr createAttributeNS(String namespaceURI, String qualifiedName) throws DOMException"
title: "Document.createAttributeNS"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Document.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Document.createAttributeNS

```java
public Attr createAttributeNS(String namespaceURI, String qualifiedName) throws DOMException
```

Creates an attribute of the given qualified name and namespace URI.
 
Per [XML Namespaces]
 , applications must use the value null as the
 namespaceURI parameter for methods if they wish to have
 no namespace.

**参数**

- **namespaceURI** — The namespace URI of the attribute to create.
- **qualifiedName** — The qualified name of the attribute to instantiate.

**返回**

- A new Attr object with the following attributes:  Attributes of the `Attr` object    Attribute Value     Node.nodeName qualifiedName    Node.namespaceURI namespaceURI    Node.prefix prefix, extracted from qualifiedName, or null if there is no prefix   Node.localName local name, extracted from qualifiedName   Attr.name  qualifiedName   Node.nodeValue the empty string

**异常**

- **DOMException** — INVALID_CHARACTER_ERR: Raised if the specified qualifiedName is not an XML name according to the XML version in use specified in the Document.xmlVersion attribute.  NAMESPACE_ERR: Raised if the qualifiedName is a malformed qualified name, if the qualifiedName has a prefix and the namespaceURI is null, if the qualifiedName has a prefix that is "xml" and the namespaceURI is different from " http://www.w3.org/XML/1998/namespace", if the qualifiedName or its prefix is "xmlns" and the namespaceURI is different from "http://www.w3.org/2000/xmlns/", or if the namespaceURI is "http://www.w3.org/2000/xmlns/" and neither the qualifiedName nor its prefix is "xmlns".  NOT_SUPPORTED_ERR: Always thrown if the current document does not support the "XML" feature, since namespaces were defined by XML.

> *Since 1.4, DOM Level 2*
