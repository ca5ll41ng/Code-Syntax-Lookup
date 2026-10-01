---
id: "java-en-function-java-text-choiceformat"
language: "java"
lang: "en"
category: "function"
name: "java.text.ChoiceFormat"
title: "ChoiceFormat"
directive: "type"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/ChoiceFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ChoiceFormat

`ChoiceFormat` is a concrete subclass of `NumberFormat` that
 allows you to attach a format to a range of numbers.
 It is generally used in a `MessageFormat` for handling plurals.
 The choice is specified with an ascending list of doubles, where each item
 specifies a half-open interval up to the next item:
 
```

 X matches j if and only if limit[j] &le; X &lt; limit[j+1]
 
```

 
 If there is no match, then either the first or last index is used, depending
 on whether the number (X) is too low or too high.  If the limit array is not
 in ascending order, the results of formatting will be incorrect.  ChoiceFormat
 also accepts &#92;u221E as equivalent to infinity(INF).

 

 **Note:**
 `ChoiceFormat` differs from the other `Format`
 classes in that you create a `ChoiceFormat` object with a
 constructor (not with a `getInstance` style factory
 method). The factory methods aren't necessary because `ChoiceFormat`
 doesn't require any complex setup for a given locale. In fact,
 `ChoiceFormat` doesn't implement any locale specific behavior.

 Patterns
 A `ChoiceFormat` pattern has the following syntax:
 
 
 Pattern:
 SubPattern *("|" SubPattern)
 

 
 SubPattern:
 Limit Relation Format
 Note: Each additional SubPattern must have an ascending Limit-Relation interval
 

 
 Limit:
 Number / "&infin;" / "-&infin;"
 

 
 Number:
 ["-"] *(Digit) 1*(Decimal / Digit) *(Digit) [Exponent]
 

 
 Decimal:
 1*(Digit ".") / 1*("." Digit)
 

 
 Digit:
 0 - 9
 

 
 Exponent:
 *(Digit) Digit ExponentSymbol Digit *(Digit)
 

 
 ExponentSymbol:
 "e" / "E"
 

 
 Relation:
 "#" / "&lt;" / "&le;"
 

 
 Format:
 Any characters except the special pattern character '|'
 

 

 Note:The relation &le; is not equivalent to &lt;&equals;

 

 To use a reserved special pattern character within a Format pattern,
 it must be single quoted. For example, `new ChoiceFormat("1#'|'foo'|'").format(1)`
 returns `"|foo|"`.
 Use two single quotes in a row to produce a literal single quote. For example,
 `new ChoiceFormat("1# ''one'' ").format(1)` returns `" 'one' "`.

 Usage Information

 

 A `ChoiceFormat` can be constructed using either an array of formats
 and an array of limits or a string pattern. When constructing with
 format and limit arrays, the length of these arrays must be the same.

 For example,
 
 
- 
     limits = {1,2,3,4,5,6,7}

     formats = {"Sun","Mon","Tue","Wed","Thur","Fri","Sat"}
 
- 
     limits = {0, 1, ChoiceFormat.nextDouble(1)}

     formats = {"no files", "one file", "many files"}

     (`nextDouble` can be used to get the next higher double, to
     make the half-open interval.)
 

 

 Below is an example of constructing a ChoiceFormat with arrays to format
 and parse values:
 {@snippet lang=java :
 double[] limits = {1,2,3,4,5,6,7};
 String[] dayOfWeekNames = {"Sun","Mon","Tue","Wed","Thur","Fri","Sat"};
 ChoiceFormat form = new ChoiceFormat(limits, dayOfWeekNames);
 ParsePosition status = new ParsePosition(0);
 for (double i = 0.0; i <= 8.0; ++i) {
     status.setIndex(0);
     System.out.println(i + " -> " + form.format(i) + " -> "
                              + form.parse(form.format(i),status));
 }
 }

 

Below is an example of constructing a ChoiceFormat with a String pattern:
 {@snippet lang=java :
 ChoiceFormat fmt = new ChoiceFormat(
      "-1#is negative| 0#is zero or fraction | 1#is one |1.0
 See `#pattern_caveats MessageFormat` for caveats regarding
 `MessageFormat` patterns within a `ChoiceFormat` pattern.

 Synchronization

 

 Choice formats are not synchronized.
 It is recommended to create separate format instances for each thread.
 If multiple threads access a format concurrently, it must be synchronized
 externally.

 throwing an `IllegalArgumentException` for all incorrect cases.
 See the `Implementation Note` for this implementation's behavior regarding
 incorrect patterns.
 

This class inherits instance methods from `NumberFormat` it does
 not utilize; a subclass could override and throw `UnsupportedOperationException` for such methods.
 throw an exception or succeed and discard the incorrect portion. A `NumberFormatException` is thrown if a `limit` can not be
 parsed as a numeric value and an `IllegalArgumentException` is thrown
 if a `SubPattern` is missing, or the intervals are not ascending.
 Discarding the incorrect portion may result in a ChoiceFormat with
 empty `limits` and `formats`.

**参见**

- DecimalFormat
- MessageFormat

> *Since 1.1*
