---
id: "java-en-function-xmlstreamreader-hasnext"
language: "java"
lang: "en"
category: "function"
name: "XMLStreamReader.hasNext"
signature: "public boolean hasNext() throws XMLStreamException"
title: "XMLStreamReader.hasNext"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLStreamReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLStreamReader.hasNext

```java
public boolean hasNext() throws XMLStreamException
```

Returns true if there are more parsing events and false
 if there are no more events.  This method will return
 false if the current state of the XMLStreamReader is
 END_DOCUMENT

**返回**

- true if there are more events, false otherwise

**异常**

- **XMLStreamException** — if there is a fatal error detecting the next state
