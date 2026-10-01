---
id: "java-en-function-errorlistener-warning"
language: "java"
lang: "en"
category: "function"
name: "ErrorListener.warning"
signature: "public abstract void warning(TransformerException exception) throws TransformerException"
title: "ErrorListener.warning"
directive: "method"
module: "java.xml/javax.xml.transform"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/ErrorListener.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ErrorListener.warning

```java
public abstract void warning(TransformerException exception) throws TransformerException
```

Receive notification of a warning.

 

`javax.xml.transform.Transformer` can use this method to report
 conditions that are not errors or fatal errors.  The default behaviour
 is to take no action.

 

After invoking this method, the Transformer must continue with
 the transformation. It should still be possible for the
 application to process the document through to the end.

**参数**

- **exception** — The warning information encapsulated in a transformer exception.

**异常**

- **javax.xml.transform.TransformerException** — if the application chooses to discontinue the transformation.

**参见**

- javax.xml.transform.TransformerException
