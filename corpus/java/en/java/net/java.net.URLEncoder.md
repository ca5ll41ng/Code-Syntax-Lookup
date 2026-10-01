---
id: "java-en-function-java-net-urlencoder"
language: "java"
lang: "en"
category: "function"
name: "java.net.URLEncoder"
title: "URLEncoder"
directive: "type"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLEncoder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLEncoder

Utility class for HTML form encoding. This class contains static methods
 for converting a String to the application/x-www-form-urlencoded MIME
 format. For more information about HTML form encoding, consult the HTML
 specification.

 

 When encoding a String, the following rules apply:

 
 
- The alphanumeric characters &quot;`a`&quot; through
     &quot;`z`&quot;, &quot;`A`&quot; through
     &quot;`Z`&quot; and &quot;`0`&quot;
     through &quot;`9`&quot; remain the same.
 
- The special characters &quot;`.`&quot;,
     &quot;`-`&quot;, &quot;`*`&quot;, and
     &quot;`_`&quot; remain the same.
 
- The space character &quot; &nbsp; &quot; is
     converted into a plus sign &quot;`+`&quot;.
 
- All other characters are unsafe and are first converted into
     one or more bytes using some encoding scheme. Then each byte is
     represented by the 3-character string
     &quot;`%xy`&quot;, where xy is the
     two-digit hexadecimal representation of the byte.
     The recommended encoding scheme to use is UTF-8. However,
     for compatibility reasons, if an encoding is not specified,
     then the default charset is used.
 

 

 For example using UTF-8 as the encoding scheme the string &quot;The
 string &#252;@foo-bar&quot; would get converted to
 &quot;The+string+%C3%BC%40foo-bar&quot; because in UTF-8 the character
 &#252; is encoded as two bytes C3 (hex) and BC (hex), and the
 character @ is encoded as one byte 40 (hex).

**参见**

- Charset#defaultCharset()

> *Since 1.0*
