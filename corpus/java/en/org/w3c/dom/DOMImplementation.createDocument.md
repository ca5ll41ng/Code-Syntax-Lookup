---
id: "java-en-function-domimplementation-createdocument"
language: "java"
lang: "en"
category: "function"
name: "DOMImplementation.createDocument"
signature: "public Document createDocument(String namespaceURI, String qualifiedName, DocumentType doctype) throws DOMException"
title: "DOMImplementation.createDocument"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/DOMImplementation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DOMImplementation.createDocument

```java
public Document createDocument(String namespaceURI, String qualifiedName, DocumentType doctype) throws DOMException
```

Creates a DOM Document object of the specified type with its document
 element.
 
Note that based on the DocumentType given to create
 the document, the implementation may instantiate specialized
 Document objects that support additional features than
 the "Core", such as "HTML" [DOM Level 2 HTML]
 . On the other hand, setting the DocumentType after the
 document was created makes this very unlikely to happen.
 Alternatively, specialized Document creation methods,
 such as createHTMLDocument [DOM Level 2 HTML]
 , can be used to obtain specific types of Document
 objects.

**参数**

- **namespaceURI** — The namespace URI of the document element to create or null.
- **qualifiedName** — The qualified name of the document element to be created or null.
- **doctype** — The type of document to be created or null. When doctype is not null, its Node.ownerDocument attribute is set to the document being created.

**返回**

- A new Document object with its document element. If the NamespaceURI, qualifiedName, and doctype are null, the returned Document is empty with no document element.

**异常**

- **DOMException** — INVALID_CHARACTER_ERR: Raised if the specified qualified name is not an XML name according to [XML 1.0].  NAMESPACE_ERR: Raised if the qualifiedName is malformed, if the qualifiedName has a prefix and the namespaceURI is null, or if the qualifiedName is null and the namespaceURI is different from null, or if the qualifiedName has a prefix that is "xml" and the namespaceURI is different from " http://www.w3.org/XML/1998/namespace" [XML Namespaces] , or if the DOM implementation does not support the "XML" feature but a non-null namespace URI was provided, since namespaces were defined by XML.  WRONG_DOCUMENT_ERR: Raised if doctype has already been used with a different document or was created from a different implementation.  NOT_SUPPORTED_ERR: May be raised if the implementation does not support the feature "XML" and the language exposed through the Document does not support XML Namespaces (such as [HTML 4.01]).

> *Since 1.4, DOM Level 2*
