---
id: "java-en-function-xmlinputfactory-createfilteredreader"
language: "java"
lang: "en"
category: "function"
name: "XMLInputFactory.createFilteredReader"
signature: "public abstract XMLStreamReader createFilteredReader(XMLStreamReader reader, StreamFilter filter) throws XMLStreamException"
title: "XMLInputFactory.createFilteredReader"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLInputFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLInputFactory.createFilteredReader

```java
public abstract XMLStreamReader createFilteredReader(XMLStreamReader reader, StreamFilter filter) throws XMLStreamException
```

Create a filtered reader that wraps the filter around the reader

**参数**

- **reader** — the reader to filter
- **filter** — the filter to apply to the reader

**返回**

- an instance of the `XMLEventReader`

**异常**

- **XMLStreamException** — if an error occurs
