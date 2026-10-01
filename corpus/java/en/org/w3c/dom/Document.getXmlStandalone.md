---
id: "java-en-function-document-getxmlstandalone"
language: "java"
lang: "en"
category: "function"
name: "Document.getXmlStandalone"
signature: "public boolean getXmlStandalone()"
title: "Document.getXmlStandalone"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/Document.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Document.getXmlStandalone

```java
public boolean getXmlStandalone()
```

An attribute specifying, as part of the XML declaration, whether this document is standalone. This is false when
 unspecified.
 

**Note:**  No verification is done on the value when setting
 this attribute. Applications should use
 Document.normalizeDocument() with the "validate"
 parameter to verify if the value matches the validity
 constraint for standalone document declaration as defined in [XML 1.0].

> *Since 1.5, DOM Level 3*
