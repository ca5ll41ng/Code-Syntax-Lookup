---
id: "java-en-function-domimplementationls-createlsserializer"
language: "java"
lang: "en"
category: "function"
name: "DOMImplementationLS.createLSSerializer"
signature: "public LSSerializer createLSSerializer()"
title: "DOMImplementationLS.createLSSerializer"
directive: "method"
module: "java.xml/org.w3c.dom.ls"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/ls/DOMImplementationLS.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DOMImplementationLS.createLSSerializer

```java
public LSSerializer createLSSerializer()
```

Create a new LSSerializer object.

**返回**

- The newly created LSSerializer object.   **Note:**    By default, the newly created LSSerializer has no DOMErrorHandler, i.e. the value of the "error-handler" configuration parameter is null. However, implementations may provide a default error handler at creation time. In that case, the initial value of the "error-handler" configuration parameter on the new LSSerializer object contains a reference to the default error handler.
