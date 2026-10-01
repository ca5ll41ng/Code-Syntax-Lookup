---
id: "java-en-function-document-createattribute"
language: "java"
lang: "en"
category: "function"
name: "Document.createAttribute"
signature: "public Attr createAttribute(String name) throws DOMException"
title: "Document.createAttribute"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Document.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Document.createAttribute

```java
public Attr createAttribute(String name) throws DOMException
```

Creates an Attr of the given name. Note that the
 Attr instance can then be set on an Element
 using the setAttributeNode method.
 
To create an attribute with a qualified name and namespace URI, use
 the createAttributeNS method.

**参数**

- **name** — The name of the attribute.

**返回**

- A new Attr object with the nodeName attribute set to name, and localName, prefix, and namespaceURI set to null. The value of the attribute is the empty string.

**异常**

- **DOMException** — INVALID_CHARACTER_ERR: Raised if the specified name is not an XML name according to the XML version in use specified in the Document.xmlVersion attribute.
