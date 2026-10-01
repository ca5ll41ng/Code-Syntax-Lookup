---
id: "java-en-function-java-util-hexformat"
language: "java"
lang: "en"
category: "function"
name: "java.util.HexFormat"
title: "HexFormat"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/HexFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HexFormat

`HexFormat` converts between bytes and chars and hex-encoded strings which may include
 additional formatting markup such as prefixes, suffixes, and delimiters.
 

 There are two factories of `HexFormat` with preset parameters `of` and
 `ofDelimiter`. For other parameter combinations
 the `withXXX` methods return copies of `HexFormat` modified
 `withPrefix`, `withSuffix`, `withDelimiter`
 or choice of `withUpperCase` or `withLowerCase` parameters.
 

 For primitive to hexadecimal string conversions the `toHexDigits`
 methods include `toHexDigits`, `toHexDigits`, and
 `toHexDigits`, etc. The default is to use lowercase characters `"0-9","a-f"`.
 For conversions producing uppercase hexadecimal the characters are `"0-9","A-F"`.
 Only the `isUpperCase` parameter is
 considered; the delimiter, prefix and suffix are not used.

 

 For hexadecimal string to primitive conversions the `fromHexDigits`
 methods include `fromHexDigits`,
 `fromHexDigitsToLong`, and
 `fromHexDigit` converts a single character or codepoint.
 For conversions from hexadecimal characters the digits and uppercase and lowercase
 characters in `"0-9", "a-f", and "A-F"` are converted to corresponding values
 `0-15`. The delimiter, prefix, suffix, and uppercase parameters are not used.

 

 For byte array to formatted hexadecimal string conversions
 the `formatHex` methods include `formatHex`
 and `formatHex`.
 The formatted output is a string or is appended to an `Appendable` such as
 `StringBuilder` or `java.io.PrintStream`.
 Each byte value is formatted as the prefix, two hexadecimal characters from the
 uppercase or lowercase digits, and the suffix.
 A delimiter follows each formatted value, except the last.
 For conversions producing uppercase hexadecimal strings use `withUpperCase`.

 

 For formatted hexadecimal string to byte array conversions the
 `parseHex` methods include `parseHex` and
 `parseHex`.
 Each byte value is parsed from the prefix, two case insensitive hexadecimal characters,
 and the suffix. A delimiter follows each formatted value, except the last.

 For example, an individual byte is converted to a string of hexadecimal digits using
 `toHexDigits` and converted from a string to a
 primitive value using `fromHexDigits`.
 
```
`HexFormat hex = HexFormat.of();
     byte b = 127;
     String byteStr = hex.toHexDigits(b);

     byte byteVal = (byte)hex.fromHexDigits(byteStr);
     assert(byteStr.equals("7f"));
     assert(b == byteVal);

     // The hexadecimal digits are: "7f"
 `
```

 

 For a comma (`", "`) separated format with a prefix (`"#"`)
 using lowercase hex digits the `HexFormat` is:
 
```
`HexFormat commaFormat = HexFormat.ofDelimiter(", ").withPrefix("#");
     byte[] bytes = {0, 1, 2, 3, 124, 125, 126, 127`;
     String str = commaFormat.formatHex(bytes);

     byte[] parsed = commaFormat.parseHex(str);
     assert(Arrays.equals(bytes, parsed));

     // The formatted string is: "#00, #01, #02, #03, #7c, #7d, #7e, #7f"
 }
```

 

 For a fingerprint of byte values that uses the delimiter colon (`":"`)
 and uppercase characters the `HexFormat` is:
 
```
`HexFormat formatFingerprint = HexFormat.ofDelimiter(":").withUpperCase();
     byte[] bytes = {0, 1, 2, 3, 124, 125, 126, 127`;
     String str = formatFingerprint.formatHex(bytes);
     byte[] parsed = formatFingerprint.parseHex(str);
     assert(Arrays.equals(bytes, parsed));

     // The formatted string is: "00:01:02:03:7C:7D:7E:7F"
 }
```

 

 This is a value-based
 class; use of identity-sensitive operations (including reference equality
 (`==`), identity hash code, or synchronization) on instances of
 `HexFormat` may have unpredictable results and should be avoided.
 The `equals` method should be used for comparisons.
 

 This class is immutable and thread-safe.
 

 Unless otherwise noted, passing a null argument to any method will cause a
 `java.lang.NullPointerException NullPointerException` to be thrown.

> *Since 17*
