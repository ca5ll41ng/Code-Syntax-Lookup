---
id: "java-en-function-properties-load"
language: "java"
lang: "en"
category: "function"
name: "Properties.load"
signature: "public synchronized void load(Reader reader) throws IOException"
title: "Properties.load"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Properties.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Properties.load

```java
public synchronized void load(Reader reader) throws IOException
```

Reads a property list (key and element pairs) from the input
 character stream in a simple line-oriented format.
 

 Properties are processed in terms of lines. There are two
 kinds of lines, natural lines and logical lines.
 A natural line is defined as a line of
 characters that is terminated either by a line terminator
 sequence (`\n`, `\r`, or `\r\n`)
 or by the end of the stream. A natural line may be either a blank line,
 a comment line, or hold all or some of a key-element pair. A logical
 line holds all the data of a key-element pair, which may be spread
 out across several adjacent natural lines by escaping
 the line terminator sequence with a backslash character
 `\`.  Note that a comment line cannot be extended
 in this manner; every natural line that is a comment must have
 its own comment indicator, as described below. Lines are read from
 input until the end of the stream is reached.

 

 A natural line that contains only white space characters is
 considered blank and is ignored.  A comment line has an ASCII
 `'#'` or `'!'` as its first non-whitespace
 character; comment lines are also ignored and do not
 encode key-element information.  In addition to line
 terminators, this format considers the characters space
 (`' '`, `'\u005Cu0020'`), tab
 (`'\t'`, `'\u005Cu0009'`), and form feed
 (`'\f'`, `'\u005Cu000C'`) to be white
 space.

 

 If a logical line is spread across several natural lines, the
 backslash escaping the line terminator sequence, the line
 terminator sequence itself, and any white space at the start of the
 following line have no effect on the key or element values.
 The remainder of the discussion of key and element parsing
 (when loading) will assume all the characters constituting
 the key and element appear on a single natural line after
 line continuation characters have been removed.  Note that
 it is not sufficient to only examine the character
 preceding a line terminator sequence to decide if the line
 terminator is escaped; there must be an odd number of
 contiguous backslashes for the line terminator to be escaped.
 Since the input is processed from left to right, a
 non-zero even number of 2n contiguous backslashes
 before a line terminator (or elsewhere) encodes n
 backslashes after escape processing.

 

 The key contains all of the characters in the line starting
 with the first non-whitespace character and up to, but not
 including, the first unescaped `'='`,
 `':'`, or white space character other than a line
 terminator. All of these key termination characters may be
 included in the key by escaping them with a preceding backslash
 character; for example,

 `\:\=`

 would be the two-character key `":="`.  Line
 terminator characters can be included using `\r` and
 `\n` escape sequences.  Any white space after the
 key is skipped; if the first non-whitespace character after
 the key is `'='` or `':'`, then it is
 ignored and any white space characters after it are also
 skipped.  All remaining characters on the line become part of
 the associated element string; if there are no remaining
 characters, the element is the empty string
 `""`.  Once the raw character sequences
 constituting the key and element are identified, escape
 processing is performed as described above.

 

 As an example, each of the following three lines specifies the key
 `"Truth"` and the associated element value
 `"Beauty"`:
 
```

 Truth = Beauty
  Truth:Beauty
 Truth                    :Beauty
 
```

 As another example, the following three lines specify a single
 property:
 
```

 fruits                           apple, banana, pear, \
                                  cantaloupe, watermelon, \
                                  kiwi, mango
 
```

 The key is `"fruits"` and the associated element is:
 
```
"apple, banana, pear, cantaloupe, watermelon, kiwi, mango"
```

 Note that a space appears before each `\` so that a space
 will appear after each comma in the final result; the `\`,
 line terminator, and leading white space on the continuation line are
 merely discarded and are not replaced by one or more other
 characters.
 

 As a third example, the line:
 
```
cheeses
 
```

 specifies that the key is `"cheeses"` and the associated
 element is the empty string `""`.
 

 
 Characters in keys and elements can be represented in escape
 sequences similar to those used for character and string literals
 (see sections {@jls 3.3} and {@jls 3.10.6} of
 The Java Language Specification).

 The differences from the character escape sequences and Unicode
 escapes used for characters and strings are:

 
 
-  Octal escapes are not recognized.

 
-  The character sequence `\b` does not
 represent a backspace character.

 
-  The method does not treat a backslash character,
 `\`, before a non-valid escape character as an
 error; the backslash is silently dropped.  For example, in a
 Java string the sequence `"\z"` would cause a
 compile time error.  In contrast, this method silently drops
 the backslash.  Therefore, this method treats the two character
 sequence `"\b"` as equivalent to the single
 character `'b'`.

 
-  Escapes are not necessary for single and double quotes;
 however, by the rule above, single and double quote characters
 preceded by a backslash still yield single and double quote
 characters, respectively.

 
-  Only a single 'u' character is allowed in a Unicode escape
 sequence.

 

 

 The specified stream remains open after this method returns.

**参数**

- **reader** — the input character stream.

**异常**

- **IOException** — if an error occurred when reading from the input stream.
- **IllegalArgumentException** — if a malformed Unicode escape appears in the input.
- **NullPointerException** — if `reader` is null.

> *Since 1.6*
