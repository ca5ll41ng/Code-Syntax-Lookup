---
id: "en-php-guide-enum-uri-uricomparisonmode"
language: "php"
lang: "en"
category: "guide"
name: "enum.uri-uricomparisonmode"
title: "The Uri\\UriComparisonMode enum"
module: "uri"
source_url: "https://www.php.net/manual/en/enum.uri-uricomparisonmode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Uri\UriComparisonMode enum

Uri\UriComparisonMode

  Introduction  Specifies if the `fragment` component should affect the result of a URI comparison.    If the fragment is excluded from the comparison, two URIs will be compared as if neither of them has a `fragment` component.       Uri  `UriComparisonMode`  IncludeFragment The `fragment` component is included in the comparison.   ExcludeFragment The `fragment` component is excluded from the comparison.
