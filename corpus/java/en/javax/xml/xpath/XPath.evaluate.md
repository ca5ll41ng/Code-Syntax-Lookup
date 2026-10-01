---
id: "java-en-function-xpath-evaluate"
language: "java"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["xpath-javax"],"cwe":["CWE-643"],"params":[1,2]}
name: "XPath.evaluate"
signature: "public Object evaluate(String expression, Object item, QName returnType) throws XPathExpressionException"
title: "XPath.evaluate"
directive: "method"
module: "java.xml/javax.xml.xpath"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/xpath/XPath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XPath.evaluate

```java
public Object evaluate(String expression, Object item, QName returnType) throws XPathExpressionException
```

Evaluate an `XPath` expression in the specified context and
 return the result as the specified type.

 

 See Evaluation of XPath Expressions
 for context item evaluation, variable, function and `QName` resolution
 and return type conversion.
 

 The parameter `item` represents the context the XPath expression
 will be operated on. The type of the context is implementation-dependent.
 If the value is `null`, the operation must have no dependency on
 the context, otherwise an XPathExpressionException will be thrown.

 The type of the context is usually `org.w3c.dom.Node`.

**参数**

- **expression** — The XPath expression.
- **item** — The context the XPath expression will be evaluated in.
- **returnType** — The result type expected to be returned by the XPath expression.

**返回**

- The result of evaluating an XPath expression as an `Object` of `returnType`.

**异常**

- **XPathExpressionException** — If `expression` cannot be evaluated.
- **IllegalArgumentException** — If `returnType` is not one of the types defined in `XPathConstants` ( `NUMBER NUMBER`, `STRING STRING`, `BOOLEAN BOOLEAN`, `NODE NODE` or `NODESET NODESET`).
- **NullPointerException** — If `expression or returnType` is `null`.
