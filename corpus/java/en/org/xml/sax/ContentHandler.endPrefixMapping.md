---
id: "java-en-function-contenthandler-endprefixmapping"
language: "java"
lang: "en"
category: "function"
name: "ContentHandler.endPrefixMapping"
signature: "public void endPrefixMapping (String prefix) throws SAXException"
title: "ContentHandler.endPrefixMapping"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ContentHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ContentHandler.endPrefixMapping

```java
public void endPrefixMapping (String prefix) throws SAXException
```

End the scope of a prefix-URI mapping.

 

See `startPrefixMapping startPrefixMapping` for
 details.  These events will always occur immediately after the
 corresponding `endElement endElement` event, but the order of
 `endPrefixMapping endPrefixMapping` events is not otherwise
 guaranteed.

**参数**

- **prefix** — the prefix that was being mapped. This is the empty string when a default mapping scope ends.

**异常**

- **org.xml.sax.SAXException** — the client may throw an exception during processing

**参见**

- #startPrefixMapping
- #endElement
