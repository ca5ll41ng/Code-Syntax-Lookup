---
id: "java-en-function-randomaccessfile-setlength"
language: "java"
lang: "en"
category: "function"
name: "RandomAccessFile.setLength"
signature: "public void setLength(long newLength) throws IOException"
title: "RandomAccessFile.setLength"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/RandomAccessFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RandomAccessFile.setLength

```java
public void setLength(long newLength) throws IOException
```

Sets the length of this file.

 

 If the present length of the file as returned by the
 `length length` method is greater than the desired length
 of the file specified by the `newLength` argument, then the file
 will be truncated.

 

 If the present length of the file is smaller than the desired length,
 then the file will be extended.  The contents of the extended portion of
 the file are not defined.

 

 If the present length of the file is equal to the desired length,
 then the file and its length will be unchanged.

 

 In all cases, after this method returns, the file offset as returned
 by the `getFilePointer getFilePointer` method will equal the
 minimum of the desired length and the file offset before this method was
 called, even if the length is unchanged.  In other words, this method
 constrains the file offset to the closed interval `[0,newLength]`.

**参数**

- **newLength** — The desired length of the file

**异常**

- **IOException** — If the argument is negative or if some other I/O error occurs

> *Since 1.2*
