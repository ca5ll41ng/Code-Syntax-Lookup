---
id: "java-en-function-xmlstreamreader-gettextstart"
language: "java"
lang: "en"
category: "function"
name: "XMLStreamReader.getTextStart"
signature: "public int getTextStart()"
title: "XMLStreamReader.getTextStart"
directive: "method"
module: "java.xml/javax.xml.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/XMLStreamReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLStreamReader.getTextStart

```java
public int getTextStart()
```

Gets the text associated with a CHARACTERS, SPACE or CDATA event.  Allows the underlying
 implementation to return the text as a stream of characters.  The reference to the
 Reader returned by this method is only valid until next() is called.

 All characters must have been checked for well-formedness.

 

 This method is optional and will throw UnsupportedOperationException if it is not supported.

**异常**

- **UnsupportedOperationException** — if this method is not supported
- **IllegalStateException** — if this is not a valid text state
