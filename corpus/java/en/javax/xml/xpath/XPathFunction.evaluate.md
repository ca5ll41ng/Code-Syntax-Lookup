---
id: "java-en-function-xpathfunction-evaluate"
language: "java"
lang: "en"
category: "function"
name: "XPathFunction.evaluate"
signature: "public Object evaluate(List<?> args) throws XPathFunctionException"
title: "XPathFunction.evaluate"
directive: "method"
module: "java.xml/javax.xml.xpath"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/xpath/XPathFunction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XPathFunction.evaluate

```java
public Object evaluate(List<?> args) throws XPathFunctionException
```

Evaluate the function with the specified arguments.

 

To the greatest extent possible, side-effects should be avoided in the
 definition of extension functions. The implementation evaluating an
 XPath expression is under no obligation to call extension functions in
 any particular order or any particular number of times.

**参数**

- **args** — The arguments, null is a valid value.

**返回**

- The result of evaluating the XPath function as an Object.

**异常**

- **XPathFunctionException** — If args cannot be evaluated with this XPath function.
