---
id: "java-en-function-xmlstreamreader-gettextlength"
language: "java"
lang: "en"
category: "function"
name: "XMLStreamReader.getTextLength"
signature: "public int getTextLength()"
title: "XMLStreamReader.getTextLength"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLStreamReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLStreamReader.getTextLength

```java
public int getTextLength()
```

Returns the length of the sequence of characters for this
 Text event within the text character array.

**返回**

- the length of the text

**异常**

- **java.lang.IllegalStateException** — if this state is not a valid text state.
