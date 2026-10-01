---
id: "java-en-function-cannotproceedexception-altname"
language: "java"
lang: "en"
category: "function"
name: "CannotProceedException.altName"
signature: "protected Name altName = null"
title: "CannotProceedException.altName"
directive: "field"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/CannotProceedException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CannotProceedException.altName

```java
protected Name altName = null
```

Contains the name of the resolved object, relative
 to the context `altNameCtx`.  It is a composite name.
 If null, then no name is specified.
 See the `javax.naming.spi.ObjectFactory.getObjectInstance`
 method for details on how this is used.
 

 This field is initialized to null.
 It should not be manipulated directly:  it should
 be accessed and updated using getAltName() and setAltName().

**参见**

- #getAltName
- #setAltName
- #altNameCtx
- javax.naming.spi.ObjectFactory#getObjectInstance
