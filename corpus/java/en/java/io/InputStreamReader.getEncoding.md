---
id: "java-en-function-inputstreamreader-getencoding"
language: "java"
lang: "en"
category: "function"
name: "InputStreamReader.getEncoding"
signature: "public String getEncoding()"
title: "InputStreamReader.getEncoding"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/InputStreamReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InputStreamReader.getEncoding

```java
public String getEncoding()
```

Returns the name of the character encoding being used by this stream.

 

 If the encoding has an historical name then that name is returned;
 otherwise the encoding's canonical name is returned.

 

 If this instance was created with the `InputStreamReader` constructor then the returned
 name, being unique for the encoding, may differ from the name passed to
 the constructor. This method will return `null` if the
 stream has been closed.

**返回**

- The historical name of this encoding, or `null` if the stream has been closed

**参见**

- Charset
