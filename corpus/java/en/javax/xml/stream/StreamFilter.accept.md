---
id: "java-en-function-streamfilter-accept"
language: "java"
lang: "en"
category: "function"
name: "StreamFilter.accept"
signature: "public boolean accept(XMLStreamReader reader)"
title: "StreamFilter.accept"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/StreamFilter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StreamFilter.accept

```java
public boolean accept(XMLStreamReader reader)
```

Tests whether the current state is part of this stream.  This method
 will return true if this filter accepts this event and false otherwise.

 The method should not change the state of the reader when accepting
 a state.

**参数**

- **reader** — the event to test

**返回**

- true if this filter accepts this event, false otherwise
