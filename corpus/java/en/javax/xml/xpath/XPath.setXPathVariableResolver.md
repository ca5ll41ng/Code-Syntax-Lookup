---
id: "java-en-function-xpath-setxpathvariableresolver"
language: "java"
lang: "en"
category: "function"
name: "XPath.setXPathVariableResolver"
signature: "public void setXPathVariableResolver(XPathVariableResolver resolver)"
title: "XPath.setXPathVariableResolver"
directive: "method"
module: "java.xml/javax.xml.xpath"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/xpath/XPath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XPath.setXPathVariableResolver

```java
public void setXPathVariableResolver(XPathVariableResolver resolver)
```

Establish a variable resolver.

 

A `NullPointerException` is thrown if `resolver` is `null`.

**参数**

- **resolver** — Variable resolver.

**异常**

- **NullPointerException** — If `resolver` is `null`.
