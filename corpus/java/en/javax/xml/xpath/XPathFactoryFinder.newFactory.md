---
id: "java-en-function-xpathfactoryfinder-newfactory"
language: "java"
lang: "en"
category: "function"
name: "XPathFactoryFinder.newFactory"
signature: "public XPathFactory newFactory(String uri) throws XPathFactoryConfigurationException"
title: "XPathFactoryFinder.newFactory"
directive: "method"
module: "java.xml/javax.xml.xpath"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/xpath/XPathFactoryFinder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XPathFactoryFinder.newFactory

```java
public XPathFactory newFactory(String uri) throws XPathFactoryConfigurationException
```

Creates a new `XPathFactory` object for the specified
 object model.

**参数**

- **uri** — Identifies the underlying object model.

**返回**

- null if the callee fails to create one.

**异常**

- **NullPointerException** — If the parameter is null.
