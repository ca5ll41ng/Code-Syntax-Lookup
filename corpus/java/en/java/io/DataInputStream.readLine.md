---
id: "java-en-function-datainputstream-readline"
language: "java"
lang: "en"
category: "function"
name: "DataInputStream.readLine"
signature: "public final String readLine() throws IOException"
title: "DataInputStream.readLine"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataInputStream.readLine

```java
public final String readLine() throws IOException
```

See the general contract of the `readLine`
 method of `DataInput`.
 

 Bytes
 for this operation are read from the contained
 input stream.

**返回**

- the next line of text from this input stream.

**异常**

- **IOException** — if an I/O error occurs.

**参见**

- java.io.BufferedReader#readLine()
- java.io.FilterInputStream#in

> **⚠ Deprecated** — This method does not properly convert bytes to characters. As of JDK&nbsp;1.1, the preferred way to read lines of text is via the `BufferedReader.readLine()` method.  Programs that use the `DataInputStream` class to read lines can be converted to use the `BufferedReader` class by replacing code of the form:  ```  DataInputStream d =&nbsp;new&nbsp;DataInputStream(in);  ```  with:  ```  BufferedReader d =&nbsp;new&nbsp;BufferedReader(new&nbsp;InputStreamReader(in));  ```
