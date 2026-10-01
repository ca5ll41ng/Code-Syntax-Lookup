---
id: "java-en-function-contenthandler-declaration"
language: "java"
lang: "en"
category: "function"
name: "ContentHandler.declaration"
signature: "default void declaration(String version, String encoding, String standalone) throws SAXException"
title: "ContentHandler.declaration"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ContentHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ContentHandler.declaration

```java
default void declaration(String version, String encoding, String standalone) throws SAXException
```

Receives notification of the XML declaration.

 The default implementation in the SAX API is to do nothing.

**参数**

- **version** — the version string as in the input document, null if not specified
- **encoding** — the encoding string as in the input document, null if not specified
- **standalone** — the standalone string as in the input document, null if not specified

**异常**

- **SAXException** — if the application wants to report an error or interrupt the parsing process

> *Since 14*
