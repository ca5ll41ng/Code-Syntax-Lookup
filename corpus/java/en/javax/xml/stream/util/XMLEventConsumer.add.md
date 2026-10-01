---
id: "java-en-function-xmleventconsumer-add"
language: "java"
lang: "en"
category: "function"
name: "XMLEventConsumer.add"
signature: "public void add(XMLEvent event) throws XMLStreamException"
title: "XMLEventConsumer.add"
directive: "method"
module: "java.xml/javax.xml.stream.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/util/XMLEventConsumer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLEventConsumer.add

```java
public void add(XMLEvent event) throws XMLStreamException
```

This method adds an event to the consumer. Calling this method
 invalidates the event parameter. The client application should
 discard all references to this event upon calling add.
 The behavior of an application that continues to use such references
 is undefined.

**参数**

- **event** — the event to add, may not be null

**异常**

- **XMLStreamException** — if there is an error in adding the event
