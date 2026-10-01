---
id: "java-en-function-documentbuilder-seterrorhandler"
language: "java"
lang: "en"
category: "function"
name: "DocumentBuilder.setErrorHandler"
signature: "public abstract void setErrorHandler(ErrorHandler eh)"
title: "DocumentBuilder.setErrorHandler"
directive: "method"
module: "java.xml/javax.xml.parsers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/parsers/DocumentBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DocumentBuilder.setErrorHandler

```java
public abstract void setErrorHandler(ErrorHandler eh)
```

Specify the `ErrorHandler` to be used by the parser.
 Setting this to null will result in the underlying
 implementation using it's own default implementation and
 behavior.

**参数**

- **eh** — The ErrorHandler to be used by the parser.
