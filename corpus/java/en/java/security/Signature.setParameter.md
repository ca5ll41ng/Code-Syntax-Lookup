---
id: "java-en-function-signature-setparameter"
language: "java"
lang: "en"
category: "function"
name: "Signature.setParameter"
signature: "public final void setParameter(String param, Object value) throws InvalidParameterException"
title: "Signature.setParameter"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Signature.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Signature.setParameter

```java
public final void setParameter(String param, Object value) throws InvalidParameterException
```

Sets the specified algorithm parameter to the specified value.
 This method supplies a general-purpose mechanism through
 which it is possible to set the various parameters of this object.
 A parameter may be any settable parameter for the algorithm, such as
 a parameter size, or a source of random bits for signature generation
 (if appropriate), or an indication of whether to perform
 a specific but optional computation. A uniform algorithm-specific
 naming scheme for each parameter is desirable but left unspecified
 at this time.

**参数**

- **param** — the string identifier of the parameter
- **value** — the parameter value

**异常**

- **InvalidParameterException** — if `param` is an invalid parameter for this `Signature` object, the parameter is already set and cannot be set again, a security exception occurs, and so on.

**参见**

- #getParameter

> **⚠ Deprecated** — Use `setParameter(java.security.spec.AlgorithmParameterSpec) setParameter`.
