---
id: "java-en-function-java-util-scanner"
language: "java"
lang: "en"
category: "function"
name: "java.util.Scanner"
title: "Scanner"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Scanner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Scanner

A simple text scanner which can parse primitive types and strings using
 regular expressions.

 

A `Scanner` breaks its input into tokens using a
 delimiter pattern, which by default matches whitespace. The resulting
 tokens may then be converted into values of different types using the
 various `next` methods.

 

For example, this code allows a user to read a number from
 the console.
 {@snippet :
     var con = System.console();
     if (con != null) {
         // @link substring="reader()" target="java.io.Console#reader()" :
         Scanner sc = new Scanner(con.reader());
         int i = sc.nextInt();
     }
 }

 

This code allows `long` types to be
 assigned from entries in a file `myNumbers`:
 {@snippet :
      Scanner sc = new Scanner(new File("myNumbers"));
      while (sc.hasNextLong()) {
          long aLong = sc.nextLong();
      }
 }

 

This code uses a `Scanner` to read lines from `in`. The
 `Scanner` uses the system property value of
 `#stdin.encoding stdin.encoding` as the `Charset`. Specifying
 the charset explicitly is important when reading from `System.in`, as it
 may differ from the `defaultCharset() default charset` depending
 on the host environment or user configuration:
 {@snippet :
      Scanner sc = new Scanner(System.in, System.getProperty("stdin.encoding"));
      while (sc.hasNextLine()) {
          String aLine = sc.nextLine();
      }
 }

 

The scanner can also use delimiters other than whitespace. This
 example reads several items in from a string:
 {@snippet :
     String input = "1 fish 2 fish red fish blue fish";
     Scanner s = new Scanner(input).useDelimiter("\\s*fish\\s*");
     System.out.println(s.nextInt());
     System.out.println(s.nextInt());
     System.out.println(s.next());
     System.out.println(s.next());
     s.close();
 }
 

 prints the following output:
 
```
`1
     2
     red
     blue
 `
```

 

The same output can be generated with this code, which uses a regular
 expression to parse all four tokens at once:
 {@snippet :
     String input = "1 fish 2 fish red fish blue fish";
     Scanner s = new Scanner(input);
     s.findInLine("(\\d+) fish (\\d+) fish (\\w+) fish (\\w+)");
     MatchResult result = s.match();
     for (int i=1; i<=result.groupCount(); i++)
         System.out.println(result.group(i));
     s.close();
 }

 

The default whitespace delimiter used
 by a scanner is as recognized by `isWhitespace(char)
 Character.isWhitespace`. The `reset reset`
 method will reset the value of the scanner's delimiter to the default
 whitespace delimiter regardless of whether it was previously changed.

 

A scanning operation may block waiting for input.

 

The `next` and `hasNext` methods and their
 companion methods (such as `nextInt` and
 `hasNextInt`) first skip any input that matches the delimiter
 pattern, and then attempt to return the next token. Both `hasNext()`
 and `next()` methods may block waiting for further input.  Whether a
 `hasNext()` method blocks has no connection to whether or not its
 associated `next()` method will block. The `tokens` method
 may also block waiting for input.

 

The `findInLine findInLine`,
 `findWithinHorizon findWithinHorizon`,
 `skip skip`, and `findAll findAll`
 methods operate independently of the delimiter pattern. These methods will
 attempt to match the specified pattern with no regard to delimiters in the
 input and thus can be used in special circumstances where delimiters are
 not relevant. These methods may block waiting for more input.

 

When a scanner throws an `InputMismatchException`, the scanner
 will not pass the token that caused the exception, so that it may be
 retrieved or skipped via some other method.

 

Depending upon the type of delimiting pattern, empty tokens may be
 returned. For example, the pattern `"\\s+"` will return no empty
 tokens since it matches multiple instances of the delimiter. The delimiting
 pattern `"\\s"` could return empty tokens since it only passes one
 space at a time.

 

 A scanner can read text from any object which implements the `java.lang.Readable` interface.  If an invocation of the underlying
 readable's `read read` method throws an `java.io.IOException` then the scanner assumes that the end of the input
 has been reached.  The most recent `IOException` thrown by the
 underlying readable can be retrieved via the `ioException` method.

 

When a `Scanner` is closed, it will close its input source
 if the source implements the `java.io.Closeable` interface.

 

A `Scanner` is not safe for multithreaded use without
 external synchronization.

 

Unless otherwise mentioned, passing a `null` parameter into
 any method of a `Scanner` will cause a
 `NullPointerException` to be thrown.

 

