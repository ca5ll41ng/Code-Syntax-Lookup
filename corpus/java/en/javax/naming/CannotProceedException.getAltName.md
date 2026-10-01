---
id: "java-en-function-cannotproceedexception-getaltname"
language: "java"
lang: "en"
category: "function"
name: "CannotProceedException.getAltName"
signature: "public Name getAltName()"
title: "CannotProceedException.getAltName"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/CannotProceedException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CannotProceedException.getAltName

```java
public Name getAltName()
```

Retrieves the `altName` field of this exception.
 This is the name of the resolved object, relative to the context
 `altNameCtx`. It will be used during a subsequent call to the
 `javax.naming.spi.ObjectFactory.getObjectInstance` method.

**返回**

- The name of the resolved object, relative to `altNameCtx`. It is a composite name.  If null, then no name is specified.

**参见**

- #setAltName
- #getAltNameCtx
- javax.naming.spi.ObjectFactory#getObjectInstance
