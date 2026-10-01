---
id: "java-en-function-xmlstreamreader-geteventtype"
language: "java"
lang: "en"
category: "function"
name: "XMLStreamReader.getEventType"
signature: "public int getEventType()"
title: "XMLStreamReader.getEventType"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLStreamReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLStreamReader.getEventType

```java
public int getEventType()
```

Returns a reader that points to the current start element
 and all of its contents.  Throws an XMLStreamException if the
 cursor does not point to a START_ELEMENT.

 The sub stream is read from it MUST be read before the parent stream is
 moved on, if not any call on the sub stream will cause an XMLStreamException to be
 thrown.   The parent stream will always return the same result from next()
 whatever is done to the sub stream.

**返回**

- an XMLStreamReader which points to the next element
