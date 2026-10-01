---
id: "java-en-function-objectname-quote"
language: "java"
lang: "en"
category: "function"
name: "ObjectName.quote"
signature: "public static String quote(String s)"
title: "ObjectName.quote"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/ObjectName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectName.quote

```java
public static String quote(String s)
```

Returns a quoted form of the given String, suitable for
 inclusion in an ObjectName.  The returned value can be used as
 the value associated with a key in an ObjectName.  The String
 s may contain any character.  Appropriate quoting
 ensures that the returned value is legal in an ObjectName.

 

The returned value consists of a quote ('"'), a sequence of
 characters corresponding to the characters of s,
 and another quote.  Characters in s appear
 unchanged within the returned value except:

 
 
- A quote ('"') is replaced by a backslash (\) followed by a quote.
 
- An asterisk ('*') is replaced by a backslash (\) followed by an
 asterisk.
 
- A question mark ('?') is replaced by a backslash (\) followed by
 a question mark.
 
- A backslash ('\') is replaced by two backslashes.
 
- A newline character (the character '\n' in Java) is replaced
 by a backslash followed by the character '\n'.

**参数**

- **s** — the String to be quoted.

**返回**

- the quoted String.

**异常**

- **NullPointerException** — if s is null.
