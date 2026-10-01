---
id: "java-en-function-signature-getparameter"
language: "java"
lang: "en"
category: "function"
name: "Signature.getParameter"
signature: "public final Object getParameter(String param) throws InvalidParameterException"
title: "Signature.getParameter"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Signature.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Signature.getParameter

```java
public final Object getParameter(String param) throws InvalidParameterException
```

Gets the value of the specified algorithm parameter. This method
 supplies a general-purpose mechanism through which it is possible to
 get the various parameters of this object. A parameter may be any
 settable parameter for the algorithm, such as a parameter size, or
 a source of random bits for signature generation (if appropriate),
 or an indication of whether to perform a specific but optional
 computation. A uniform algorithm-specific naming scheme for each
 parameter is desirable but left unspecified at this time.

**参数**

- **param** — the string name of the parameter.

**返回**

- the object that represents the parameter value, or `null` if there is none.

**异常**

- **InvalidParameterException** — if `param` is an invalid parameter for this engine, or another exception occurs while trying to get this parameter.

**参见**

- #setParameter(String, Object)

> **⚠ Deprecated** —
