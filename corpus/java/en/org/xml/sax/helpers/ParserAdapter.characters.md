---
id: "java-en-function-parseradapter-characters"
language: "java"
lang: "en"
category: "function"
name: "ParserAdapter.characters"
signature: "public void characters (char ch[], int start, int length) throws SAXException"
title: "ParserAdapter.characters"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/ParserAdapter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ParserAdapter.characters

```java
public void characters (char ch[], int start, int length) throws SAXException
```

Adapter implementation method; do not call.
 Adapt a SAX1 characters event.

**参数**

- **ch** — An array of characters.
- **start** — The starting position in the array.
- **length** — The number of characters to use.

**异常**

- **SAXException** — The client may raise a processing exception.

**参见**

- org.xml.sax.DocumentHandler#characters
