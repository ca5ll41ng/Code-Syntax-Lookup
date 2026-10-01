---
id: "en-php-function-tidy-getconfig"
language: "php"
lang: "en"
category: "function"
name: "tidy::getConfig"
aliases: ["tidy_get_config"]
title: "Get current Tidy configuration"
signature: "public array tidy::getConfig()"
module: "tidy"
source_url: "https://www.php.net/manual/en/tidy.getconfig.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get current Tidy configuration

## Description

Object-oriented style

```php
public array tidy::getConfig()
```

Procedural style

```php
array tidy_get_config(tidy $tidy)
```

Gets the list of the configuration options in use by the given tidy `$tidy`.

## Parameters

- **`$tidy`** — The `Tidy` object.

## Return Values

Returns an array of configuration options.

For an explanation about each option, visit []().

## Examples

**`tidy::getConfig()` example**

```php


<?php
$html = '<p>test</p>';
$config = array('indent' => TRUE,
                'output-xhtml' => TRUE,
                'wrap' => 200);

$tidy = tidy_parse_string($html, $config);

print_r($tidy->getConfig());
?>

    
```

The above example will output:

```text


Array
(
    [indent-spaces] => 2
    [wrap] => 200
    [tab-size] => 8
    [char-encoding] => 1
    [input-encoding] => 3
    [output-encoding] => 1
    [newline] => 1
    [doctype-mode] => 1
    [doctype] =>
    [repeated-attributes] => 1
    [alt-text] =>
    [slide-style] =>
    [error-file] =>
    [output-file] =>
    [write-back] =>
    [markup] => 1
    [show-warnings] => 1
    [quiet] =>
    [indent] => 1
    [hide-endtags] =>
    [input-xml] =>
    [output-xml] => 1
    [output-xhtml] => 1
    [output-html] =>
    [add-xml-decl] =>
    [uppercase-tags] =>
    [uppercase-attributes] =>
    [bare] =>
    [clean] =>
    [logical-emphasis] =>
    [drop-proprietary-attributes] =>
    [drop-font-tags] =>
    [drop-empty-paras] => 1
    [fix-bad-comments] => 1
    [break-before-br] =>
    [split] =>
    [numeric-entities] =>
    [quote-marks] =>
    [quote-nbsp] => 1
    [quote-ampersand] => 1
    [wrap-attributes] =>
    [wrap-script-literals] =>
    [wrap-sections] => 1
    [wrap-asp] => 1
    [wrap-jste] => 1
    [wrap-php] => 1
    [fix-backslash] => 1
    [indent-attributes] =>
    [assume-xml-procins] =>
    [add-xml-space] =>
    [enclose-text] =>
    [enclose-block-text] =>
    [keep-time] =>
    [word-2000] =>
    [tidy-mark] =>
    [gnu-emacs] =>
    [gnu-emacs-file] =>
    [literal-attributes] =>
    [show-body-only] =>
    [fix-uri] => 1
    [lower-literals] => 1
    [hide-comments] =>
    [indent-cdata] =>
    [force-output] => 1
    [show-errors] => 6
    [ascii-chars] => 1
    [join-classes] =>
    [join-styles] => 1
    [escape-cdata] =>
    [language] =>
    [ncr] => 1
    [output-bom] => 2
    [replace-color] =>
    [css-prefix] =>
    [new-inline-tags] =>
    [new-blocklevel-tags] =>
    [new-empty-tags] =>
    [new-pre-tags] =>
    [accessibility-check] => 0
    [vertical-space] =>
    [punctuation-wrap] =>
    [merge-divs] => 1
)

    
```

## See Also

 `tidy_reset_config()` `tidy_save_config()`
