---
id: "java-en-function-xmleventreader-nextevent"
language: "java"
lang: "en"
category: "function"
name: "XMLEventReader.nextEvent"
signature: "public XMLEvent nextEvent() throws XMLStreamException"
title: "XMLEventReader.nextEvent"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLEventReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLEventReader.nextEvent

```java
public XMLEvent nextEvent() throws XMLStreamException
```

Gets the next XMLEvent. The initial event is
 `javax.xml.stream.events.StartDocument StartDocument`.

**返回**

- the next XMLEvent

**异常**

- **XMLStreamException** — if there is an error with the underlying XML.
- **java.util.NoSuchElementException** — iteration has no more elements.

**参见**

- XMLEvent
