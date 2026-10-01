---
id: "java-en-function-xmlstreamreader-hastext"
language: "java"
lang: "en"
category: "function"
name: "XMLStreamReader.hasText"
signature: "public boolean hasText()"
title: "XMLStreamReader.hasText"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLStreamReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLStreamReader.hasText

```java
public boolean hasText()
```

Return a boolean indicating whether the current event has text.
 The following events have text:
 CHARACTERS,DTD ,ENTITY_REFERENCE, COMMENT, SPACE

**返回**

- true if the event has text, false otherwise
