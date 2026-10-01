---
id: "java-en-function-xmlstreamreader-nexttag"
language: "java"
lang: "en"
category: "function"
name: "XMLStreamReader.nextTag"
signature: "public int nextTag() throws XMLStreamException"
title: "XMLStreamReader.nextTag"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLStreamReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLStreamReader.nextTag

```java
public int nextTag() throws XMLStreamException
```

Skips any white space (isWhiteSpace() returns true), COMMENT,
 or PROCESSING_INSTRUCTION,
 until a START_ELEMENT or END_ELEMENT is reached.
 If other than white space characters, COMMENT, PROCESSING_INSTRUCTION, START_ELEMENT, END_ELEMENT
 are encountered, an exception is thrown. This method should
 be used when processing element-only content separated by white space.

 
 Precondition: none
 
 Postcondition: the current event is START_ELEMENT or END_ELEMENT
 and cursor may have moved over any whitespace event.

 
Essentially it does the following (implementations are free to optimized
 but must do equivalent processing):
 
```
 `int eventType = next();
 while((eventType == XMLStreamConstants.CHARACTERS && isWhiteSpace()) // skip whitespace
 || (eventType == XMLStreamConstants.CDATA && isWhiteSpace())
 // skip whitespace
 || eventType == XMLStreamConstants.SPACE
 || eventType == XMLStreamConstants.PROCESSING_INSTRUCTION
 || eventType == XMLStreamConstants.COMMENT
 ) {
     eventType = next();
 `
 if (eventType != XMLStreamConstants.START_ELEMENT && eventType != XMLStreamConstants.END_ELEMENT) {
     throw new String XMLStreamException("expected start or end tag", getLocation());
 }
 return eventType; }
 
```

**返回**

- the event type of the element read (START_ELEMENT or END_ELEMENT)

**异常**

- **XMLStreamException** — if the current event is not white space, PROCESSING_INSTRUCTION, START_ELEMENT or END_ELEMENT
- **java.util.NoSuchElementException** — if this is called when hasNext() returns false
