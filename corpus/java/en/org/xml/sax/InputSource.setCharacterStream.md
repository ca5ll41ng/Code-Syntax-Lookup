---
id: "java-en-function-inputsource-setcharacterstream"
language: "java"
lang: "en"
category: "function"
name: "InputSource.setCharacterStream"
signature: "public void setCharacterStream (Reader characterStream)"
title: "InputSource.setCharacterStream"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/InputSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InputSource.setCharacterStream

```java
public void setCharacterStream (Reader characterStream)
```

Set the character stream for this input source.

 

If there is a character stream specified, the SAX parser
 will ignore any byte stream and will not attempt to open
 a URI connection to the system identifier.

**参数**

- **characterStream** — The character stream containing the XML document or other entity.

**参见**

- #getCharacterStream
- java.io.Reader
