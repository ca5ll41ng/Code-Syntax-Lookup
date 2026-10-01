---
id: "java-en-function-xmlevent-writeasencodedunicode"
language: "java"
lang: "en"
category: "function"
name: "XMLEvent.writeAsEncodedUnicode"
signature: "public void writeAsEncodedUnicode(Writer writer) throws javax.xml.stream.XMLStreamException"
title: "XMLEvent.writeAsEncodedUnicode"
directive: "method"
module: "java.xml/javax.xml.stream.events"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/events/XMLEvent.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLEvent.writeAsEncodedUnicode

```java
public void writeAsEncodedUnicode(Writer writer) throws javax.xml.stream.XMLStreamException
```

This method will write the XMLEvent as per the XML 1.0 specification as Unicode characters.
 No indentation or whitespace should be outputted.

 Any user defined event type SHALL have this method
 called when being written to on an output stream.
 Built in Event types MUST implement this method,
 but implementations MAY choose not call these methods
 for optimizations reasons when writing out built in
 Events to an output stream.
 The output generated MUST be equivalent in terms of the
 infoset expressed.

**参数**

- **writer** — The writer that will output the data

**异常**

- **javax.xml.stream.XMLStreamException** — if there is a fatal error writing the event
