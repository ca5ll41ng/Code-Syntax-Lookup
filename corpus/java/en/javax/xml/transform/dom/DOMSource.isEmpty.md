---
id: "java-en-function-domsource-isempty"
language: "java"
lang: "en"
category: "function"
name: "DOMSource.isEmpty"
signature: "public boolean isEmpty()"
title: "DOMSource.isEmpty"
directive: "method"
module: "java.xml/javax.xml.transform.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/dom/DOMSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DOMSource.isEmpty

```java
public boolean isEmpty()
```

Indicates whether the `DOMSource` object is empty. Empty is
 defined as follows:
 
 
- if the system identifier and node are `null`;
 
 
- if the system identifier is null, and the `node` has no child nodes.

**返回**

- true if the `DOMSource` object is empty, false otherwise
