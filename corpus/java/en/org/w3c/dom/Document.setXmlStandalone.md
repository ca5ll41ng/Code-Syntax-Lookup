---
id: "java-en-function-document-setxmlstandalone"
language: "java"
lang: "en"
category: "function"
name: "Document.setXmlStandalone"
signature: "public void setXmlStandalone(boolean xmlStandalone) throws DOMException"
title: "Document.setXmlStandalone"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Document.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Document.setXmlStandalone

```java
public void setXmlStandalone(boolean xmlStandalone) throws DOMException
```

An attribute specifying, as part of the XML declaration, whether this document is standalone. This is false when
 unspecified.
 

**Note:**  No verification is done on the value when setting
 this attribute. Applications should use
 Document.normalizeDocument() with the "validate"
 parameter to verify if the value matches the validity
 constraint for standalone document declaration as defined in [XML 1.0].

**异常**

- **DOMException** — NOT_SUPPORTED_ERR: Raised if this document does not support the "XML" feature.

> *Since 1.5, DOM Level 3*
