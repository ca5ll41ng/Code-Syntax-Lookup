---
id: "java-en-function-java-net-urldecoder"
language: "java"
lang: "en"
category: "function"
name: "java.net.URLDecoder"
title: "URLDecoder"
directive: "type"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLDecoder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLDecoder

Utility class for HTML form decoding. This class contains static methods
 for decoding a String from the application/x-www-form-urlencoded
 MIME format.
 

 The conversion process is the reverse of that used by the URLEncoder class. It is assumed
 that all characters in the encoded string are one of the following:
 &quot;`a`&quot; through &quot;`z`&quot;,
 &quot;`A`&quot; through &quot;`Z`&quot;,
 &quot;`0`&quot; through &quot;`9`&quot;, and
 &quot;`-`&quot;, &quot;`_`&quot;,
 &quot;`.`&quot;, and &quot;`*`&quot;. The
 character &quot;`%`&quot; is allowed but is interpreted
 as the start of a special escaped sequence.
 

 The following rules are applied in the conversion:

 
 
- The alphanumeric characters &quot;`a`&quot; through
     &quot;`z`&quot;, &quot;`A`&quot; through
     &quot;`Z`&quot; and &quot;`0`&quot;
     through &quot;`9`&quot; remain the same.
 
- The special characters &quot;`.`&quot;,
     &quot;`-`&quot;, &quot;`*`&quot;, and
     &quot;`_`&quot; remain the same.
 
- The plus sign &quot;`+`&quot; is converted into a
     space character &quot; &nbsp; &quot; .
 
- A sequence of the form "`%xy`" will be
     treated as representing a byte where xy is the two-digit
     hexadecimal representation of the 8 bits. Then, all substrings
     that contain one or more of these byte sequences consecutively
     will be replaced by the character(s) whose encoding would result
     in those consecutive bytes.
     The encoding scheme used to decode these characters may be specified,
     or if unspecified, the default charset will be used.
 

 

 There are two possible ways in which this decoder could deal with
 illegal strings.  It could either leave illegal characters alone or
 it could throw an `java.lang.IllegalArgumentException`.
 Which approach the decoder takes is left to the
 implementation.

**参见**

- Charset#defaultCharset()

> *Since 1.2*
