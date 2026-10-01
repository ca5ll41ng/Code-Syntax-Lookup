---
id: "java-en-function-stringwriter-append"
language: "java"
lang: "en"
category: "function"
name: "StringWriter.append"
signature: "public StringWriter append(CharSequence csq)"
title: "StringWriter.append"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/StringWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StringWriter.append

```java
public StringWriter append(CharSequence csq)
```

Appends the specified character sequence to this writer.

 

 An invocation of this method of the form `out.append(csq)`
 when `csq` is not `null`, behaves in exactly the same way
 as the invocation

 {@snippet lang=java :
     out.write(csq.toString())
 }

 

 Depending on the specification of `toString` for the
 character sequence `csq`, the entire sequence may not be
 appended. For instance, invoking the `toString` method of a
 character buffer will return a subsequence whose content depends upon
 the buffer's position and limit.

**参数**

- **csq** — The character sequence to append.  If `csq` is `null`, then the four characters `"null"` are appended to this writer.

**返回**

- This writer

> *Since 1.5*
