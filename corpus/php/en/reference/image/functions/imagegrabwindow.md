---
id: "en-php-function-function-imagegrabwindow"
language: "php"
lang: "en"
category: "function"
name: "imagegrabwindow"
title: "Captures a window"
signature: "GdImage|false imagegrabwindow(int $handle, bool $client_area = false)"
module: "image"
source_url: "https://www.php.net/manual/en/function.imagegrabwindow.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Captures a window

## Description

```php
GdImage|false imagegrabwindow(int $handle, bool $client_area = false)
```

Grabs a window or its client area using a windows handle (HWND property in COM instance)

> This function is only available on Windows.

## Parameters

- **`$handle`** — The HWND window ID.
- **`$client_area`** — Include the client area of the application window.

## Return Values

Returns an image object on success, `false` on failure.

## Errors/Exceptions

E_NOTICE is issued if `$handle` is invalid window handle. E_WARNING is issued if the Windows API is too old.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | On success, this function returns a `GDImage` instance now; previously, a `resource` was returned. |
| 8.0.0 | `$client_area` expects a `bool` now; previously it expected an `int`. |

## Examples

**`imagegrabwindow()` example**

Capture a window (IE for example)

```php


<?php
$browser = new COM("InternetExplorer.Application");
$handle = $browser->HWND;
$browser->Visible = true;
$im = imagegrabwindow($handle);
$browser->Quit();
imagepng($im, "iesnap.png");
?>

    
```

Capture a window (IE for example) but with its content

```php


<?php
$browser = new COM("InternetExplorer.Application");
$handle = $browser->HWND;
$browser->Visible = true;
$browser->Navigate("http://www.libgd.org");

/* Still working? */
while ($browser->Busy) {
    com_message_pump(4000);
}
$im = imagegrabwindow($handle, 0);
$browser->Quit();
imagepng($im, "iesnap.png");
?>

    
```

## See Also

 `imagegrabscreen()`
