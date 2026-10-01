---
id: "java-en-function-inputsource-getsystemid"
language: "java"
lang: "en"
category: "function"
name: "InputSource.getSystemId"
signature: "public String getSystemId ()"
title: "InputSource.getSystemId"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/InputSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InputSource.getSystemId

```java
public String getSystemId ()
```

Get the system identifier for this input source.

 

The getEncoding method will return the character encoding
 of the object pointed to, or null if unknown.

 

If the system ID is a URL, it will be fully resolved.

**返回**

- The system identifier, or null if none was supplied.

**参见**

- #setSystemId
- #getEncoding