A scanner will default to interpreting numbers as decimal unless a
 different radix has been set by using the `useRadix` method. The
 `reset` method will reset the value of the scanner's radix to
 `10` regardless of whether it was previously changed.

  Localized numbers 

 

 An instance of this class is capable of scanning numbers in the standard
 formats as well as in the formats of the scanner's locale. A scanner's
 initial locale is the value returned by the `getDefault(Locale.Category)
 Locale.getDefault` method; it may be changed via the `useLocale useLocale` method. The `reset` method will reset the value of the
 scanner's locale to the initial locale regardless of whether it was
 previously changed.

 

The localized formats are defined in terms of the following parameters,
 which for a particular locale are taken from that locale's `java.text.DecimalFormat DecimalFormat` object, `df`, and its
 `java.text.DecimalFormatSymbols DecimalFormatSymbols` object,
 `dfs`.

 
     LocalGroupSeparator&nbsp;&nbsp;
         The character used to separate thousands groups,
         i.e.,&nbsp;`dfs.``getGroupingSeparator
         getGroupingSeparator`
     LocalDecimalSeparator&nbsp;&nbsp;
         The character used for the decimal point,
     i.e.,&nbsp;`dfs.``getDecimalSeparator
     getDecimalSeparator`
     LocalPositivePrefix&nbsp;&nbsp;
         The string that appears before a positive number (may
         be empty), i.e.,&nbsp;`df.``getPositivePrefix
         getPositivePrefix`
     LocalPositiveSuffix&nbsp;&nbsp;
         The string that appears after a positive number (may be
         empty), i.e.,&nbsp;`df.``getPositiveSuffix
         getPositiveSuffix`
     LocalNegativePrefix&nbsp;&nbsp;
         The string that appears before a negative number (may
         be empty), i.e.,&nbsp;`df.``getNegativePrefix
         getNegativePrefix`
     LocalNegativeSuffix&nbsp;&nbsp;
         The string that appears after a negative number (may be
         empty), i.e.,&nbsp;`df.``getNegativeSuffix
     getNegativeSuffix`
     LocalNaN&nbsp;&nbsp;
         The string that represents not-a-number for
         floating-point values,
         i.e.,&nbsp;`dfs.``getNaN
         getNaN`
     LocalInfinity&nbsp;&nbsp;
         The string that represents infinity for floating-point
         values, i.e.,&nbsp;`dfs.``getInfinity
         getInfinity`
 

  Number syntax 

 

 The strings that can be parsed as numbers by an instance of this class
 are specified in terms of the following regular-expression grammar, where
 Rmax is the highest digit in the radix being used (for example, Rmax is 9 in base 10).

 
   NonAsciiDigit:
       A non-ASCII character c for which
            `isDigit Character.isDigit``(c)`
                        returns&nbsp;true

   Non0Digit:
       `[1-`Rmax`] | `NonASCIIDigit

   Digit:
       `[0-`Rmax`] | `NonASCIIDigit

   GroupedNumeral:
       (&nbsp;Non0Digit
                   Digit`?
                   `Digit`?`
       &nbsp;&nbsp;&nbsp;&nbsp;(&nbsp;LocalGroupSeparator
                         Digit
                         Digit
                         Digit`)+ )`

   Numeral:
       `( ( `Digit`+ )
               | `GroupedNumeral`)`

   Integer:
       `( [-+]? ( `Numeral`) )`
       `| `LocalPositivePrefix Numeral
                      LocalPositiveSuffix
       `| `LocalNegativePrefix Numeral
                 LocalNegativeSuffix

   DecimalNumeral:
       Numeral
       `| `Numeral
                 LocalDecimalSeparator
                 Digit`*`
       `| `LocalDecimalSeparator
                 Digit`+`

   Exponent:
       `( [eE] [+-]? `Digit`+ )`

   Decimal:
       `( [-+]? `DecimalNumeral
                         Exponent`? )`
       `| `LocalPositivePrefix
                 DecimalNumeral
                 LocalPositiveSuffix
                 Exponent`?`
       `| `LocalNegativePrefix
                 DecimalNumeral
                 LocalNegativeSuffix
                 Exponent`?`

   HexFloat:
       `[-+]? 0[xX][0-9a-fA-F]*\.[0-9a-fA-F]+
                 ([pP][-+]?[0-9]+)?`

   NonNumber:
       `NaN
                          | `LocalNan`| Infinity
                          | `LocalInfinity

   SignedNonNumber:
       `( [-+]? `NonNumber`)`
       `| `LocalPositivePrefix
                 NonNumber
                 LocalPositiveSuffix
       `| `LocalNegativePrefix
                 NonNumber
                 LocalNegativeSuffix

   Float:
       Decimal
           `| `HexFloat
           `| `SignedNonNumber

 
 

Whitespace is not significant in the above regular expressions.

> *Since 1.5*
