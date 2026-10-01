---
id: "java-en-function-java-io-datainput"
language: "java"
lang: "en"
category: "function"
name: "java.io.DataInput"
title: "DataInput"
directive: "type"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/DataInput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DataInput

The `DataInput` interface provides
 for reading bytes from a binary stream and
 reconstructing from them data in any of
 the Java primitive types. There is also
 a
 facility for reconstructing a `String`
 from data in
 modified UTF-8
 format.
 

 It is generally true of all the reading
 routines in this interface that if end of
 file is reached before the desired number
 of bytes has been read, an `EOFException`
 (which is a kind of `IOException`)
 is thrown. If any byte cannot be read for
 any reason other than end of file, an `IOException`
 other than `EOFException` is
 thrown. In particular, an `IOException`
 may be thrown if the input stream has been
 closed.

 Modified UTF-8
 

 Implementations of the DataInput and DataOutput interfaces represent
 Unicode strings in a format that is a slight modification of UTF-8.
 (For information regarding the standard UTF-8 format, see section
 3.9 Unicode Encoding Forms of The Unicode Standard, Version
 4.0)

 
 
- Characters in the range `'\u005Cu0001'` to
         `'\u005Cu007F'` are represented by a single byte.
 
- The null character `'\u005Cu0000'` and characters
         in the range `'\u005Cu0080'` to `'\u005Cu07FF'` are
         represented by a pair of bytes.
 
- Characters in the range `'\u005Cu0800'`
         to `'\u005CuFFFF'` are represented by three bytes.
 

   
     Encoding of UTF-8 values
     
     
       Value
       Byte
       Bit Values
     
     
       <!-- Value -->
       <!-- Byte -->
        7 
        6 
        5 
        4 
        3 
        2 
        1 
        0 
     
     
     
       
         `\u005Cu0001` to `\u005Cu007F` 
        1 
       0
       bits 6-0
     
     
       
           `\u005Cu0000`,

           `\u005Cu0080` to `\u005Cu07FF` 
        1 
       1
       1
       0
       bits 10-6
     
     
       <!-- (value) -->
        2 
       1
       0
       bits 5-0
     
     
       
         `\u005Cu0800` to `\u005CuFFFF` 
        1 
       1
       1
       1
       0
       bits 15-12
     
     
       <!-- (value) -->
        2 
       1
       0
       bits 11-6
     
     
       <!-- (value) -->
        3 
       1
       0
       bits 5-0
     
     
   

 

 The differences between this format and the
 standard UTF-8 format are the following:
 
 
- The null byte `'\u005Cu0000'` is encoded in 2-byte format
     rather than 1-byte, so that the encoded strings never have
     embedded nulls.
 
- Only the 1-byte, 2-byte, and 3-byte formats are used.
 
- Supplementary characters
     are represented in the form of surrogate pairs.

**参见**

- java.io.DataInputStream
- java.io.DataOutput

> *Since 1.0*
