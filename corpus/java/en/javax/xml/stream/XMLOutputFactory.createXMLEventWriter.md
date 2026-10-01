---
id: "java-en-function-xmloutputfactory-createxmleventwriter"
language: "java"
lang: "en"
category: "function"
name: "XMLOutputFactory.createXMLEventWriter"
signature: "public abstract XMLEventWriter createXMLEventWriter(Result result) throws XMLStreamException"
title: "XMLOutputFactory.createXMLEventWriter"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLOutputFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLOutputFactory.createXMLEventWriter

```java
public abstract XMLEventWriter createXMLEventWriter(Result result) throws XMLStreamException
```

Create a new XMLEventWriter that writes to a JAXP result.  This method is optional.

**参数**

- **result** — the result to write to

**返回**

- instance of the `XMLEventWriter`

**异常**

- **UnsupportedOperationException** — if this method is not supported by this XMLOutputFactory
- **XMLStreamException** — if an error occurs
