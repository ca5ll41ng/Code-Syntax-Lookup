---
id: "java-en-function-xpathvariableresolver-resolvevariable"
language: "java"
lang: "en"
category: "function"
name: "XPathVariableResolver.resolveVariable"
signature: "public Object resolveVariable(QName variableName)"
title: "XPathVariableResolver.resolveVariable"
directive: "method"
module: "java.xml/javax.xml.xpath"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/xpath/XPathVariableResolver.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XPathVariableResolver.resolveVariable

```java
public Object resolveVariable(QName variableName)
```

Find a variable in the set of available variables.

 

If variableName is null, then a NullPointerException is thrown.

**参数**

- **variableName** — The QName of the variable name.

**返回**

- The variables value, or null if no variable named variableName exists.  The value returned must be of a type appropriate for the underlying object model.

**异常**

- **NullPointerException** — If variableName is null.
