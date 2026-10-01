---
id: "java-en-function-string-stripindent"
language: "java"
lang: "en"
category: "function"
name: "String.stripIndent"
signature: "public String stripIndent()"
title: "String.stripIndent"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String.stripIndent

```java
public String stripIndent()
```

Returns a string whose value is this string, with incidental
 `isWhitespace(int) white space` removed from
 the beginning and end of every line.
 

 Incidental `isWhitespace(int) white space`
 is often present in a text block to align the content with the opening
 delimiter. For example, in the following code, dots represent incidental
 `isWhitespace(int) white space`:
 
```

 String html = """
 ..............&lt;html&gt;
 ..............    &lt;body&gt;
 ..............        &lt;p&gt;Hello, world&lt;/p&gt;
 ..............    &lt;/body&gt;
 ..............&lt;/html&gt;
 ..............""";
 
```

 This method treats the incidental
 `isWhitespace(int) white space` as indentation to be
 stripped, producing a string that preserves the relative indentation of
 the content. Using | to visualize the start of each line of the string:
 
```

 |&lt;html&gt;
 |    &lt;body&gt;
 |        &lt;p&gt;Hello, world&lt;/p&gt;
 |    &lt;/body&gt;
 |&lt;/html&gt;
 
```

 First, the individual lines of this string are extracted. A line
 is a sequence of zero or more characters followed by either a line
 terminator or the end of the string.
 If the string has at least one line terminator, the last line consists
 of the characters between the last terminator and the end of the string.
 Otherwise, if the string has no terminators, the last line is the start
 of the string to the end of the string, in other words, the entire
 string.
 A line does not include the line terminator.
 

 Then, the minimum indentation (min) is determined as follows:
 
   
- 

For each non-blank line (as defined by `isBlank`),
   the leading `isWhitespace(int) white space`
   characters are counted.
   
   
- 

The leading `isWhitespace(int) white space`
   characters on the last line are also counted even if
   `isBlank() blank`.
   
 

 

The min value is the smallest of these counts.
 

 For each `isBlank() non-blank` line, min leading
 `isWhitespace(int) white space` characters are
 removed, and any trailing `isWhitespace(int) white
 space` characters are removed. `isBlank() Blank` lines
 are replaced with the empty string.

 

 Finally, the lines are joined into a new string, using the LF character
 `"\n"` (U+000A) to separate lines.

 This method's primary purpose is to shift a block of lines as far as
 possible to the left, while preserving relative indentation. Lines
 that were indented the least will thus have no leading
 `isWhitespace(int) white space`.
 The result will have the same number of line terminators as this string.
 If this string ends with a line terminator then the result will end
 with a line terminator.

 This method treats all `isWhitespace(int) white space`
 characters as having equal width. As long as the indentation on every
 line is consistently composed of the same character sequences, then the
 result will be as described above.

**返回**

- string with incidental indentation removed and line terminators normalized

**参见**

- String#lines()
- String#isBlank()
- String#indent(int)
- Character#isWhitespace(int)

> *Since 15*
