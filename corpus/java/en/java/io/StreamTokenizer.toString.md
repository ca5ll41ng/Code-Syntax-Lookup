---
id: "java-en-function-streamtokenizer-tostring"
language: "java"
lang: "en"
category: "function"
name: "StreamTokenizer.toString"
signature: "public String toString()"
title: "StreamTokenizer.toString"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/StreamTokenizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StreamTokenizer.toString

```java
public String toString()
```

Returns the string representation of the current stream token and
 the line number it occurs on.

 

The precise string returned is unspecified, although the following
 example can be considered typical:

 
```

         Token['a'], line 10
 
```

**返回**

- a string representation of the token

**参见**

- java.io.StreamTokenizer#nval
- java.io.StreamTokenizer#sval
- java.io.StreamTokenizer#ttype
