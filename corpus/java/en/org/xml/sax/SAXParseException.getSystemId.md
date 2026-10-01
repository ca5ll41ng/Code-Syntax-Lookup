---
id: "java-en-function-saxparseexception-getsystemid"
language: "java"
lang: "en"
category: "function"
name: "SAXParseException.getSystemId"
signature: "public String getSystemId ()"
title: "SAXParseException.getSystemId"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/SAXParseException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SAXParseException.getSystemId

```java
public String getSystemId ()
```

Get the system identifier of the entity where the exception occurred.

 

If the system identifier is a URL, it will have been resolved
 fully.

**返回**

- A string containing the system identifier, or null if none is available.

**参见**

- org.xml.sax.Locator#getSystemId
