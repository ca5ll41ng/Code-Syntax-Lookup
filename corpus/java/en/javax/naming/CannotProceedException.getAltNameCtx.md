---
id: "java-en-function-cannotproceedexception-getaltnamectx"
language: "java"
lang: "en"
category: "function"
name: "CannotProceedException.getAltNameCtx"
signature: "public Context getAltNameCtx()"
title: "CannotProceedException.getAltNameCtx"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/CannotProceedException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CannotProceedException.getAltNameCtx

```java
public Context getAltNameCtx()
```

Retrieves the `altNameCtx` field of this exception.
 This is the context relative to which `altName` is named.
 It will be used during a subsequent call to the
 `javax.naming.spi.ObjectFactory.getObjectInstance` method.

**返回**

- The context relative to which `altName` is named. If null, then the default initial context is implied.

**参见**

- #setAltNameCtx
- #getAltName
- javax.naming.spi.ObjectFactory#getObjectInstance
