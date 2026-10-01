---
id: "java-en-function-xpathfactory-setxpathvariableresolver"
language: "java"
lang: "en"
category: "function"
name: "XPathFactory.setXPathVariableResolver"
signature: "public abstract void setXPathVariableResolver(XPathVariableResolver resolver)"
title: "XPathFactory.setXPathVariableResolver"
directive: "method"
module: "java.xml/javax.xml.xpath"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/xpath/XPathFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XPathFactory.setXPathVariableResolver

```java
public abstract void setXPathVariableResolver(XPathVariableResolver resolver)
```

Establish a default variable resolver.

 

Any XPath objects constructed from this factory will use
 the specified resolver by default.

 

A NullPointerException is thrown if resolver
 is null.

**参数**

- **resolver** — Variable resolver.

**异常**

- **NullPointerException** — If resolver is null.
