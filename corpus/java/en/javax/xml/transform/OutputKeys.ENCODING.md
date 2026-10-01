---
id: "java-en-function-outputkeys-encoding"
language: "java"
lang: "en"
category: "function"
name: "OutputKeys.ENCODING"
signature: "public static final String ENCODING = \"encoding\""
title: "OutputKeys.ENCODING"
directive: "field"
module: "java.xml/javax.xml.transform"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/javax/xml/transform/OutputKeys.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OutputKeys.ENCODING

```java
public static final String ENCODING = "encoding"
```

encoding = string.

 

encoding specifies the preferred character
 encoding that the Transformer should use to encode sequences of
 characters as sequences of bytes. The value of the encoding property should be
 treated case-insensitively. The value must only contain characters in
 the range #x21 to #x7E (i.e., printable ASCII characters). The value
 should either be a charset registered with the Internet
 Assigned Numbers Authority [IANA],
 [RFC2278]
 or start with X-.

**参见**

- section 16 of the XSL Transformations (XSLT) W3C Recommendation
