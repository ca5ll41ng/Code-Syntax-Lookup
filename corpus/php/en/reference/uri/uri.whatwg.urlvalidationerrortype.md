---
id: "en-php-guide-enum-uri-whatwg-urlvalidationerrortype"
language: "php"
lang: "en"
category: "guide"
name: "enum.uri-whatwg-urlvalidationerrortype"
title: "The Uri\\WhatWg\\UrlValidationErrorType enum"
module: "uri"
source_url: "https://www.php.net/manual/en/enum.uri-whatwg-urlvalidationerrortype.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Uri\WhatWg\UrlValidationErrorType enum

Uri\WhatWg\UrlValidationErrorType

  Introduction  The possible validation errors defined in the [WHATWG URL Standard]().       Uri\WhatWg  `UrlValidationErrorType`  DomainToAscii Error during the process of converting the domain name to an ASCII string.   DomainToUnicode Error during the process of converting the domain name to a Unicode string.   DomainInvalidCodePoint The input's host contains a forbidden domain code point.   HostInvalidCodePoint An opaque host (in a URL that is not special) contains a forbidden host code point.   Ipv4EmptyPart An IPv4 address ends with a `U+002E` (`.`).   Ipv4TooManyParts An IPv4 address does not consist of exactly 4 parts.   Ipv4NonNumericPart An IPv4 address part is not numeric.   Ipv4NonDecimalPart The IPv4 address contains numbers expressed using hexadecimal or octal digits.   Ipv4OutOfRangePart An IPv4 address part exceeds `255`.   Ipv6Unclosed An IPv6 address is missing the closing `U+005D` (`]`).   Ipv6InvalidCompression An IPv6 address begins with improper compression.   Ipv6TooManyPieces An IPv6 address contains more than 8 pieces.   Ipv6MultipleCompression An IPv6 address is compressed in more than one spot.   Ipv6InvalidCodePoint  An IPv6 address contains a code point that is neither an ASCII hex digit nor a `U+003A` (`:`). Or it unexpectedly ends.    Ipv6TooFewPieces An uncompressed IPv6 address contains fewer than 8 pieces.   Ipv4InIpv6TooManyPieces An IPv6 address with IPv4 address syntax: the IPv6 address has more than 6 pieces.   Ipv4InIpv6InvalidCodePoint An IPv6 address with IPv4 address syntax: an IPv4 part is empty, contains a non-ASCII digit or a leading zero, or there are too many IPv4 parts.   Ipv4InIpv6OutOfRangePart An IPv6 address with IPv4 address syntax: an IPv4 part exceeds `255`.   Ipv4InIpv6TooFewParts An IPv6 address with IPv4 address syntax: an IPv4 address contains too few parts.   InvalidUrlUnit A code point is found that is not a URL unit.   SpecialSchemeMissingFollowingSolidus The input’s scheme is not followed by `//`.   MissingSchemeNonRelativeUrl  The input is missing a scheme, because it does not begin with an ASCII alpha, and either no base URL was provided or the base URL cannot be used as a base URL because it has an opaque path.    InvalidReverseSoldius The URL has a special scheme and it uses `U+005C` (`\`) instead of `U+002F` (`/`).   InvalidCredentials The input includes credentials.   HostMissing The input has a special scheme, but does not contain a host.   PortOutOfRange The input’s port is too big.   PortInvalid The input’s port is invalid.   FileInvalidWindowsDriveLetter  The input is a relative-URL string that starts with a Windows drive letter and the base URL's scheme is `file`.    FileInvalidWindowsDriveLetterHost A `file:` URL's host is a Windows drive letter.
