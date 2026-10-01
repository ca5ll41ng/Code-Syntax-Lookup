---
id: "java-en-function-xmlreaderadapter-characters"
language: "java"
lang: "en"
category: "function"
name: "XMLReaderAdapter.characters"
signature: "public void characters (char ch[], int start, int length) throws SAXException"
title: "XMLReaderAdapter.characters"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/XMLReaderAdapter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLReaderAdapter.characters

```java
public void characters (char ch[], int start, int length) throws SAXException
```

Adapt a SAX2 characters event.

**参数**

- **ch** — An array of characters.
- **start** — The starting position in the array.
- **length** — The number of characters to use.

**异常**

- **org.xml.sax.SAXException** — The client may raise a processing exception.

**参见**

- org.xml.sax.ContentHandler#characters
