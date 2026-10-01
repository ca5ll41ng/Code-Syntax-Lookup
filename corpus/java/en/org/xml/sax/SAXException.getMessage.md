---
id: "java-en-function-saxexception-getmessage"
language: "java"
lang: "en"
category: "function"
name: "SAXException.getMessage"
signature: "public String getMessage ()"
title: "SAXException.getMessage"
directive: "method"
module: "java.xml/org.xml.sax"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/SAXException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SAXException.getMessage

```java
public String getMessage ()
```

Return a detail message for this exception.

 

If there is an embedded exception, and if the SAXException
 has no detail message of its own, this method will return
 the detail message from the embedded exception.

**返回**

- The error or warning message.
