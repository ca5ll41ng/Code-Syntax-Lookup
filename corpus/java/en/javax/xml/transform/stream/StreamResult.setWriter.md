---
id: "java-en-function-streamresult-setwriter"
language: "java"
lang: "en"
category: "function"
name: "StreamResult.setWriter"
signature: "public void setWriter(Writer writer)"
title: "StreamResult.setWriter"
directive: "method"
module: "java.xml/javax.xml.transform.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/stream/StreamResult.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StreamResult.setWriter

```java
public void setWriter(Writer writer)
```

Set the writer that is to receive the result.  Normally,
 a stream should be used rather than a writer, so that
 the transformer may use instructions contained in the
 transformation instructions to control the encoding.  However,
 there are times when it is useful to write to a writer,
 such as when using a StringWriter.

**参数**

- **writer** — A valid Writer reference.
