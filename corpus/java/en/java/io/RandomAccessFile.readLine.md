---
id: "java-en-function-randomaccessfile-readline"
language: "java"
lang: "en"
category: "function"
name: "RandomAccessFile.readLine"
signature: "public final String readLine() throws IOException"
title: "RandomAccessFile.readLine"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/RandomAccessFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RandomAccessFile.readLine

```java
public final String readLine() throws IOException
```

Reads the next line of text from this file.  This method successively
 reads bytes from the file, starting at the current file pointer,
 until it reaches a line terminator or the end
 of the file.  Each byte is converted into a character by taking the
 byte's value for the lower eight bits of the character and setting the
 high eight bits of the character to zero.  This method does not,
 therefore, support the full Unicode character set.

 

 A line of text is terminated by a carriage-return character
 (`'\u005Cr'`), a newline character (`'\u005Cn'`), a
 carriage-return character immediately followed by a newline character,
 or the end of the file.  Line-terminating characters are discarded and
 are not included as part of the string returned.

 

 This method blocks until a newline character is read, a carriage
 return and the byte following it are read (to see if it is a newline),
 the end of the file is reached, or an exception is thrown.

**返回**

- the next line of text from this file, or null if end of file is encountered before even one byte is read.

**异常**

- **IOException** — if an I/O error occurs.
