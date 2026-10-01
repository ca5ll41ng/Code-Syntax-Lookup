---
id: "java-en-function-domconfiguration-getparameter"
language: "java"
lang: "en"
category: "function"
name: "DOMConfiguration.getParameter"
signature: "public Object getParameter(String name) throws DOMException"
title: "DOMConfiguration.getParameter"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/DOMConfiguration.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DOMConfiguration.getParameter

```java
public Object getParameter(String name) throws DOMException
```

Return the value of a parameter if known.

**参数**

- **name** — The name of the parameter.

**返回**

- The current object associated with the specified parameter or null if no object has been associated or if the parameter is not supported.

**异常**

- **DOMException** — NOT_FOUND_ERR: Raised when the parameter name is not recognized.
