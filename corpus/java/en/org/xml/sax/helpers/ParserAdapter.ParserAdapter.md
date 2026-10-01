---
id: "java-en-function-parseradapter-parseradapter"
language: "java"
lang: "en"
category: "function"
name: "ParserAdapter.ParserAdapter"
signature: "public ParserAdapter () throws SAXException"
title: "ParserAdapter.ParserAdapter"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/ParserAdapter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ParserAdapter.ParserAdapter

```java
public ParserAdapter () throws SAXException
```

Construct a new parser adapter.

 

Use the "org.xml.sax.parser" property to locate the
 embedded SAX1 driver.

**异常**

- **SAXException** — If the embedded driver cannot be instantiated or if the org.xml.sax.parser property is not specified.
