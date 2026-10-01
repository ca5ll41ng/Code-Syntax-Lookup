---
id: "java-en-function-contenthandler-startprefixmapping"
language: "java"
lang: "en"
category: "function"
name: "ContentHandler.startPrefixMapping"
signature: "public void startPrefixMapping (String prefix, String uri) throws SAXException"
title: "ContentHandler.startPrefixMapping"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ContentHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ContentHandler.startPrefixMapping

```java
public void startPrefixMapping (String prefix, String uri) throws SAXException
```

Begin the scope of a prefix-URI Namespace mapping.

 

The information from this event is not necessary for
 normal Namespace processing: the SAX XML reader will
 automatically replace prefixes for element and attribute
 names when the http://xml.org/sax/features/namespaces
 feature is true (the default).

 

There are cases, however, when applications need to
 use prefixes in character data or in attribute values,
 where they cannot safely be expanded automatically; the
 start/endPrefixMapping event supplies the information
 to the application to expand prefixes in those contexts
 itself, if necessary.

 

Note that start/endPrefixMapping events are not
 guaranteed to be properly nested relative to each other:
 all startPrefixMapping events will occur immediately before the
 corresponding `startElement startElement` event,
 and all `endPrefixMapping endPrefixMapping`
 events will occur immediately after the corresponding
 `endElement endElement` event,
 but their order is not otherwise
 guaranteed.

 

There should never be start/endPrefixMapping events for the
 "xml" prefix, since it is predeclared and immutable.

**参数**

- **prefix** — the Namespace prefix being declared. An empty string is used for the default element namespace, which has no prefix.
- **uri** — the Namespace URI the prefix is mapped to

**异常**

- **org.xml.sax.SAXException** — the client may throw an exception during processing

**参见**

- #endPrefixMapping
- #startElement
