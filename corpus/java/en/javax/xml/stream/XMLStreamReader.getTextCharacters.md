---
id: "java-en-function-xmlstreamreader-gettextcharacters"
language: "java"
lang: "en"
category: "function"
name: "XMLStreamReader.getTextCharacters"
signature: "public char[] getTextCharacters()"
title: "XMLStreamReader.getTextCharacters"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLStreamReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLStreamReader.getTextCharacters

```java
public char[] getTextCharacters()
```

Returns an array which contains the characters from this event.
 This array should be treated as read-only and transient. I.e. the array will
 contain the text characters until the XMLStreamReader moves on to the next event.
 Attempts to hold onto the character array beyond that time or modify the
 contents of the array are breaches of the contract for this interface.

**返回**

- the current text or an empty array

**异常**

- **java.lang.IllegalStateException** — if this state is not a valid text state.
