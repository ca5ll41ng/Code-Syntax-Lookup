---
id: "java-en-function-propertyresourcebundle-propertyresourcebundle"
language: "java"
lang: "en"
category: "function"
name: "PropertyResourceBundle.PropertyResourceBundle"
signature: "public PropertyResourceBundle (InputStream stream) throws IOException"
title: "PropertyResourceBundle.PropertyResourceBundle"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/PropertyResourceBundle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PropertyResourceBundle.PropertyResourceBundle

```java
public PropertyResourceBundle (InputStream stream) throws IOException
```

Creates a property resource bundle from an `java.io.InputStream
 InputStream`. This constructor reads the property file in UTF-8 by default.
 If a `java.nio.charset.MalformedInputException` or an
 `java.nio.charset.UnmappableCharacterException` occurs on reading the
 input stream, then the PropertyResourceBundle instance resets to the state
 before the exception, re-reads the input stream in `ISO-8859-1` and
 continues reading. If the system property
 `java.util.PropertyResourceBundle.encoding` is set to either
 "ISO-8859-1" or "UTF-8", the input stream is solely read in that encoding,
 and throws the exception if it encounters an invalid sequence. Other
 encoding values are ignored for this system property.
 The system property is read and evaluated when initializing this class.
 Changing or removing the property has no effect after the initialization.

**参数**

- **stream** — an InputStream that represents a property file to read from.

**异常**

- **IOException** — if an I/O error occurs
- **NullPointerException** — if `stream` is null
- **IllegalArgumentException** — if `stream` contains a malformed Unicode escape sequence.
- **MalformedInputException** — if the system property `java.util.PropertyResourceBundle.encoding` is set to "UTF-8" and `stream` contains an invalid UTF-8 byte sequence.
- **UnmappableCharacterException** — if the system property `java.util.PropertyResourceBundle.encoding` is set to "UTF-8" and `stream` contains an unmappable UTF-8 byte sequence.
