---
id: "java-en-function-appendable-append"
language: "java"
lang: "en"
category: "function"
name: "Appendable.append"
signature: "Appendable append(CharSequence csq) throws IOException"
title: "Appendable.append"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Appendable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Appendable.append

```java
Appendable append(CharSequence csq) throws IOException
```

Appends the specified character sequence to this `Appendable`.

 

 Depending on which class implements the character sequence
 `csq`, the entire sequence may not be appended.  For
 instance, if `csq` is a `java.nio.CharBuffer` then
 the subsequence to append is defined by the buffer's position and limit.
 

 The contents of this `Appendable` are unspecified if the `CharSequence`
 is modified during the method call or an exception is thrown
 when accessing the `CharSequence`.

**参数**

- **csq** — The character sequence to append.  If `csq` is `null`, then the four characters `"null"` are appended to this Appendable.

**返回**

- A reference to this `Appendable`

**异常**

- **IOException** — If an I/O error occurs
