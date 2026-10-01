---
id: "java-en-function-locator2-getencoding"
language: "java"
lang: "en"
category: "function"
name: "Locator2.getEncoding"
signature: "public String getEncoding ()"
title: "Locator2.getEncoding"
directive: "method"
module: "java.xml/org.xml.sax.ext"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.xml/org/xml/sax/ext/Locator2.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Locator2.getEncoding

```java
public String getEncoding ()
```

Returns the name of the character encoding for the entity.
 If the encoding was declared externally (for example, in a MIME
 Content-Type header), that will be the name returned.  Else if there
 was an &lt;?xml&nbsp;...encoding='...'?&gt; declaration at
 the start of the document, that encoding name will be returned.
 Otherwise the encoding will been inferred (normally to be UTF-8, or
 some UTF-16 variant), and that inferred name will be returned.

 

When an `org.xml.sax.InputSource InputSource` is used
 to provide an entity's character stream, this method returns the
 encoding provided in that input stream.

 

 Note that some recent W3C specifications require that text
 in some encodings be normalized, using Unicode Normalization
 Form C, before processing.  Such normalization must be performed
 by applications, and would normally be triggered based on the
 value returned by this method.

 

 Encoding names may be those used by the underlying JVM,
 and comparisons should be case-insensitive.

**返回**

- Name of the character encoding being used to interpret * the entity's text, or null if this was not provided for a * character stream passed through an InputSource or is otherwise not yet available in the current parsing state.
