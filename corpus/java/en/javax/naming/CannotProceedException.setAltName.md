---
id: "java-en-function-cannotproceedexception-setaltname"
language: "java"
lang: "en"
category: "function"
name: "CannotProceedException.setAltName"
signature: "public void setAltName(Name altName)"
title: "CannotProceedException.setAltName"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/CannotProceedException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CannotProceedException.setAltName

```java
public void setAltName(Name altName)
```

Sets the `altName` field of this exception.

**参数**

- **altName** — The name of the resolved object, relative to `altNameCtx`. It is a composite name. If null, then no name is specified.

**参见**

- #getAltName
- #setAltNameCtx
