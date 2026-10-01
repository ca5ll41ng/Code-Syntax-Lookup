---
id: "java-en-function-domimplementationls-createlsinput"
language: "java"
lang: "en"
category: "function"
name: "DOMImplementationLS.createLSInput"
signature: "public LSInput createLSInput()"
title: "DOMImplementationLS.createLSInput"
directive: "method"
module: "java.xml/org.w3c.dom.ls"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ls/DOMImplementationLS.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DOMImplementationLS.createLSInput

```java
public LSInput createLSInput()
```

Create a new empty input source object where
 LSInput.characterStream, LSInput.byteStream
 , LSInput.stringData LSInput.systemId,
 LSInput.publicId, LSInput.baseURI, and
 LSInput.encoding are null, and
 LSInput.certifiedText is false.

**返回**

- The newly created input object.
