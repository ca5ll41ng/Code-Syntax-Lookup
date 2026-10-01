---
id: "java-en-function-domimplementation-createdocumenttype"
language: "java"
lang: "en"
category: "function"
name: "DOMImplementation.createDocumentType"
signature: "public DocumentType createDocumentType(String qualifiedName, String publicId, String systemId) throws DOMException"
title: "DOMImplementation.createDocumentType"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/DOMImplementation.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DOMImplementation.createDocumentType

```java
public DocumentType createDocumentType(String qualifiedName, String publicId, String systemId) throws DOMException
```

Creates an empty DocumentType node. Entity declarations
 and notations are not made available. Entity reference expansions and
 default attribute additions do not occur..

**参数**

- **qualifiedName** — The qualified name of the document type to be created.
- **publicId** — The external subset public identifier.
- **systemId** — The external subset system identifier.

**返回**

- A new DocumentType node with Node.ownerDocument set to null.

**异常**

- **DOMException** — INVALID_CHARACTER_ERR: Raised if the specified qualified name is not an XML name according to [XML 1.0].  NAMESPACE_ERR: Raised if the qualifiedName is malformed.  NOT_SUPPORTED_ERR: May be raised if the implementation does not support the feature "XML" and the language exposed through the Document does not support XML Namespaces (such as [HTML 4.01]).

> *Since 1.4, DOM Level 2*
