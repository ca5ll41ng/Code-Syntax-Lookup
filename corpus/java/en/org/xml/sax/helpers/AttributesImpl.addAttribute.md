---
id: "java-en-function-attributesimpl-addattribute"
language: "java"
lang: "en"
category: "function"
name: "AttributesImpl.addAttribute"
signature: "public void addAttribute (String uri, String localName, String qName, String type, String value)"
title: "AttributesImpl.addAttribute"
directive: "method"
module: "java.xml/org.xml.sax.helpers"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/helpers/AttributesImpl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AttributesImpl.addAttribute

```java
public void addAttribute (String uri, String localName, String qName, String type, String value)
```

Add an attribute to the end of the list.

 

For the sake of speed, this method does no checking
 to see if the attribute is already in the list: that is
 the responsibility of the application.

**参数**

- **uri** — The Namespace URI, or the empty string if none is available or Namespace processing is not being performed.
- **localName** — The local name, or the empty string if Namespace processing is not being performed.
- **qName** — The qualified (prefixed) name, or the empty string if qualified names are not available.
- **type** — The attribute type as a string.
- **value** — The attribute value.
