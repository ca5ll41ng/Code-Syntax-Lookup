---
id: "java-en-function-xmlstreamreader-gettext"
language: "java"
lang: "en"
category: "function"
name: "XMLStreamReader.getText"
signature: "public String getText()"
title: "XMLStreamReader.getText"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLStreamReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLStreamReader.getText

```java
public String getText()
```

Returns the current value of the parse event as a string,
 this returns the string value of a CHARACTERS event,
 returns the value of a COMMENT, the replacement value
 for an ENTITY_REFERENCE, the string value of a CDATA section,
 the string value for a SPACE event,
 or the String value of the internal subset of the DTD.
 If an ENTITY_REFERENCE has been resolved, any character data
 will be reported as CHARACTERS events.

**返回**

- the current text or null

**异常**

- **java.lang.IllegalStateException** — if this state is not a valid text state.
