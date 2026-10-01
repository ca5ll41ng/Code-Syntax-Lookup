---
id: "java-en-function-lsinput-setbaseuri"
language: "java"
lang: "en"
category: "function"
name: "LSInput.setBaseURI"
signature: "public void setBaseURI(String baseURI)"
title: "LSInput.setBaseURI"
directive: "method"
module: "java.xml/org.w3c.dom.ls"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ls/LSInput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LSInput.setBaseURI

```java
public void setBaseURI(String baseURI)
```

The base URI to be used (see section 5.1.4 in [IETF RFC 2396]) for
 resolving a relative systemId to an absolute URI.
 
 If, when used, the base URI is itself a relative URI, an empty
 string, or null, the behavior is implementation dependent.
