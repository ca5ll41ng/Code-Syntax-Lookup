---
id: "java-en-function-inputsource-setpublicid"
language: "java"
lang: "en"
category: "function"
name: "InputSource.setPublicId"
signature: "public void setPublicId (String publicId)"
title: "InputSource.setPublicId"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/InputSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InputSource.setPublicId

```java
public void setPublicId (String publicId)
```

Set the public identifier for this input source.

 

The public identifier is always optional: if the application
 writer includes one, it will be provided as part of the
 location information.

**参数**

- **publicId** — The public identifier as a string.

**参见**

- #getPublicId
- org.xml.sax.Locator#getPublicId
- org.xml.sax.SAXParseException#getPublicId
