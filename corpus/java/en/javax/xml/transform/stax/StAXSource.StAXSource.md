---
id: "java-en-function-staxsource-staxsource"
language: "java"
lang: "en"
category: "function"
name: "StAXSource.StAXSource"
signature: "public StAXSource(final XMLEventReader xmlEventReader) throws XMLStreamException"
title: "StAXSource.StAXSource"
directive: "method"
module: "java.xml/javax.xml.transform.stax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/stax/StAXSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StAXSource.StAXSource

```java
public StAXSource(final XMLEventReader xmlEventReader) throws XMLStreamException
```

Creates a new instance of a StAXSource
 by supplying an `XMLEventReader`.

 

XMLEventReader must be a
 non-null reference.

 

XMLEventReader must be in
 `START_DOCUMENT` or
 `START_ELEMENT` state.

**参数**

- **xmlEventReader** — XMLEventReader used to create this StAXSource.

**异常**

- **XMLStreamException** — If xmlEventReader access throws an Exception.
- **IllegalArgumentException** — If xmlEventReader == null.
- **IllegalStateException** — If xmlEventReader is not in XMLStreamConstants.START_DOCUMENT or XMLStreamConstants.START_ELEMENT state.
