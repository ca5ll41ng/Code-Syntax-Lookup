---
id: "java-en-function-datainput-readutf"
language: "java"
lang: "en"
category: "function"
name: "DataInput.readUTF"
signature: "String readUTF() throws IOException"
title: "DataInput.readUTF"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataInput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataInput.readUTF

```java
String readUTF() throws IOException
```

Reads in a string that has been encoded using a
 modified UTF-8
 format.
 The general contract of `readUTF`
 is that it reads a representation of a Unicode
 character string encoded in modified
 UTF-8 format; this string of characters
 is then returned as a `String`.
 

 First, two bytes are read and used to
 construct an unsigned 16-bit integer in
 exactly the manner of the `readUnsignedShort`
 method . This integer value is called the
 UTF length and specifies the number
 of additional bytes to be read. These bytes
 are then converted to characters by considering
 them in groups. The length of each group
 is computed from the value of the first
 byte of the group. The byte following a
 group, if any, is the first byte of the
 next group.
 

 If the first byte of a group
 matches the bit pattern `0xxxxxxx`
 (where `x` means "may be `0`
 or `1`"), then the group consists
 of just that byte. The byte is zero-extended
 to form a character.
 

 If the first byte
 of a group matches the bit pattern `110xxxxx`,
 then the group consists of that byte `a`
 and a second byte `b`. If there
 is no byte `b` (because byte
 `a` was the last of the bytes
 to be read), or if byte `b` does
 not match the bit pattern `10xxxxxx`,
 then a `UTFDataFormatException`
 is thrown. Otherwise, the group is converted
 to the character:
 
```
`(char)(((a & 0x1F) << 6) | (b & 0x3F))
 `
```

 If the first byte of a group
 matches the bit pattern `1110xxxx`,
 then the group consists of that byte `a`
 and two more bytes `b` and `c`.
 If there is no byte `c` (because
 byte `a` was one of the last
 two of the bytes to be read), or either
 byte `b` or byte `c`
 does not match the bit pattern `10xxxxxx`,
 then a `UTFDataFormatException`
 is thrown. Otherwise, the group is converted
 to the character:
 
```
`(char)(((a & 0x0F) << 12) | ((b & 0x3F) << 6) | (c & 0x3F))
 `
```

 If the first byte of a group matches the
 pattern `1111xxxx` or the pattern
 `10xxxxxx`, then a `UTFDataFormatException`
 is thrown.
 

 If end of file is encountered
 at any time during this entire process,
 then an `EOFException` is thrown.
 

 After every group has been converted to
 a character by this process, the characters
 are gathered, in the same order in which
 their corresponding groups were read from
 the input stream, to form a `String`,
 which is returned.
 

 The `writeUTF`
 method of interface `DataOutput`
 may be used to write data that is suitable
 for reading by this method.

**返回**

- a Unicode string.

**异常**

- **EOFException** — if this stream reaches the end before reading all the bytes.
- **IOException** — if an I/O error occurs.
- **UTFDataFormatException** — if the bytes do not represent a valid modified UTF-8 encoding of a string.
