---
id: "java-en-function-console-reader"
language: "java"
lang: "en"
category: "function"
name: "Console.reader"
signature: "public Reader reader()"
title: "Console.reader"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/Console.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Console.reader

```java
public Reader reader()
```

Retrieves the unique `java.io.Reader Reader` object associated
 with this console.
 

 This method is intended to be used by sophisticated applications, for
 example, a `java.util.Scanner` object which utilizes the rich
 parsing/scanning functionality provided by the `Scanner`:
 {@snippet lang=java :
     Console con = System.console();
     if (con != null) {
         Scanner sc = new Scanner(con.reader());
         code: // @replace substring="code:" replacement="..."
     }
 }
 

 For simple applications requiring only line-oriented reading, use
 `readLine`.
 

 The bulk read operations `read`,
 `read` and
 `read`
 on the returned object will not read in characters beyond the line
 bound for each invocation, even if the destination buffer has space for
 more characters. The `Reader`'s `read` methods may block if a
 line bound has not been entered or reached on the console's input device.
 A line bound is considered to be any one of a line feed (`'\n'`),
 a carriage return (`'\r'`), a carriage return followed immediately
 by a linefeed, or an end of stream.

**返回**

- The reader associated with this console
