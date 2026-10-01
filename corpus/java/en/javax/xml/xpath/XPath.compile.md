---
id: "java-en-function-xpath-compile"
language: "java"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["xpath-javax"],"cwe":["CWE-643"],"params":[0]}
name: "XPath.compile"
signature: "public XPathExpression compile(String expression) throws XPathExpressionException"
title: "XPath.compile"
directive: "method"
module: "java.xml/javax.xml.xpath"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/xpath/XPath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XPath.compile

```java
public XPathExpression compile(String expression) throws XPathExpressionException
```

Compile an XPath expression for later evaluation.

 

If `expression` contains any `XPathFunction`s,
 they must be available via the `XPathFunctionResolver`.
 An `XPathExpressionException` will be thrown if the
 `XPathFunction`
 cannot be resovled with the `XPathFunctionResolver`.

 

If `expression` contains any variables, the
 `XPathVariableResolver` in effect
 **at compile time** will be used to resolve them.

**参数**

- **expression** — The XPath expression.

**返回**

- Compiled XPath expression.

**异常**

- **XPathExpressionException** — If `expression` cannot be compiled.
- **NullPointerException** — If `expression` is `null`.
