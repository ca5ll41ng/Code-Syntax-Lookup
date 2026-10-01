---
id: "java-en-function-printstream-append"
language: "java"
lang: "en"
category: "function"
name: "PrintStream.append"
signature: "public PrintStream append(CharSequence csq)"
title: "PrintStream.append"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PrintStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PrintStream.append

```java
public PrintStream append(CharSequence csq)
```

Appends the specified character sequence to this output stream.

 

 An invocation of this method of the form `out.append(csq)`
 when `csq` is not `null`, behaves in exactly the same way
 as the invocation

 {@snippet lang=java :
     out.print(csq.toString())
 }

 

 Depending on the specification of `toString` for the
 character sequence `csq`, the entire sequence may not be
 appended.  For instance, invoking the `toString` method of a
 character buffer will return a subsequence whose content depends upon
 the buffer's position and limit.

**参数**

- **csq** — The character sequence to append.  If `csq` is `null`, then the four characters `"null"` are appended to this output stream.

**返回**

- This output stream

> *Since 1.5*
