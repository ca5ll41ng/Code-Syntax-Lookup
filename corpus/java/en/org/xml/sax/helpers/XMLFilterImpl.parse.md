---
id: "java-en-function-xmlfilterimpl-parse"
language: "java"
lang: "en"
category: "function"
name: "XMLFilterImpl.parse"
signature: "public void parse (InputSource input) throws SAXException, IOException"
title: "XMLFilterImpl.parse"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/XMLFilterImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLFilterImpl.parse

```java
public void parse (InputSource input) throws SAXException, IOException
```

Parse a document.

**参数**

- **input** — The input source for the document entity.

**异常**

- **org.xml.sax.SAXException** — Any SAX exception, possibly wrapping another exception.
- **java.io.IOException** — An IO exception from the parser, possibly from a byte stream or character stream supplied by the application.
