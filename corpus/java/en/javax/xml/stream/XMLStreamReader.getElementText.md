---
id: "java-en-function-xmlstreamreader-getelementtext"
language: "java"
lang: "en"
category: "function"
name: "XMLStreamReader.getElementText"
signature: "public String getElementText() throws XMLStreamException"
title: "XMLStreamReader.getElementText"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLStreamReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLStreamReader.getElementText

```java
public String getElementText() throws XMLStreamException
```

Reads the content of a text-only element, an exception is thrown if this is
 not a text-only element.
 Regardless of value of javax.xml.stream.isCoalescing this method always returns coalesced content.
 
 Precondition: the current event is START_ELEMENT.
 
 Postcondition: the current event is the corresponding END_ELEMENT.

 
The method does the following (implementations are free to optimized
 but must do equivalent processing):
 
```

 if(getEventType() != XMLStreamConstants.START_ELEMENT) {
     throw new XMLStreamException(
     "parser must be on START_ELEMENT to read next text", getLocation());
 }

 int eventType = next();
 StringBuffer content = new StringBuffer();
 while(eventType != XMLStreamConstants.END_ELEMENT) {
     if(eventType == XMLStreamConstants.CHARACTERS
        || eventType == XMLStreamConstants.CDATA
        || eventType == XMLStreamConstants.SPACE
        || eventType == XMLStreamConstants.ENTITY_REFERENCE) {
           buf.append(getText());
     } else if(eventType == XMLStreamConstants.PROCESSING_INSTRUCTION
               || eventType == XMLStreamConstants.COMMENT) {
         // skipping
     } else if(eventType == XMLStreamConstants.END_DOCUMENT) {
         throw new XMLStreamException(
         "unexpected end of document when reading element text content", this);
     } else if(eventType == XMLStreamConstants.START_ELEMENT) {
         throw new XMLStreamException(
         "element text content may not contain START_ELEMENT", getLocation());
     } else {
         throw new XMLStreamException(
         "Unexpected event type "+eventType, getLocation());
     }
     eventType = next();
 }
 return buf.toString();
 
```

**返回**

- the content of a text-only element

**异常**

- **XMLStreamException** — if the current event is not a START_ELEMENT or if a non text element is encountered
