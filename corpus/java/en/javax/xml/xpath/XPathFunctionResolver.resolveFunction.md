---
id: "java-en-function-xpathfunctionresolver-resolvefunction"
language: "java"
lang: "en"
category: "function"
name: "XPathFunctionResolver.resolveFunction"
signature: "public XPathFunction resolveFunction(QName functionName, int arity)"
title: "XPathFunctionResolver.resolveFunction"
directive: "method"
module: "java.xml/javax.xml.xpath"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/xpath/XPathFunctionResolver.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XPathFunctionResolver.resolveFunction

```java
public XPathFunction resolveFunction(QName functionName, int arity)
```

Find a function in the set of available functions.

 

If functionName or arity is null, then a NullPointerException is thrown.

**参数**

- **functionName** — The function name.
- **arity** — The number of arguments that the returned function must accept.

**返回**

- The function or null if no function named functionName with arity arguments exists.

**异常**

- **NullPointerException** — If functionName or arity is null.
