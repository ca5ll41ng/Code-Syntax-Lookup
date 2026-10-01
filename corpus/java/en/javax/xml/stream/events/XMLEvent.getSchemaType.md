---
id: "java-en-function-xmlevent-getschematype"
language: "java"
lang: "en"
category: "function"
name: "XMLEvent.getSchemaType"
signature: "public QName getSchemaType()"
title: "XMLEvent.getSchemaType"
directive: "method"
module: "java.xml/javax.xml.stream.events"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/stream/events/XMLEvent.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLEvent.getSchemaType

```java
public QName getSchemaType()
```

This method is provided for implementations to provide
 optional type information about the associated event.
 It is optional and will return null if no information
 is available.

**返回**

- the type of the event, null if not available
