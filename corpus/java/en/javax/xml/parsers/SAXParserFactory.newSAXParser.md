---
id: "java-en-function-saxparserfactory-newsaxparser"
language: "java"
lang: "en"
category: "function"
name: "SAXParserFactory.newSAXParser"
signature: "public abstract SAXParser newSAXParser() throws ParserConfigurationException, SAXException"
title: "SAXParserFactory.newSAXParser"
directive: "method"
module: "java.xml/javax.xml.parsers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/parsers/SAXParserFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SAXParserFactory.newSAXParser

```java
public abstract SAXParser newSAXParser() throws ParserConfigurationException, SAXException
```

Creates a new instance of a SAXParser using the currently
 configured factory parameters.

**返回**

- A new instance of a SAXParser.

**异常**

- **ParserConfigurationException** — if a parser cannot be created which satisfies the requested configuration.
- **SAXException** — for SAX errors.
