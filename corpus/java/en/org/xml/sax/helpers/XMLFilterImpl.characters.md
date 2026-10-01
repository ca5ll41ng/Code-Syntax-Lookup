---
id: "java-en-function-xmlfilterimpl-characters"
language: "java"
lang: "en"
category: "function"
name: "XMLFilterImpl.characters"
signature: "public void characters (char ch[], int start, int length) throws SAXException"
title: "XMLFilterImpl.characters"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/XMLFilterImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLFilterImpl.characters

```java
public void characters (char ch[], int start, int length) throws SAXException
```

Filter a character data event.

**参数**

- **ch** — An array of characters.
- **start** — The starting position in the array.
- **length** — The number of characters to use from the array.

**异常**

- **org.xml.sax.SAXException** — The client may throw an exception during processing.
