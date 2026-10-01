---
id: "java-en-function-xmleventallocator-allocate"
language: "java"
lang: "en"
category: "function"
name: "XMLEventAllocator.allocate"
signature: "public XMLEvent allocate(XMLStreamReader reader) throws XMLStreamException"
title: "XMLEventAllocator.allocate"
directive: "method"
module: "java.xml/javax.xml.stream.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/util/XMLEventAllocator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLEventAllocator.allocate

```java
public XMLEvent allocate(XMLStreamReader reader) throws XMLStreamException
```

This method allocates an event given the current
 state of the XMLStreamReader.  If this XMLEventAllocator
 does not have a one-to-one mapping between reader states
 and events this method will return null.  This method
 must not modify the state of the XMLStreamReader.

**参数**

- **reader** — The XMLStreamReader to allocate from

**返回**

- the event corresponding to the current reader state

**异常**

- **XMLStreamException** — if an error occurs
