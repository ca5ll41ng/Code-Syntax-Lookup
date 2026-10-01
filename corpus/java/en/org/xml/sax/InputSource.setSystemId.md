---
id: "java-en-function-inputsource-setsystemid"
language: "java"
lang: "en"
category: "function"
name: "InputSource.setSystemId"
signature: "public void setSystemId (String systemId)"
title: "InputSource.setSystemId"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/InputSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InputSource.setSystemId

```java
public void setSystemId (String systemId)
```

Set the system identifier for this input source.

 

The system identifier is optional if there is a byte stream
 or a character stream, but it is still useful to provide one,
 since the application can use it to resolve relative URIs
 and can include it in error messages and warnings (the parser
 will attempt to open a connection to the URI only if
 there is no byte stream or character stream specified).

 

If the application knows the character encoding of the
 object pointed to by the system identifier, it can register
 the encoding using the setEncoding method.

 

If the system identifier is a URL, it must be fully
 resolved (it may not be a relative URL).

**参数**

- **systemId** — The system identifier as a string.

**参见**

- #setEncoding
- #getSystemId
- org.xml.sax.Locator#getSystemId
- org.xml.sax.SAXParseException#getSystemId
