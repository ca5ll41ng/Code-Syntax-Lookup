---
id: "java-en-function-xmlstreamwriter-writestartelement"
language: "java"
lang: "en"
category: "function"
name: "XMLStreamWriter.writeStartElement"
signature: "public void writeStartElement(String localName) throws XMLStreamException"
title: "XMLStreamWriter.writeStartElement"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLStreamWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLStreamWriter.writeStartElement

```java
public void writeStartElement(String localName) throws XMLStreamException
```

Writes a start tag to the output.  All writeStartElement methods
 open a new scope in the internal namespace context.  Writing the
 corresponding EndElement causes the scope to be closed.

**参数**

- **localName** — local name of the tag, may not be null

**异常**

- **XMLStreamException** — if an error occurs
