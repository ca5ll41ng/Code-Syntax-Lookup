---
id: "java-en-function-xmlstreamwriter-writeendelement"
language: "java"
lang: "en"
category: "function"
name: "XMLStreamWriter.writeEndElement"
signature: "public void writeEndElement() throws XMLStreamException"
title: "XMLStreamWriter.writeEndElement"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLStreamWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLStreamWriter.writeEndElement

```java
public void writeEndElement() throws XMLStreamException
```

Writes string data to the output without checking for well formedness.
 The data is opaque to the XMLStreamWriter, i.e. the characters are written
 blindly to the underlying output.  If the method cannot be supported
 in the current writing context the implementation may throw a
 UnsupportedOperationException.  For example note that any
 namespace declarations, end tags, etc. will be ignored and could
 interfere with proper maintenance of the writers internal state.

**参数**

- **data** — the data to write
