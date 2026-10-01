---
id: "java-en-function-domconfiguration-cansetparameter"
language: "java"
lang: "en"
category: "function"
name: "DOMConfiguration.canSetParameter"
signature: "public boolean canSetParameter(String name, Object value)"
title: "DOMConfiguration.canSetParameter"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/DOMConfiguration.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DOMConfiguration.canSetParameter

```java
public boolean canSetParameter(String name, Object value)
```

Check if setting a parameter to a specific value is supported.

**参数**

- **name** — The name of the parameter to check.
- **value** — An object. if null, the returned value is true.

**返回**

- true if the parameter could be successfully set to the specified value, or false if the parameter is not recognized or the requested value is not supported. This does not change the current value of the parameter itself.
