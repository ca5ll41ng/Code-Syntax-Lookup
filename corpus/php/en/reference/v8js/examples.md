---
id: "en-php-guide-v8js-examples"
language: "php"
lang: "en"
category: "guide"
name: "v8js.examples"
title: "Examples"
module: "v8js"
source_url: "https://www.php.net/manual/en/v8js.examples.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Examples

Basic usage

**Basic Javascript execution**

```php


<?php

$v8 = new V8Js();

/* basic.js */
$JS = <<< EOT
len = print('Hello' + ' ' + 'World!' + "\\n");
len;
EOT;

try {
  var_dump($v8->executeString($JS, 'basic.js'));
} catch (V8JsException $e) {
  var_dump($e);
}

?>

  
```

The above example will output:

```text


Hello World!
int(13)

  
```
