---
id: "java-en-function-cannotproceedexception-setaltnamectx"
language: "java"
lang: "en"
category: "function"
name: "CannotProceedException.setAltNameCtx"
signature: "public void setAltNameCtx(Context altNameCtx)"
title: "CannotProceedException.setAltNameCtx"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/CannotProceedException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CannotProceedException.setAltNameCtx

```java
public void setAltNameCtx(Context altNameCtx)
```

Sets the `altNameCtx` field of this exception.

**参数**

- **altNameCtx** — The context relative to which `altName` is named.  If null, then the default initial context is implied.

**参见**

- #getAltNameCtx
- #setAltName
