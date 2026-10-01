---
id: "java-en-function-formatter-tostring"
language: "java"
lang: "en"
category: "function"
name: "Formatter.toString"
signature: "public String toString()"
title: "Formatter.toString"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Formatter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Formatter.toString

```java
public String toString()
```

Returns the result of invoking `toString()` on the destination
 for the output.  For example, the following code formats text into a
 `StringBuilder` then retrieves the resultant string:

 
```

   Formatter f = new Formatter();
   f.format("Last reboot at %tc", lastRebootDate);
   String s = f.toString();
   // -&gt; s == "Last reboot at Sat Jan 01 00:00:00 PST 2000"
 
```

 

 An invocation of this method behaves in exactly the same way as the
 invocation

 
```

     out().toString() 
```

 

 Depending on the specification of `toString` for the `Appendable`, the returned string may or may not contain the characters
 written to the destination.  For instance, buffers typically return
 their contents in `toString()`, but streams cannot since the
 data is discarded.

**返回**

- The result of invoking `toString()` on the destination for the output

**异常**

- **FormatterClosedException** — If this formatter has been closed by invoking its `close` method
