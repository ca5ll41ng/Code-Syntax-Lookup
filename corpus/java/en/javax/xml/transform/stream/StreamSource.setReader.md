---
id: "java-en-function-streamsource-setreader"
language: "java"
lang: "en"
category: "function"
name: "StreamSource.setReader"
signature: "public void setReader(Reader reader)"
title: "StreamSource.setReader"
directive: "method"
module: "java.xml/javax.xml.transform.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/stream/StreamSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StreamSource.setReader

```java
public void setReader(Reader reader)
```

Set the input to be a character reader.  Normally,
 a stream should be used rather than a reader, so that
 the XML parser can resolve character encoding specified
 by the XML declaration.  However, in many cases the encoding
 of the input stream is already resolved, as in the case of
 reading XML from a StringReader.

**参数**

- **reader** — A valid Reader reference to an XML CharacterStream.
