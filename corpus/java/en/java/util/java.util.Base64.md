---
id: "java-en-function-java-util-base64"
language: "java"
lang: "en"
category: "function"
name: "java.util.Base64"
title: "Base64"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Base64.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Base64

This class consists exclusively of static methods for obtaining
 encoders and decoders for the Base64 encoding scheme. The
 implementation of this class supports the following types of Base64
 as specified in
 RFC 4648 and
 RFC 2045.

 
 
- **Basic**
 

 Uses "The Base64 Alphabet" as specified in Table 1 of
     RFC 4648 and RFC 2045 for encoding and decoding operation.
     The encoder does not add any line feed (line separator)
     character. The decoder rejects data that contains characters
     outside the base64 alphabet.

 
- **URL and Filename safe**
 

 Uses the "URL and Filename safe Base64 Alphabet" as specified
     in Table 2 of RFC 4648 for encoding and decoding. The
     encoder does not add any line feed (line separator) character.
     The decoder rejects data that contains characters outside the
     base64 alphabet.

 
- **MIME**
 

 Uses "The Base64 Alphabet" as specified in Table 1 of
     RFC 2045 for encoding and decoding operation. The encoded output
     must be represented in lines of no more than 76 characters each
     and uses a carriage return `'\r'` followed immediately by
     a linefeed `'\n'` as the line separator. No line separator
     is added to the end of the encoded output. All line separators
     or other characters not found in the base64 alphabet table are
     ignored in decoding operation.
 

 

 Unless otherwise noted, passing a `null` argument to a
 method of this class will cause a `java.lang.NullPointerException
 NullPointerException` to be thrown.

      RFC 2045: Multipurpose Internet Mail Extensions (MIME) Part One: Format of Internet Message Bodies
      RFC 4648: The Base16, Base32, and Base64 Data Encodings

> *Since 1.8*
