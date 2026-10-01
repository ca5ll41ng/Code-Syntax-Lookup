---
id: "java-en-function-xpath-setnamespacecontext"
language: "java"
lang: "en"
category: "function"
name: "XPath.setNamespaceContext"
signature: "public void setNamespaceContext(NamespaceContext nsContext)"
title: "XPath.setNamespaceContext"
directive: "method"
module: "java.xml/javax.xml.xpath"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/xpath/XPath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XPath.setNamespaceContext

```java
public void setNamespaceContext(NamespaceContext nsContext)
```

Establish a namespace context.

 

A `NullPointerException` is thrown if `nsContext` is `null`.

**参数**

- **nsContext** — Namespace context to use.

**异常**

- **NullPointerException** — If `nsContext` is `null`.
