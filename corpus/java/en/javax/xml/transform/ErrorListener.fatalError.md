---
id: "java-en-function-errorlistener-fatalerror"
language: "java"
lang: "en"
category: "function"
name: "ErrorListener.fatalError"
signature: "public abstract void fatalError(TransformerException exception) throws TransformerException"
title: "ErrorListener.fatalError"
directive: "method"
module: "java.xml/javax.xml.transform"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/ErrorListener.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ErrorListener.fatalError

```java
public abstract void fatalError(TransformerException exception) throws TransformerException
```

Receive notification of a non-recoverable error.

 

The processor may choose to continue, but will not normally
 proceed to a successful completion.

 

The method should throw an exception if it is unable to
 process the error, or if it wishes execution to terminate
 immediately. The processor will not necessarily honor this
 request.

**参数**

- **exception** — The error information encapsulated in a TransformerException.

**异常**

- **javax.xml.transform.TransformerException** — if the application chooses to discontinue the transformation.

**参见**

- javax.xml.transform.TransformerException
