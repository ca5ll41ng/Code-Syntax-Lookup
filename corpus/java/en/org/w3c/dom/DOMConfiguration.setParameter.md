---
id: "java-en-function-domconfiguration-setparameter"
language: "java"
lang: "en"
category: "function"
name: "DOMConfiguration.setParameter"
signature: "public void setParameter(String name, Object value) throws DOMException"
title: "DOMConfiguration.setParameter"
directive: "method"
module: "java.xml/org.w3c.dom"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/w3c/dom/DOMConfiguration.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DOMConfiguration.setParameter

```java
public void setParameter(String name, Object value) throws DOMException
```

Set the value of a parameter.

**参数**

- **name** — The name of the parameter to set.
- **value** — The new value or null if the user wishes to unset the parameter. While the type of the value parameter is defined as DOMUserData, the object type must match the type defined by the definition of the parameter. For example, if the parameter is "error-handler", the value must be of type DOMErrorHandler.

**异常**

- **DOMException** — NOT_FOUND_ERR: Raised when the parameter name is not recognized.  NOT_SUPPORTED_ERR: Raised when the parameter name is recognized but the requested value cannot be set.  TYPE_MISMATCH_ERR: Raised if the value type for this parameter name is incompatible with the expected value type.
