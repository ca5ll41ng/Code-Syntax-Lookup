---
id: "java-en-function-xmleventreader-peek"
language: "java"
lang: "en"
category: "function"
name: "XMLEventReader.peek"
signature: "public XMLEvent peek() throws XMLStreamException"
title: "XMLEventReader.peek"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLEventReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLEventReader.peek

```java
public XMLEvent peek() throws XMLStreamException
```

Check the next XMLEvent without reading it from the stream.
 Returns null if the stream is at EOF or has no more XMLEvents.
 A call to peek() will be equal to the next return of next().

**返回**

- the next XMLEvent

**异常**

- **XMLStreamException** — if an error occurs

**参见**

- XMLEvent
