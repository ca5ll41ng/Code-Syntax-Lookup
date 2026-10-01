---
id: "java-en-function-errorlistener-error"
language: "java"
lang: "en"
category: "function"
name: "ErrorListener.error"
signature: "public abstract void error(TransformerException exception) throws TransformerException"
title: "ErrorListener.error"
directive: "method"
module: "java.xml/javax.xml.transform"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/ErrorListener.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ErrorListener.error

```java
public abstract void error(TransformerException exception) throws TransformerException
```

Receive notification of a recoverable error.

 

The transformer must continue to try and provide normal transformation
 after invoking this method.  It should still be possible for the
 application to process the document through to the end if no other errors
 are encountered.

**参数**

- **exception** — The error information encapsulated in a transformer exception.

**异常**

- **javax.xml.transform.TransformerException** — if the application chooses to discontinue the transformation.

**参见**

- javax.xml.transform.TransformerException
