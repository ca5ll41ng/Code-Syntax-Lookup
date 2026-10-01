---
id: "java-en-function-xpath-setxpathfunctionresolver"
language: "java"
lang: "en"
category: "function"
name: "XPath.setXPathFunctionResolver"
signature: "public void setXPathFunctionResolver(XPathFunctionResolver resolver)"
title: "XPath.setXPathFunctionResolver"
directive: "method"
module: "java.xml/javax.xml.xpath"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/xpath/XPath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XPath.setXPathFunctionResolver

```java
public void setXPathFunctionResolver(XPathFunctionResolver resolver)
```

Establish a function resolver.

 

A `NullPointerException` is thrown if `resolver` is `null`.

**参数**

- **resolver** — XPath function resolver.

**异常**

- **NullPointerException** — If `resolver` is `null`.
