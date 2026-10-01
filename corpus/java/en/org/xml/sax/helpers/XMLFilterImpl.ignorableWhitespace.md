---
id: "java-en-function-xmlfilterimpl-ignorablewhitespace"
language: "java"
lang: "en"
category: "function"
name: "XMLFilterImpl.ignorableWhitespace"
signature: "public void ignorableWhitespace (char ch[], int start, int length) throws SAXException"
title: "XMLFilterImpl.ignorableWhitespace"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/XMLFilterImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# XMLFilterImpl.ignorableWhitespace

```java
public void ignorableWhitespace (char ch[], int start, int length) throws SAXException
```

Filter an ignorable whitespace event.

**参数**

- **ch** — An array of characters.
- **start** — The starting position in the array.
- **length** — The number of characters to use from the array.

**异常**

- **org.xml.sax.SAXException** — The client may throw an exception during processing.
