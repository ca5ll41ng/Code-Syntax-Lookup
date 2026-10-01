---
id: "java-en-function-system-out"
language: "java"
lang: "en"
category: "function"
name: "System.out"
signature: "public static final PrintStream out = null"
title: "System.out"
directive: "field"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/System.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# System.out

```java
public static final PrintStream out = null
```

The "standard" output stream. This stream is already
 open and ready to accept output data. Typically this stream
 corresponds to display output or another output destination
 specified by the host environment or user. The encoding used
 in the conversion from characters to bytes is equivalent to
 `#stdout.encoding stdout.encoding`.
 

 For simple stand-alone Java applications, a typical way to write
 a line of output data is:
 
```

     System.out.println(data)
 
```

 

 See the `println` methods in class `PrintStream`.

**参见**

- java.io.PrintStream#println()
- java.io.PrintStream#println(boolean)
- java.io.PrintStream#println(char)
- java.io.PrintStream#println(char[])
- java.io.PrintStream#println(double)
- java.io.PrintStream#println(float)
- java.io.PrintStream#println(int)
- java.io.PrintStream#println(long)
- java.io.PrintStream#println(java.lang.Object)
- java.io.PrintStream#println(java.lang.String)
- ##stdout.encoding stdout.encoding
