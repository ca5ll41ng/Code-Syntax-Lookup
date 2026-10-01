---
id: "java-en-function-simpleformatter-format"
language: "java"
lang: "en"
category: "function"
name: "SimpleFormatter.format"
signature: "public String format(LogRecord record)"
title: "SimpleFormatter.format"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/SimpleFormatter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SimpleFormatter.format

```java
public String format(LogRecord record)
```

Format the given LogRecord.
 

 The formatting can be customized by specifying the format string
 in the 
 `java.util.logging.SimpleFormatter.format` property.
 The given `LogRecord` will be formatted as if by calling:
 
```

    `format String.format`(format, date, source, logger, level, message, thrown);
 
```

 where the arguments are:

 
 
- `format` - the `java.util.Formatter
     java.util.Formatter` format string specified in the
     `java.util.logging.SimpleFormatter.format` property
     or the default format.
 
- `date` - a `ZonedDateTime` object representing
     `getInstant() event time` of the log record
      in the `systemDefault` system time zone.
 
- `source` - a string representing the caller, if available;
     otherwise, the logger's name.
 
- `logger` - the logger's name.
 
- `level` - the `getLocalizedName
     log level`.
 
- `message` - the formatted log message
     returned from the `formatMessage`
     method.  It uses `java.text.MessageFormat java.text`
     formatting and does not use the `java.util.Formatter
     format` argument.
 
- `thrown` - a string representing
     the `getThrown throwable`
     associated with the log record and its backtrace
     beginning with a newline character, if any;
     otherwise, an empty string.
 

 

Some example formats:

 
 
-  `java.util.logging.SimpleFormatter.format="%4$s: %5$s [%1$tc]%n"`
     

This prints 1 line with the log level (`4$`),
     the log message (`5$`) and the timestamp (`1$`) in
     a square bracket.
     
```

     WARNING: warning message [Tue Mar 22 13:11:31 PDT 2011]
     
```

 
-  `java.util.logging.SimpleFormatter.format="%1$tc %2$s%n%4$s: %5$s%6$s%n"`
     

This prints 2 lines where the first line includes
     the timestamp (`1$`) and the source (`2$`);
     the second line includes the log level (`4$`) and
     the log message (`5$`) followed by the throwable
     and its backtrace (`6$`), if any:
     
```

     Tue Mar 22 13:11:31 PDT 2011 MyClass fatal
     SEVERE: several message with an exception
     java.lang.IllegalArgumentException: invalid argument
             at MyClass.mash(MyClass.java:9)
             at MyClass.crunch(MyClass.java:6)
             at MyClass.main(MyClass.java:3)
     
```

 
-  `java.util.logging.SimpleFormatter.format="%1$tb %1$td, %1$tY %1$tl:%1$tM:%1$tS %1$Tp %2$s%n%4$s: %5$s%n"`
      

This prints 2 lines similar to the example above
         with a different date/time formatting and does not print
         the throwable and its backtrace:
     
```

     Mar 22, 2011 1:11:31 PM MyClass fatal
     SEVERE: several message with an exception
     
```

 
-  `java.util.logging.SimpleFormatter.format="%1$tb %1$td, %1$tY %1$tl:%1$tM:%1$tS.%1$tN %1$Tp %2$s%n%4$s: %5$s%6$s%n"`
      

Since JDK 9, `java.util.logging` uses `systemUTC() java.time` to create more precise time
         stamps.
         The format above can be used to add a `.%1$tN` to the
         date/time formatting so that nanoseconds will also be printed:
     
```

     Feb 06, 2015 5:33:10.279216000 PM example.Main main
     INFO: This is a test
     
```

 

 

This method can also be overridden in a subclass.
 It is recommended to use the `formatMessage`
 convenience method to localize and format the message field.

**参数**

- **record** — the log record to be formatted.

**返回**

- a formatted log record
