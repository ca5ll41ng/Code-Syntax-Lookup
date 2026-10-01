---
id: "java-en-function-domerror-gettype"
language: "java"
lang: "en"
category: "function"
name: "DOMError.getType"
signature: "public String getType()"
title: "DOMError.getType"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/DOMError.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DOMError.getType

```java
public String getType()
```

A DOMString indicating which related data is expected in
 relatedData. Users should refer to the specification of
 the error in order to find its DOMString type and
 relatedData definitions if any.
 

**Note:**  As an example,
 Document.normalizeDocument() does generate warnings when
 the "split-cdata-sections" parameter is in use. Therefore, the method
 generates a SEVERITY_WARNING with type
 "cdata-sections-splitted" and the first
 CDATASection node in document order resulting from the
 split is returned by the relatedData attribute.
