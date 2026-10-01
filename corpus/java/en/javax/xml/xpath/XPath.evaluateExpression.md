---
id: "java-en-function-xpath-evaluateexpression"
language: "java"
lang: "en"
category: "function"
name: "XPath.evaluateExpression"
signature: "default <T>T evaluateExpression(String expression, Object item, Class<T> type) throws XPathExpressionException"
title: "XPath.evaluateExpression"
directive: "method"
module: "java.xml/javax.xml.xpath"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/xpath/XPath.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XPath.evaluateExpression

```java
default <T>T evaluateExpression(String expression, Object item, Class<T> type) throws XPathExpressionException
```

Evaluate an XPath expression in the specified context and return
 the result with the type specified through the `class type`

 

 The parameter `item` represents the context the XPath expression
 will be operated on. The type of the context is implementation-dependent.
 If the value is `null`, the operation must have no dependency on
 the context, otherwise an XPathExpressionException will be thrown.

 The type of the context is usually `org.w3c.dom.Node`.

 The default implementation in the XPath API is equivalent to:
 
```
 `(T)evaluate(expression, item,
           XPathEvaluationResult.XPathResultType.getQNameType(type));
 `
```

 Since the `evaluate` method does not support the
 `ANY ANY` type, specifying
 XPathEvaluationResult as the type will result in IllegalArgumentException.
 Any implementation supporting the
 `ANY ANY` type must override
 this method.

**参数**

- **The** — class type that will be returned by the XPath expression.
- **expression** — The XPath expression.
- **item** — The context the XPath expression will be evaluated in.
- **type** — The class type expected to be returned by the XPath expression, must be one of the types described in section 3.2 Class types in the package summary.

**返回**

- The result of evaluating the expression.

**异常**

- **XPathExpressionException** — If the expression cannot be evaluated.
- **IllegalArgumentException** — If `type` is not of the types corresponding to the types defined in the `XPathEvaluationResult.XPathResultType`, or XPathEvaluationResult is specified as the type but an implementation supporting the `ANY ANY` type is not available.
- **NullPointerException** — If `expression or type` is `null`.

> *Since 9*
