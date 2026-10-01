---
id: "java-en-function-dataoutput-writeutf"
language: "java"
lang: "en"
category: "function"
name: "DataOutput.writeUTF"
signature: "void writeUTF(String s) throws IOException"
title: "DataOutput.writeUTF"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataOutput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataOutput.writeUTF

```java
void writeUTF(String s) throws IOException
```

Writes two bytes of length information
 to the output stream, followed
 by the
 modified UTF-8
 representation
 of  every character in the string `s`.
 If `s` is `null`,
 a `NullPointerException` is thrown.
 Each character in the string `s`
 is converted to a group of one, two, or
 three bytes, depending on the value of the
 character.

 If a character `c`
 is in the range &#92;u0001 through
 &#92;u007f, it is represented
 by one byte:
 
```
(byte)c 
```
  

 If a character `c` is &#92;u0000
 or is in the range &#92;u0080
 through &#92;u07ff, then it is
 represented by two bytes, to be written
 in the order shown: 
```
`(byte)(0xc0 | (0x1f & (c >> 6)))
 (byte)(0x80 | (0x3f & c))
 `
```
 

 If a character
 `c` is in the range &#92;u0800
 through `uffff`, then it is
 represented by three bytes, to be written
 in the order shown: 
```
`(byte)(0xe0 | (0x0f & (c >> 12)))
 (byte)(0x80 | (0x3f & (c >>  6)))
 (byte)(0x80 | (0x3f & c))
 `
```
  

 First,
 the total number of bytes needed to represent
 all the characters of `s` is
 calculated. If this number is larger than
 `65535`, then a `UTFDataFormatException`
 is thrown. Otherwise, this length is written
 to the output stream in exactly the manner
 of the `writeShort` method;
 after this, the one-, two-, or three-byte
 representation of each character in the
 string `s` is written.

  The
 bytes written by this method may be read
 by the `readUTF` method of interface
 `DataInput`, which will then
 return a `String` equal to `s`.

**参数**

- **s** — the string value to be written.

**异常**

- **IOException** — if an I/O error occurs.
