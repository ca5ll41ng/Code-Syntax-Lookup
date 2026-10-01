---
id: "java-en-function-socketoptions-getoption"
language: "java"
lang: "en"
category: "function"
name: "SocketOptions.getOption"
signature: "public Object getOption(int optID) throws SocketException"
title: "SocketOptions.getOption"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/SocketOptions.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SocketOptions.getOption

```java
public Object getOption(int optID) throws SocketException
```

Fetch the value of an option. Binary options will return `TRUE` if enabled,
 `FALSE` if disabled, e.g.:
 {@snippet lang=java :
 SocketImpl s;
 ...
 Boolean noDelay = (Boolean)(s.getOption(TCP_NODELAY));
 if (noDelay.booleanValue()) {
     // true if TCP_NODELAY is enabled...
 ...
 }
 }
 

 For options that take a particular type as a parameter, this method will return the
 parameter's value, else it will return `FALSE`:
 {@snippet lang=java :
 Object o = s.getOption(SO_LINGER);
 if (o instanceof Integer) {
     System.out.print("Linger time is " + ((Integer)o).intValue());
 } else {
   // the true type of o is java.lang.Boolean.FALSE;
 }
 }

**参数**

- **optID** — an `int` identifying the option to fetch

**返回**

- the value of the option

**异常**

- **SocketException** — if the socket is closed or if `optID` is unknown along the protocol stack

**参见**

- #setOption(int, java.lang.Object)
