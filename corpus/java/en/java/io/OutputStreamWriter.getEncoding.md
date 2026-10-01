---
id: "java-en-function-outputstreamwriter-getencoding"
language: "java"
lang: "en"
category: "function"
name: "OutputStreamWriter.getEncoding"
signature: "public String getEncoding()"
title: "OutputStreamWriter.getEncoding"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/OutputStreamWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OutputStreamWriter.getEncoding

```java
public String getEncoding()
```

Returns the name of the character encoding being used by this stream.

 

 If the encoding has an historical name then that name is returned;
 otherwise the encoding's canonical name is returned.

 

 If this instance was created with the `OutputStreamWriter` constructor then the returned
 name, being unique for the encoding, may differ from the name passed to
 the constructor.  This method may return `null` if the stream has
 been closed.

**返回**

- The historical name of this encoding, or possibly `null` if the stream has been closed

**参见**

- Charset
