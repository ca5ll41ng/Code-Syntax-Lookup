---
id: "java-en-function-properties-storetoxml"
language: "java"
lang: "en"
category: "function"
name: "Properties.storeToXML"
signature: "public void storeToXML(OutputStream os, String comment) throws IOException"
title: "Properties.storeToXML"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Properties.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Properties.storeToXML

```java
public void storeToXML(OutputStream os, String comment) throws IOException
```

Emits an XML document representing all of the properties contained
 in this table.

 

 An invocation of this method of the form `props.storeToXML(os,
 comment)` behaves in exactly the same way as the invocation
 `props.storeToXML(os, comment, "UTF-8");`.

**参数**

- **os** — the output stream on which to emit the XML document.
- **comment** — a description of the property list, or `null` if no comment is desired.

**异常**

- **IOException** — if writing to the specified output stream results in an `IOException`.
- **NullPointerException** — if `os` is null.
- **ClassCastException** — if this `Properties` object contains any keys or values that are not `Strings`.

**参见**

- #loadFromXML(InputStream)

> *Since 1.5*
