---
id: "java-en-function-xpathexpression-evaluate"
language: "java"
lang: "en"
category: "function"
name: "XPathExpression.evaluate"
signature: "public Object evaluate(Object item, QName returnType) throws XPathExpressionException"
title: "XPathExpression.evaluate"
directive: "method"
module: "java.xml/javax.xml.xpath"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/xpath/XPathExpression.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XPathExpression.evaluate

```java
public Object evaluate(Object item, QName returnType) throws XPathExpressionException
```

Evaluate the compiled XPath expression in the specified context and return the result as the specified type.

 

See Evaluation of XPath Expressions for context item evaluation,
 variable, function and QName resolution and return type conversion.

 

 The parameter `item` represents the context the XPath expression
 will be operated on. The type of the context is implementation-dependent.
 If the value is `null`, the operation must have no dependency on
 the context, otherwise an XPathExpressionException will be thrown.

 The type of the context is usually `org.w3c.dom.Node`.

**参数**

- **item** — The context the XPath expression will be evaluated in.
- **returnType** — The result type expected to be returned by the XPath expression.

**返回**

- The `Object` that is the result of evaluating the expression and converting the result to `returnType`.

**异常**

- **XPathExpressionException** — If the expression cannot be evaluated.
- **IllegalArgumentException** — If `returnType` is not one of the types defined in `XPathConstants`.
- **NullPointerException** — If `returnType` is `null`.
