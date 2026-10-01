---
id: "java-en-function-eventfilter-accept"
language: "java"
lang: "en"
category: "function"
name: "EventFilter.accept"
signature: "public boolean accept(XMLEvent event)"
title: "EventFilter.accept"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/EventFilter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EventFilter.accept

```java
public boolean accept(XMLEvent event)
```

Tests whether this event is part of this stream.  This method
 will return true if this filter accepts this event and false
 otherwise.

**参数**

- **event** — the event to test

**返回**

- true if this filter accepts this event, false otherwise
