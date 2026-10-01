---
id: "java-en-function-xpath-reset"
language: "java"
lang: "en"
category: "function"
name: "XPath.reset"
signature: "public void reset()"
title: "XPath.reset"
directive: "method"
module: "java.xml/javax.xml.xpath"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/xpath/XPath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XPath.reset

```java
public void reset()
```

Reset this `XPath` to its original configuration.

 

`XPath` is reset to the same state as when it was created with
 `newXPath`.
 `reset()` is designed to allow the reuse of existing `XPath`s
 thus saving resources associated with the creation of new `XPath`s.

 

The reset `XPath` is not guaranteed to have the same
 `XPathFunctionResolver`, `XPathVariableResolver`
 or `NamespaceContext` `Object`s, e.g. `equals`.
 It is guaranteed to have a functionally equal `XPathFunctionResolver`,
 `XPathVariableResolver` and `NamespaceContext`.
