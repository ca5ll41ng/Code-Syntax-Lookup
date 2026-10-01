---
id: "java-en-function-attributes2impl-addattribute"
language: "java"
lang: "en"
category: "function"
name: "Attributes2Impl.addAttribute"
signature: "public void addAttribute (String uri, String localName, String qName, String type, String value)"
title: "Attributes2Impl.addAttribute"
directive: "method"
module: "java.xml/org.xml.sax.ext"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ext/Attributes2Impl.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Attributes2Impl.addAttribute

```java
public void addAttribute (String uri, String localName, String qName, String type, String value)
```

Add an attribute to the end of the list, setting its
 "specified" flag to true.  To set that flag's value
 to false, use `setSpecified`.

 

Unless the attribute type is CDATA, this attribute
 is marked as being declared in the DTD.  To set that flag's value
 to true for CDATA attributes, use `setDeclared`.

**参见**

- AttributesImpl#addAttribute
