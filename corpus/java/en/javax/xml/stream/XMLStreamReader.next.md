---
id: "java-en-function-xmlstreamreader-next"
language: "java"
lang: "en"
category: "function"
name: "XMLStreamReader.next"
signature: "public int next() throws XMLStreamException"
title: "XMLStreamReader.next"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLStreamReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLStreamReader.next

```java
public int next() throws XMLStreamException
```

Get next parsing event - a processor may return all contiguous
 character data in a single chunk, or it may split it into several chunks.
 If the property javax.xml.stream.isCoalescing is set to true
 element content must be coalesced and only one CHARACTERS event
 must be returned for contiguous element content or
 CDATA Sections.

 By default entity references must be
 expanded and reported transparently to the application.
 An exception will be thrown if an entity reference cannot be expanded.
 If element content is empty (i.e. content is "") then no CHARACTERS event will be reported.

 

Given the following XML:

 `<!--description-->content text<![CDATA[Hello>/greeting>]]>other content>/foo>`

 The behavior of calling next() when being on foo will be:

 1- the comment (COMMENT)

 2- then the characters section (CHARACTERS)

 3- then the CDATA section (another CHARACTERS)

 4- then the next characters section (another CHARACTERS)

 5- then the END_ELEMENT

 

**NOTE:** empty element (such as ``) will be reported
  with  two separate events: START_ELEMENT, END_ELEMENT - This preserves
   parsing equivalency of empty element to ``.

**返回**

- the integer code corresponding to the current parse event

**异常**

- **java.util.NoSuchElementException** — if this is called when hasNext() returns false
- **XMLStreamException** — if there is an error processing the underlying XML source

**参见**

- javax.xml.stream.events.XMLEvent
