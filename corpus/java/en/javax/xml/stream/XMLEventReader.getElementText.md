---
id: "java-en-function-xmleventreader-getelementtext"
language: "java"
lang: "en"
category: "function"
name: "XMLEventReader.getElementText"
signature: "public String getElementText() throws XMLStreamException"
title: "XMLEventReader.getElementText"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLEventReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLEventReader.getElementText

```java
public String getElementText() throws XMLStreamException
```

Reads the content of a text-only element. Precondition:
 the current event is START_ELEMENT. Postcondition:
 The current event is the corresponding END_ELEMENT.

**返回**

- the text of the element

**异常**

- **XMLStreamException** — if the current event is not a START_ELEMENT or if a non text element is encountered
