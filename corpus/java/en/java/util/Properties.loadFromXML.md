---
id: "java-en-function-properties-loadfromxml"
language: "java"
lang: "en"
category: "function"
name: "Properties.loadFromXML"
signature: "public synchronized void loadFromXML(InputStream in) throws IOException, InvalidPropertiesFormatException"
title: "Properties.loadFromXML"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Properties.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Properties.loadFromXML

```java
public synchronized void loadFromXML(InputStream in) throws IOException, InvalidPropertiesFormatException
```

Loads all of the properties represented by the XML document on the
 specified input stream into this properties table.

 

The XML document must have the following DOCTYPE declaration:
 
```

 &lt;!DOCTYPE properties SYSTEM "http://java.sun.com/dtd/properties.dtd"&gt;
 
```

 Furthermore, the document must satisfy the properties DTD described
 above.

 

 An implementation is required to read XML documents that use the
 "`UTF-8`" or "`UTF-16`" encoding. An implementation may
 support additional encodings.

 

The specified stream is closed after this method returns.

**参数**

- **in** — the input stream from which to read the XML document.

**异常**

- **IOException** — if reading from the specified input stream results in an `IOException`.
- **java.io.UnsupportedEncodingException** — if the document's encoding declaration can be read and it specifies an encoding that is not supported
- **InvalidPropertiesFormatException** — Data on input stream does not constitute a valid XML document with the mandated document type.
- **NullPointerException** — if `in` is null.

**参见**

- #storeToXML(OutputStream, String, String)
- Character Encoding in Entities

> *Since 1.5*
