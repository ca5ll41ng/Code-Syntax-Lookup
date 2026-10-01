---
id: "en-php-function-function-ob-tidyhandler"
language: "php"
lang: "en"
category: "function"
name: "ob_tidyhandler"
title: "ob_start callback function to repair the buffer"
signature: "string ob_tidyhandler(string $input, [int $mode = ...])"
module: "tidy"
source_url: "https://www.php.net/manual/en/function.ob-tidyhandler.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# ob_start callback function to repair the buffer

## Description

```php
string ob_tidyhandler(string $input, [int $mode = ...])
```

Callback function for `ob_start()` to repair the buffer.

## Parameters

- **`$input`** — The buffer.
- **`$mode`** — The buffer mode.

## Return Values

Returns the modified buffer.

## Examples

**`ob_tidyhandler()` example**

```php


<?php
ob_start('ob_tidyhandler');

echo '<p>test</i>';
?>

    
```

The above example will output:

```text



<html>
<head>
<title></title>
</head>
<body>
<p>test</p>
</body>
</html>

    
```

## See Also

`ob_start()`
