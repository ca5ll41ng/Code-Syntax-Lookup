---
id: "java-en-function-cannotproceedexception-suppresswarnings"
language: "java"
lang: "en"
category: "function"
name: "CannotProceedException.SuppressWarnings"
signature: "@SuppressWarnings(\"serial\") // Not statically typed as Serializable protected Context altNameCtx = null"
title: "CannotProceedException.SuppressWarnings"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/CannotProceedException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CannotProceedException.SuppressWarnings

```java
@SuppressWarnings("serial") // Not statically typed as Serializable protected Context altNameCtx = null
```

Contains the context relative to which
 `altName` is specified.  If null, then the default initial
 context is implied.
 See the `javax.naming.spi.ObjectFactory.getObjectInstance`
 method for details on how this is used.
 

 This field is initialized to null.
 It should not be manipulated directly:  it should
 be accessed and updated using getAltNameCtx() and setAltNameCtx().

**参见**

- #getAltNameCtx
- #setAltNameCtx
- #altName
- javax.naming.spi.ObjectFactory#getObjectInstance
